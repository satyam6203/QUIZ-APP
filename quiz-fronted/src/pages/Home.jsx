import QuizCard from "../components/QuizCard";

const quizzes = [
  {
    id: 1,
    name: "Java",
    description: "Test your knowledge of Java fundamentals, OOP concepts, and advanced features.",
    price: 500,
    image: "/images/java.jpg"
  },
  // Add other quizzes...
];

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome To Master Quiz</h1>
        <p className="text-xl text-gray-600 mb-6">
          Test your programming knowledge and challenge yourself
        </p>
        <a 
          href="#quiz-packages" 
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg"
        >
          Start Now
        </a>
      </section>

      <section id="quiz-packages" className="py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Coding Quiz</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Challenge your coding knowledge across different programming languages. 
          Select a language below to begin your quiz.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quizzes.map(quiz => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>
    </div>
  );
}