import axios from 'axios';

const rawBaseURL = import.meta.env.VITE_API_URL;
if (!rawBaseURL && import.meta.env.PROD) {
  console.error('API URL is missing in production environment. Please check your environment variables.');
}

const baseURL = (rawBaseURL || 'http://localhost:5000').trim().replace(/\/+$/, '');

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;
