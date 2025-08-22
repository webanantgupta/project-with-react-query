import "./header.css"
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"
import { useNavigate } from "react-router-dom"


const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="header_container">
      <div className="header_logo"><img src={logo} alt="logo" /></div>
      <div 
      className="header_profile"
      onClick={()=>navigate("/profile")}
      ><img src={profile} alt="profile" /></div>
    </div>
  )
}

export default Header
