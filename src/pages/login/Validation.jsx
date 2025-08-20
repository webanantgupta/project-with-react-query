import * as Yup from "yup"



export const Validation = Yup.object({
name: Yup.string().min(5, "User name must be atleast 5 letters").required("Please enter your name"),
password: Yup.string().min(5, "Password must be atleast 5 characters").required("Please enter your password")
})