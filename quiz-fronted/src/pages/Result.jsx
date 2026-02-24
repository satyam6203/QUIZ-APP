import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch result from backend or localStorage
    const quizResult = JSON.parse(localStorage.getItem('quizResult'));
    
    if (quizResult) {
      setScore(quizResult.score);
      setTotalQuestions(quizResult.totalQuestions);
      
      const percentage = (quizResult.score / quizResult.totalQuestions) * 100;
      if (percentage >= 80) {
        setFeedback('Excellent work! Keep it up!');
      } else if (percentage >= 50) {
        setFeedback('Good job! You can do even better!');
      } else {
        setFeedback('Don\'t give up! Try again!');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Your Quiz Result</h1>
        <div className="text-3xl font-bold text-green-600 mb-4">
          You scored {score} out of {totalQuestions}
        </div>
        <p className="text-lg mb-6">{feedback}</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}