import { useFormik } from 'formik'
import './login.css'
import { Validation } from './Validation'
import { useNavigate } from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import toast from "react-hot-toast";


const Login = () => {

const navigate = useNavigate();

const initialValues = {
  name:"",
 password: ""
}

const {values,handleSubmit,handleBlur,handleChange,errors,touched} = useFormik({
  initialValues: initialValues,
  validationSchema: Validation,
onSubmit: (values) => {
  const storedUsers = JSON.parse(localStorage.getItem("signupData")) || [];
console.log(storedUsers);

  const userLogin = storedUsers.some(
    (obj) => obj.name === values.name && obj.password === values.password
  );

  if(userLogin){
    toast.success("Login successfull")
    // alert("Welcome!");
    setTimeout(()=>{
    navigate("/home");

    },1000)
  } else {
    toast.error("User does not exist");
    // alert("User does not exist");
   
  }
}
})





  return (
    <div className='login_container'>
      <div className='login_card'>
        <h1>Log In</h1>
        <form className='form_container1' onSubmit={handleSubmit}>
        <div className='input_group'>
          <FaCircleUser />
          <input 
          type="text"
           placeholder='User name'
           name='name'
           value={values.name}
           onBlur={handleBlur}
           onChange={handleChange}
           />

          <br />
          </div>
          {errors.name && touched.name && <small className='error_info1'>{errors.name}</small>}

          <div className='input_group'>
          <FaLock />
          <input 
          type="password"
           placeholder='Password'
           name='password'
           value={values.password}
           onBlur={handleBlur}
           onChange={handleChange}
            />
          <br />
          </div>
          {errors.password && touched.password && <small className='error_info1'>{errors.password}</small>}

          <button 
          type='submit'
          >Log in</button>
          <br />
          <span
          onClick={()=> navigate("/signup")}
          >or, Sign up</span>

        </form>


      </div>
    </div>
  )
}

export default Login
