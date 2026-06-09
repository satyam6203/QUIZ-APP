const BASE_URL = "https://radio-diagnosis-applying-therapeutic.trycloudflare.com/api";

const topicSelect = document.getElementById("topicSelect");
const tableBody = document.getElementById("tableBody");
const quizForm = document.getElementById("quizForm");

let currentEditId = null;
let currentEditTopic = null;

//fetch question
if (topicSelect) {
    topicSelect.addEventListener("change", fetchQuestions);
}

async function fetchQuestions() {
    const topic = topicSelect.value;

    if (!topic) {
        tableBody.innerHTML = "";
        return;
    }

    const url = `${BASE_URL}/${topic}/quiz/questions`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        tableBody.innerHTML = "";

        data.forEach((q, index) => {

            const optionsList = q.options.map(opt => `<li>${opt}</li>`).join("");

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${q.questionText}</td>
                <td><ul>${optionsList}</ul></td>
                <td class="correct">${q.correctAnswer}</td>
                <td class="actions">
                    <button class="edit" onclick="editQuestion('${topic}', ${q.id}, this)">Edit</button>
                    <button class="delete" onclick="deleteQuestion('${topic}', ${q.id})">Delete</button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
        tableBody.innerHTML = `<tr><td colspan="5">Error loading data</td></tr>`;
    }
}

//delete
async function deleteQuestion(topic, id) {

    if (!confirm("Are you sure you want to delete this question?")) return;

    const url = `${BASE_URL}/${topic}/quiz/delete/${id}`;

    try {
        const response = await fetch(url, { method: "DELETE" });

        if (response.ok) {
            alert("Deleted successfully");
            fetchQuestions();
        } else {
            alert("Delete failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}

//edit
function editQuestion(topic, id, btn) {

    currentEditId = id;
    currentEditTopic = topic;

    const row = btn.closest("tr");

    const questionText = row.children[1].innerText;
    const options = Array.from(row.children[2].querySelectorAll("li")).map(li => li.innerText);
    const correct = row.children[3].innerText;

    document.getElementById("editQuestion").value = questionText;
    document.getElementById("editOpt1").value = options[0];
    document.getElementById("editOpt2").value = options[1];
    document.getElementById("editOpt3").value = options[2];
    document.getElementById("editOpt4").value = options[3];
    document.getElementById("editCorrect").value = correct;

    document.getElementById("editModal").style.display = "flex";
}

function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

// update
async function updateQuestion() {

    const updatedData = {
        questionText: document.getElementById("editQuestion").value,
        correctAnswer: document.getElementById("editCorrect").value,
        options: [
            document.getElementById("editOpt1").value,
            document.getElementById("editOpt2").value,
            document.getElementById("editOpt3").value,
            document.getElementById("editOpt4").value
        ]
    };

    const url = `${BASE_URL}/${currentEditTopic}/quiz/update/${currentEditId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            alert("Question updated successfully");
            closeEditModal();
            fetchQuestions();
        } else {
            alert("Update failed");
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}

// add question
if (quizForm) {
    quizForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const topic = document.getElementById("topic").value;
        const questionText = document.getElementById("question").value;
        const opt1 = document.getElementById("opt1").value;
        const opt2 = document.getElementById("opt2").value;
        const opt3 = document.getElementById("opt3").value;
        const opt4 = document.getElementById("opt4").value;
        const correctAnswer = document.getElementById("correct").value;

        if (!topic) {
            alert("Please select topic");
            return;
        }

        const quizData = {
            questionText,
            correctAnswer,
            options: [opt1, opt2, opt3, opt4]
        };

        const url = `${BASE_URL}/${topic}/quiz/save`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(quizData)
            });

            if (response.ok) {
                alert("Question saved successfully!");
                quizForm.reset();
            } else {
                alert("Failed to save question");
            }

        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    });
}