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
  language?: string;
  placeholder: string;
  name?: string;
  register: object;
  type?: string;
  errors?: any;
};
