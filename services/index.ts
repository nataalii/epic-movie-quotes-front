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

export const addEmail = async (email: string) => {
  const response = await instance.post('/api/email-create', email);
  return response;
};

export const getEmails = async () => {
  const response = await instance.get('/api/emails');
  return response;
};
export const verifyEmail = async (token: any) => {
  const response = await instance.post('/api/secondary-email-verify', token);
  return response;
};
export const removeEmail = async (id: string) => {
  const response = await instance.delete(`/api/email-destroy/${id}`);
  return response;
};

export const makePrimaryEmail = async (id: string) => {
  const response = await instance.post(`/api/make-email-primary/${id}`);
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
export const getMovie = async (
  id: string | string[] | undefined,
  cookies?: string
) => {
  const response = await instance.get(`/api/movie/${id}`, {
    headers: { Cookie: cookies },
  });
  return response;
};
export const updateMovie = async (movie: any) => {
  const response = await instance.post(`/api/movie/${movie.id}`, movie, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};

export const deleteMovie = async (id: string) => {
  const response = await instance.delete(`/api/movie/${id}`);
  return response;
};

export const addQuote = async (data: any) => {
  const response = await instance.post('/api/quote', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
export const updateQuote = async (data: any) => {
  const response = await instance.post('/api/quote-update', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
export const getQuote = async (id: string) => {
  const response = await instance.get(`/api/quote/${id}`);
  return response;
};
export const getUserQuotes = async (id: string) => {
  const response = await instance.get(`/api/quotes/${id}`);
  return response;
};
export const getAllQuotes = async (page = 1) => {
  const response = await instance.get(`api/quotes?page=${page}`);
  return response;
};
export const deleteQuote = async (id: string) => {
  const response = await instance.delete(`/api/quote/${id}`);
  return response;
};

export const addComment = async ({ data, id }: { data: any; id: string }) => {
  const response = await instance.post(`api/quotes/${id}/comment`, data);
  return response;
};
