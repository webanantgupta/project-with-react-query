import * as Yup from "yup";

export const ChangepassValidation = Yup.object({
    password: Yup.string().min(5, "Password should be minimum 5 characters").required("Password is required"),
    npassword: Yup.string().min(5, "New password must be minimum 5 characters").required("New password is required"),
    cnpassword: Yup.string().oneOf([Yup.ref("npassword")],"Please confirm your password").required("Confirm new password is required")
})