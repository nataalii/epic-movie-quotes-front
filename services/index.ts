import { RegisterModalTypes } from 'types';
import axios from './axios';

export const registerRequest = async (data: RegisterModalTypes) => {
  try {
    const response = await axios.post('/api/register', {
      name: data.name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
    });
    console.log(JSON.stringify(response));
  } catch (err) {
    console.log(err);
  }
};
