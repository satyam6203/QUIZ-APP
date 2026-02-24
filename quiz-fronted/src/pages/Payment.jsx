import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [error, setError] = useState('');
  
  // Get quiz details from location state
  const quiz = location.state?.quiz || { 
    name: 'Java Quiz', 
    price: 500 
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate card details
    if (paymentMethod === 'credit' && !cardDetails.number) {
      setError('Card number is required');
      return;
    }
    
    try {
      const response = await fetch('http://quiz/pay/create_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          quizId: quiz.id,
          amount: quiz.price,
          paymentMethod,
          cardDetails: paymentMethod === 'credit' ? cardDetails : null
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        navigate('/quiz/start', { state: { quiz } });
      } else {
        setError(data.message || 'Payment failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Payment</h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {quiz.name}
            </span>
          </div>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Quiz Price:</span>
              <span className="font-semibold">₹{quiz.price}</span>
            </div>
          </div>
          
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Payment Method</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={() => setPaymentMethod('credit')}
                  />
                  <span className="ml-2">Credit Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                  />
                  <span className="ml-2">PayPal</span>
                </label>
              </div>
            </div>
            
            {paymentMethod === 'credit' && (
              <div className="mb-6 space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleCardChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cardName" className="block text-gray-700 mb-2">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleCardChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleCardChange}
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCvv" className="block text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      id="cardCvv"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Pay ₹{quiz.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}