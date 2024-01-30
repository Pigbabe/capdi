import React from "react";
import './Login.css';
import './teamspace.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    function moveRegister(){
        navigate("/Register");
    }

    return (
        <div id="loginbox">
            <label for="userid">아이디:</label>
            <input type="text" id="userud" name="userid" placeholder="아이디를 입력하세요." />
            <label for="password">비밀번호:</label>
            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
            <button type="button">로그인</button>
            <div id="register">
                <button onClick={moveRegister}>회원가입</button>
            </div>
        </div>
    );
}

export default Login;
