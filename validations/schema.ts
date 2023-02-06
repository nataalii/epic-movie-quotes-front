import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    newEmail: yup
      .string()
      .required('Email Field is required!')
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Email should be valid'
      ),
    newPassword: yup
      .string()
      .required()
      .min(8)
      .max(15)
      .matches(/^[a-z0-9]*$/),

    confNewPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('newPassword'), null], 'Passwords should match!'),
  })
  .required();

export default schema;
