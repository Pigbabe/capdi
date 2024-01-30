import './Register.css';
import './teamspace.css';

const Register  = () => {
    return (
    <div>
    <div id="loginbox">
        <label for="userid">아이디:</label>
        <input type="text" id="userid" name="userid" placeholder="아이디를 입력하세요." />

        <label for="password">비밀번호:</label>
        <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요." />

        <label for="repassword">비밀번호 확인:</label>
        <input type="password" id="repassword" name="repassword" placeholder="비밀번호를 입력하세요." />

        <div class = "genderdiv">
            성별 : &nbsp;
            남<span><input type="radio"  name="chk_info" value="male" /></span> &nbsp;&nbsp;
            여<span><input type="radio"  name="chk_info" value="female"/></span>          
        </div>


            생년월일
            <div class ="birthday">
                <span><input type="text" id="year" name="year" placeholder="YYYY" ></input></span>년 
                <span><input type="text" id="month" name="month" placeholder="MM"></input></span>월
                <span><input type="text" id="day" name="day" placeholder="DD"></input></span>일
            </div>
    

        <label for="usermail">이메일:</label>
        <input type="text" id="usermail" name="usermail" placeholder="이메일을 입력하세요." />
        

        <button type="submit">회원가입</button>
        
    </div>
    <footer>
        footer 영역 
    </footer>   
    </div>
    );
}

export default Register;
