import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3005', // Use env variables for flexibility
  timeout: 5000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to headers if available
    const token = localStorage.getItem('token'); // Adjust if using cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log('Request sent:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    if (error.response) {
      // Log specific details for server errors
      console.error('Response error details:', {
        status: error.response.status,
        data: error.response.data,
      });

      // Handle 401 (Unauthorized) globally
      if (error.response.status === 401) {
        console.warn('Unauthorized! Redirecting to login...');
        localStorage.removeItem('token'); // Clear token
        window.location.href = '/login'; // Redirect to login page
      }
    } else {
      // Handle network or other unknown errors
      console.error('Network/Other error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
