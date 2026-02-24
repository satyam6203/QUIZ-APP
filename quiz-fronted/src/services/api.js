import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/quiz',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Core Services
export const apiService = {
  // Authentication
  login: (data) => api.post('/login', data),
  register: (data) => api.post('/register', data),

  // Language-specific quizzes
  getJavaQuiz: () => api.get('/java'),
  getCQuiz: () => api.get('/c'),
  getPythonQuiz: () => api.get('/python'),
  getJavascriptQuiz: () => api.get('/javascript'),
  
  // Quiz submission
  submitQuiz: (language, answers) => api.post(`/${language}/submit`, answers),
  
  // Payment
  createOrder: (data) => api.post('/payment/order', data),
  verifyPayment: (paymentId) => api.get(`/payment/verify/${paymentId}`),
  
  // Results
  getResults: () => api.get('/results'),
  getLeaderboard: () => api.get('/leaderboard'),
};

// Error handling utility
export const handleApiError = (error) => {
  if (error.response) {
    console.error('API Error:', error.response.data);
    return error.response.data.message || 'Request failed';
  } else if (error.request) {
    console.error('API Error: No response');
    return 'Network error - no server response';
  }
  console.error('API Error:', error.message);
  return error.message;
};