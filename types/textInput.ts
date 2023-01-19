import { FieldError } from 'react-hook-form';

export type TextInput = {
  label: string;
  name: string;
  placeholder: string;
  register: Object;
  errors?: string | undefined | FieldError;
  errorMessage?: any;
};
