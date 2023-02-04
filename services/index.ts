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
export const updateUser = async (data: any) => {
  const response = await instance.post('/api/user-update', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const logout = async () => {
  const response = await instance.post('api/logout');
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

export const handleGoogleCallback = async () => {
  const response = await instance.get('api/google/auth/callback/');
  return response;
};
export const getMovieList = async () => {
  const response = await instance.get('/api/movie-list');
  return response;
};

export const addMovie = async (data: any) => {
  const response = await instance.post('/api/movies', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
export const getMovie = async (movie: any) => {
  const response = await instance.get(`/api/movies/${movie.id}`, movie);

  return response;
};
export const updateMovie = async (movie: any) => {
  const response = await instance.post(`/api/movies/${movie.id}`, movie, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};

export const deleteMovie = async (id: any) => {
  const response = await instance.post(`/api/movies/${id}`);
  return response;
};
