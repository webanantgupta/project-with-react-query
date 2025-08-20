import './profile.css'
import { FaUserAlt } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { VscDebugDisconnect } from "react-icons/vsc";

const Profile = () => {

  const loginUser = JSON.parse(localStorage.getItem("signupData")) || [];
  console.log(loginUser);

  return (
    <div className='profile_container'>
      <div className='profile_card'>
        <div className='profile_card_up'>
          <div className='connect'>
            <VscDebugDisconnect />
            <div id='inner_connect'>
              Connect
            </div>
          </div>
          <div id='icon'><FaUserAlt /></div>
          <div className='message'>
            <BiSolidMessageRounded />
            <div id='inner_message'>Message</div>
          </div>
        </div>
          <hr />
          <div className='profile_info'>
            <span>Name:</span><br />
            <span>Email:</span><br />
            <span>
            <button className='btn'>See Password</button>
            </span>
            <span>
            <button className='btn'>Change Password</button>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Profile
