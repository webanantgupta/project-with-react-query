import { useFormik } from "formik";
import "./changepass.css";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineWifiPassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { ChangepassValidation } from "./ChangepassValidation";

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
