import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginContainer = styled.div`width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;`
const Title = styled.p`font-size: 25px; margin-bottom: 20px; font-family: 'yg-jalnan', 'sans-serif';`
const FormContainer = styled.div`background-color: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 0 50px; height: 100%; text-align: center;`
const LoginInput = styled.input`background-color: #eee; border: none; padding: 12px 15px; margin: 8px 0; width: 100%;`
const LoginBtn = styled.div`margin-top: 20px; border-radius: 20px; border: 1px solid #FF4B2B; background-color: #FF4B2B; color: #FFFFFF;font-size: 12px;font-weight: bold; padding: 12px 45px; letter-spacing: 1px; text-transform: uppercase; transition: transform 80ms ease-in;`
const JoinBtn = styled.div`font-size: 14px; margin-top: 20px; font-weight: bold;`


export default function Login() {
  
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const { logIn } = useAuth();
  const login = () => {
    if(!id) return setErrMessage("아이디를 입력해주세요.")
    else if(!pw) return setErrMessage("비밀번호를 입력해주세요.")
    logIn(id, pw).catch(setErrMessage);
  }

  const onChangeId = (e) => {
    if(errMessage) setErrMessage("");
    setId(e.currentTarget.value);
  }
  const onChangePw = (e) => {
    if(errMessage) setErrMessage("");
    setPw(e.currentTarget.value);
  } 
  
  return (
    <>
      <LoginContainer>
        <FormContainer>
          <Title>용계역 여행</Title>
          {
            errMessage 
              ?  <div>{errMessage}</div>
              : null   
          }
          <form id="loginForm">
            <LoginInput name="id" type="text" placeholder="아이디" onChange={onChangeId} value={id} />
            <LoginInput name="pw" type="password" placeholder="비밀번호" onChange={onChangePw} value={pw} />
            <LoginBtn onClick={login}>로그인</LoginBtn>
            <JoinBtn>
              <Link to="/join">계정이 없으신가요?</Link>
            </JoinBtn>
          </form>
        </FormContainer>
      </LoginContainer>
    </>
  );
}
