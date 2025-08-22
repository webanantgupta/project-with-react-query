import { useFormik } from "formik";
import "./changepass.css";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineWifiPassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ChangepassValidation } from "./ChangepassValidation";
import toast from "react-hot-toast";

const Changepass = () => {

    const initialValues = {
        password: "",
        npassword: "",
        cnpassword: ""
    }






    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: ChangepassValidation,
        onSubmit: (values) => {
            console.log(values);

            const ans = JSON.parse(localStorage.getItem("uniqueUser"));
            // console.log(ans);
            const signupUser = JSON.parse(localStorage.getItem("signupData")) || [];
            console.log(signupUser);

        //now we have to update the signupData and uniqueUser in our localstorage

            if (ans.password === values.password) {
             toast.success("password matched!")
            }

            //now updating the data in uniqueUser
            // uniqueUser.password = values.npassword;
            // localStorage.setItem("uniqueUser",JSON.stringify(uniqueUser))
             const newupdatedUser = {...ans, password:values.npassword, cpassword:values.cnpassword}
             localStorage.setItem("uniqueUser",JSON.stringify(newupdatedUser))   
             console.log(newupdatedUser);


             //now updating the signupData
            const newsignupData = signupUser.map((obj)=>{
                if(obj.id === ans.id){
                   return {...obj, password:values.cnpassword}
                }
            })
             localStorage.setItem("signupData", JSON.stringify(newsignupData));
             console.log("updated signupData" , newsignupData);
             

        }
    });



    return (
        <div className="pass_container">
            <div className="password">
                <h1 id="password_heading">Want To Change Password!!</h1><hr />
                <form className="form_container_password" onSubmit={handleSubmit}>
                    <div className="form_password_group">
                        <RiLockPasswordFill />
                        <input
                            type="password"
                            placeholder="Enter your current password"
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    {errors.password && touched.password && <small>{errors.password}</small>}

                    <div className="form_password_group">
                        <MdOutlineWifiPassword />
                        <input
                            type="password"
                            placeholder="Enter new password"
                            name="npassword"
                            value={values.npassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    {errors.npassword && touched.npassword && <small>{errors.npassword}</small>}
                    <div className="form_password_group">
                        <GiConfirmed />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            name="cnpassword"
                            value={values.cnpassword}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        />
                        <br />
                    </div>
                    {errors.cnpassword && touched.cnpassword && <small>{errors.cnpassword}</small>}
                    <button id="btn_password" type="submit">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Changepass
