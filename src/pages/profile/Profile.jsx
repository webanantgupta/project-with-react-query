import './profile.css'
import { FaUserAlt } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loginUser = JSON.parse(localStorage.getItem("uniqueUser")) || {};
    console.log(loginUser);
    setUser(loginUser);

  }, []);

  const handleLogout = (userData) => {
    console.log(userData);
    localStorage.removeItem("uniqueUser");
    navigate("/")

  }

  // const showPassword = (userData) => {
  //   console.log(userData);
  //   navigate("/showpass")
  // }


  let currentDate = new Date();
  let date = "Date: " + currentDate.getDay() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
  let time = "Time: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
  // console.log(currentDate);
  // console.log(date);
  // console.log(time);

  useEffect(()=>{
toast(
  "Good to see you,\n\n💖 Here is your profile!",
  {
    duration: 2000,
  }
);
  },[]);



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
          <div className='date'>
            <div>{date}</div>
            <div>{time}</div>
          </div>


          <div className='heading1'>
            <h4>Name: </h4><p>{user.name}</p>
          </div>
          <div className='heading1'>
            <h4>Email:</h4> <p><u>{user.email}</u></p>

          </div>

          <div className='btn_container'>
            {/* <button
              className='btn'
              onClick={() => showPassword(user)}
            >See Password</button> */}


            <button 
            className='btn'
            onClick={()=>{navigate("/changepass")}}
            >Change Password</button>

            <button
              className='btn_red'
              onClick={() => handleLogout(user)}
            >Log Out</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Profile
