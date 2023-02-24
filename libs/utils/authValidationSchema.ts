import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  // fullName: Yup.string().min(4).max(15).required('Full name is required'),
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string().min(8).required('Password is required!'),
  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], 'Passwords are not the same!')
    .required('Password confirmation is required!'),
})

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string().required('Password is required!'),
})

export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
})
