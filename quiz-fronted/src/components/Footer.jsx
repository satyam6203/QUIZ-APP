import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="#" className="hover:text-blue-300 transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition duration-300">
              <FaLinkedin size={20} />
            </a>
          </div>
          
          <div className="text-center mb-4">
            <p>&copy; 2025 Master Quiz. All Rights Reserved</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">
              Developed & Maintained By{' '}
              <a 
                href="https://github.com/satyam6203" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline flex items-center justify-center"
              >
                <FaGithub className="mr-1" /> SATYAM KUMAR SINGH
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}