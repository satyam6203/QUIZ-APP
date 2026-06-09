document.getElementById("quizForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const topic = document.getElementById("topic").value;
    const questionText = document.getElementById("question").value;
    const opt1 = document.getElementById("opt1").value;
    const opt2 = document.getElementById("opt2").value;
    const opt3 = document.getElementById("opt3").value;
    const opt4 = document.getElementById("opt4").value;
    const correctAnswer = document.getElementById("correct").value;

    if(!topic){
        alert("Please select topic");
        return;
    }
    const quizData = {
        questionText: questionText,
        correctAnswer: correctAnswer,
        options: [opt1, opt2, opt3, opt4]
    };

    const url = `https://quiz-app-hnfbeecwhmhjaqb3.eastasia-01.azurewebsites.net/api/${topic}/quiz/save`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(quizData)
        });

        if(response.ok){
            alert("✅ Question saved successfully!");
            document.getElementById("quizForm").reset();
        } else {
            const text = await response.text();
            alert("❌ Failed: " + text);
        }

    } catch (error) {
        console.error(error);
        alert("⚠️ Server error");
    }
});