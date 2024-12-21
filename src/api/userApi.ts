// src/api/userApi.ts
import serverAxiosInstance from './axiosInstance';

// 사용자 로그인 요청
export const loginUser = async (userId: string, password: string) => {
  try {
    const response = await serverAxiosInstance.post('/auth/login', { userId, password });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 오류 처리
  }
};

// 사용자 정보 가져오기
export const getUserInfo = async (userId: string) => {
  try {
    const response = await serverAxiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};