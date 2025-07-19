import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Landing Page */}
      <section className="landing-page bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome To Master Quiz</h1>
          <p className="text-xl mb-8">Test your programming knowledge and challenge yourself</p>
          <Link to="#quiz-packages" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-100 transition">
            Start Now
          </Link>
        </div>
      </section>

      {/* Quiz Packages */}
      <section id="quiz-packages" className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Coding Quiz</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Challenge your coding knowledge across different programming languages. Select a language below to begin your quiz.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Java Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src="https://via.placeholder.com/300x200" alt="Java Programming" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Java</h3>
                <p className="text-gray-600 mb-4">
                  Test your knowledge of Java fundamentals, OOP concepts, and advanced features.
                </p>
                <p className="text-blue-600 font-bold mb-4">500₹</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Take Quiz
                </button>
              </div>
            </div>
            
            {/* Python Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src="https://via.placeholder.com/300x200" alt="Python Programming" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Python</h3>
                <p className="text-gray-600 mb-4">
                  Evaluate your Python skills including syntax, data structures, and popular libraries.
                </p>
                <p className="text-blue-600 font-bold mb-4">400₹</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Take Quiz
                </button>
              </div>
            </div>
            
            {/* JavaScript Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src="https://via.placeholder.com/300x200" alt="JavaScript Programming" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">JavaScript</h3>
                <p className="text-gray-600 mb-4">
                  Assess your understanding of JavaScript, ES6+ features, and DOM manipulation.
                </p>
                <p className="text-blue-600 font-bold mb-4">300₹</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Take Quiz
                </button>
              </div>
            </div>
            
            {/* C Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img src="https://via.placeholder.com/300x200" alt="C Programming" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">C</h3>
                <p className="text-gray-600 mb-4">
                  Challenge yourself with fundamental C programming concepts and memory management.
                </p>
                <p className="text-blue-600 font-bold mb-4">200₹</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section id="Performer" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Top Performers</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our top performers have demonstrated exceptional knowledge across various programming languages.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
                <img 
                  src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`} 
                  alt={`Top Performer ${item}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold">Performer {item}</h4>
                <p className="text-gray-600">Score: {100 - item}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="notes" className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-4">Subject Notes</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Access comprehensive study materials for various programming languages.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Java', 'JavaScript', 'C', 'Python', 'DSA', 'Spring'].map((lang) => (
              <div key={lang} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
                <img 
                  src="https://via.placeholder.com/100" 
                  alt={`${lang} Notes`}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <p className="font-medium">{lang} Notes</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-blue-300 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
          <p className="mb-2">&copy; 2025 Master Quiz. All Rights Reserved</p>
          <p>Developed & Maintained By <a href="#" className="text-blue-300 hover:underline">SATYAM KUMAR SINGH</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;