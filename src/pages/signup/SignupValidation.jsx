import * as Yup from "yup"



export const SignupValidation = Yup.object({
name: Yup.string().min(5,"name should be at least 5 letters").required("name is required"),
email: Yup.string().email("please enter the valid email address").required("email is required"),
password: Yup.string().min(5,"there should be atleast 5 characters").required("password is required"),
cpassword: Yup.string().oneOf([Yup.ref("password")], "please confirm your password").required("confirm password is required")
})