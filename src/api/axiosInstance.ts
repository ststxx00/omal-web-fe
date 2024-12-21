import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

// server axios 인스턴스 생성
const serverAxiosInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 요청 타임아웃 시간 설정
});

serverAxiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default serverAxiosInstance;