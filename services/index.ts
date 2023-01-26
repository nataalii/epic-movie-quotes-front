import { LoginModalTypes, RegisterModalTypes, ResetPasswordTypes } from 'types';
import instance from './axios';

export const registerRequest = async (data: RegisterModalTypes) => {
  const response = await instance.post('/api/register', data);
  return response;
};

export const login = async (data: LoginModalTypes) => {
  const loginResponse = await instance.post('/api/login', data);
  return loginResponse;
};

export const fetchCSRFToken = async () => {
  const csrfResponse = await instance.get('/sanctum/csrf-cookie');
  return csrfResponse;
};

export const getUser = async () => {
  const response = await instance.get('/api/user');
  return response;
};

export const logout = async () => {
  const response = await instance.get('api/logout');
  return response;
};

export const forgotPassword = async (email: any) => {
  const response = await instance.post('api/forgot-password/', email);
  return response;
};
export const resetPassword = async (data: ResetPasswordTypes) => {
  const response = await instance.post('api/reset-password/', data);
  return response;
};
