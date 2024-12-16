// src/api/axiosInstance.ts
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

// 기본 axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: apiUrl, // 기본 API URL 설정
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 요청 타임아웃 시간 설정
});

axiosInstance.interceptors.request.use(
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

export default axiosInstance;
