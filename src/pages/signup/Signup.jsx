import { useFormik } from 'formik'
import './signup.css'
import { SignupValidation } from './SignupValidation'
import { BsPersonCircle } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const Signup = () => {

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
  }

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupValidation,
    onSubmit: (values) => {

      const existingUsers = JSON.parse(localStorage.getItem("signupData")) || [];

const newUser = {
  ...values,
  id: Math.round(Math.random()*100),
}
console.log(newUser);



      existingUsers.push(newUser);


      localStorage.setItem("signupData", JSON.stringify(existingUsers));
      toast.success("Signup successful");
      // alert("Signup successful!");
      setTimeout(() => {
        navigate("/");

      }, 1500)
    }

  })



  return (
    <div className='signup_container'>

      <form className='form_container' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='form_group'>
          <BsPersonCircle />
          <input
            type="text"
            placeholder='Enter Name'
            name='name'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
        </div>
        {errors.name && touched.name && <small className='error_info'>{errors.name}</small>}

        <div className='form_group'>
          <MdMarkEmailRead />
          <input
            type="email"
            placeholder='Enter Email'
            name='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
        </div>
        {errors.email && touched.email && <small className='error_info'>{errors.email}</small>}

        <div className='form_group'>
          <FaLock />
          <input
            type="password"
            placeholder='Create Password'
            name='password'
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
        </div>
        {errors.password && touched.password && <small className='error_info'>{errors.password}</small>}

        <div className='form_group'>
          <FaLock />
          <input
            type="password"
            placeholder='Retype Password'
            name='cpassword'
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
        </div>
        {errors.cpassword && touched.cpassword && <small className='error_info'>{errors.cpassword}</small>}

        <button type='submit' id='btn'>Sign Up</button>
        <span onClick={() => navigate("/")}>Login here!</span>
      </form>
    </div>
  )
}

export default Signup
