import { DefaultTFuncReturn } from 'i18next';

export type TextInput = {
  label: string;
  name: string;
  placeholder: string;
  register: Object;
  isDirty: Boolean;
  type?: string;
  errors?: any;
  errorMessage?: any;
};

export type TextAreaInput = {
  language: DefaultTFuncReturn;
  placeholder?: string;
  defaultValue?: string;
  name?: string;
  register?: object;
  type?: string;
  errors?: any;
};

export type addMovieInputTypes = {
  language?: DefaultTFuncReturn;
  placeholder: string;
  name?: string;
  type?: string;
  errors?: any;
};

export type profileInputTypes = {
  label: string;
  name: string;
  placeholder: string;
  error?: any;
  serverError?: string;
};
