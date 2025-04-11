import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <div className="relative">
          {/* Decorative line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent absolute top-0" />
          <h2 className="text-3xl md:text-4xl font-bold text-white my-8">
            Page Not Found
          </h2>
          {/* Decorative line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent absolute bottom-0" />
        </div>
        <p className="text-gray-300 text-lg mb-8 mt-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="bg-white text-purple-950 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </button>
          
          <div className="text-gray-400">
            <p>You might want to check out:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button
                onClick={() => navigate('/courses')}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Our Courses
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={() => navigate('/about')}
                className="text-white hover:text-blue-400 transition-colors"
              >
                About Us
              </button>
              <span className="text-gray-500">•</span>
              <button
                onClick={() => navigate('/contact')}
                className="text-white hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Optional: Add a fun illustration or animation */}
        <div className="mt-12 opacity-75">
          <svg className="w-48 h-48 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 