import React from "react";
import './Login.css';
import './teamspace.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    function moveRegister(){
        navigate("/Register");
    }
    function moveLogin(){
        navigate("/Login");
    }

    return (
        <div id="loginbox">
          <button onClick={moveLogin}>로그인</button>
          <br /><br /><br />
          <button onClick={moveRegister}>회원가입</button>

        </div>
    );
}

export default Login;
