import { useState } from 'react';
import { useEffect } from 'react';
import "./showpassword.css";
import { IoMdEye } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Showpassword = () => {

    const navigate = useNavigate();
    const [userPassword, setuserPassword] = useState({});
    const [blur, setBlur] = useState(true);

    useEffect(() => {
        const userPassword = JSON.parse(localStorage.getItem("uniqueUser")) || {}
        console.log(userPassword);
        setuserPassword(userPassword);
    }, [])

    const handleBlur = (blurData) => {
        console.log(blurData);
        setBlur(!blurData);
    }

    return (
        <div className='password_container'>
            <div className='password_display'>
                <div><h3>Want to see your password!</h3></div>
                <hr />
                <div className='pass'>
                    <div className='pass_password'>{userPassword.password}</div>
                    <div><button
                        className='pass_btn'
                        onClick={() => handleBlur(blur)}
                    ><IoMdEye />
                    </button>
                    </div>
                </div>
                <div className='btn_goback'>
                    <button
                        id='goback'
                        onClick={() => navigate("/profile")}
                    >
                        <FaChevronLeft />
                        <div>Go Back</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Showpassword
