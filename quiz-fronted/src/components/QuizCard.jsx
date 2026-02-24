import { Link } from "react-router-dom";

export default function QuizCard({ quiz }) {
  return (
    <div className="card bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
      <img 
        src={quiz.image} 
        alt={quiz.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{quiz.name}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">₹{quiz.price}</span>
          <Link 
            to="/payment" 
            state={{ quiz }}
            className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Take Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}