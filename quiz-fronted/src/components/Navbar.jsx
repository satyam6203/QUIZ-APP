import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle, FaTrophy, FaBook } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Master Quiz</Link>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center hover:text-green-500">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/quiz" className="flex items-center hover:text-blue-200">
            <FaQuestionCircle className="mr-2" /> Quiz
          </Link>
          <Link to="/performers" className="flex items-center hover:text-blue-200">
            <FaTrophy className="mr-2" /> Top Performers
          </Link>
          <Link to="/notes" className="flex items-center hover:text-blue-200">
            <FaBook className="mr-2" /> Notes
          </Link>
          <Link to="/login" className="flex items-center hover:text-blue-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}