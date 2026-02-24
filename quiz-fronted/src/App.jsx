import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Quiz = lazy(() => import('./pages/Quiz'));
// const QuizStart = lazy(() => import('./pages/QuizStart'));
const Result = lazy(() => import('./pages/Result'));
// const Performers = lazy(() => import('./pages/Performers'));
const Notes = lazy(() => import('./pages/Notes'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Payment = lazy(() => import('./pages/Payment'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                {/* <Route path="/quiz/:language" element={<QuizStart />} /> */}
                <Route path="/result" element={<Result />} />
                {/* <Route path="/performers" element={<Performers />} /> */}
                <Route path="/notes" element={<Notes />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;