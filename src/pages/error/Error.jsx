import './error.css'
import pagenotFound from "../../assets/pagenotfound.png";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Error = () => {
useEffect(()=>{
    toast.error("Page dosen't exist")
},[])

  return (
    <div className='error'>
      <img src={pagenotFound} alt="page not found" id="img" />
    </div>
  )
}

export default Error
