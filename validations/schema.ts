import { REGEX_EMAIL } from 'config';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email Field is required!')
      .matches(REGEX_EMAIL, 'Email should be valid'),
  })
  .required();

export default schema;
