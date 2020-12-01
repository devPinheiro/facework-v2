import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(6)
        .max(10)
        .required()
})

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
        .required()
        .email(),
    password: Yup.string()
        .min(6)
        .max(10)
        .required()
})

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required()
})

export const EmailConfirmationSchema = Yup.object().shape({
    token: Yup.string().required()
})

export const CreateCommentSchema = Yup.object().shape({
    body: Yup.string().required()
})
export const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email()
        .required(),
    password: Yup.string()
        .min(6)
        .max(10)
        .required(),
    token: Yup.string().required()
})

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);