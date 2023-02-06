import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required('Email Field is required!')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Email should be valid'
      ),
  })
  .required();

export default schema;
