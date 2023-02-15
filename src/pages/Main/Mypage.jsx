import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
import { EmptyContainer } from "../../global/common";

const Introduce = styled.p`font-size:20px; margin-bottom: 20px;`
const UserName = styled.span`font-weight:bold;`
const LogoutBtn = styled.div`width:250px; height: 70px; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: bold; background-color: pink;`

export default function Mypage() {
  const { user, logout } = useAuth();
  const logoutCheck = () => {
    // 로그아웃 할건지 물어보고
    logout();
  }
  return (
    <>
      <EmptyContainer>
        <Introduce><UserName>{user.name}</UserName>님 안녕하세요</Introduce>
        <LogoutBtn onClick={logoutCheck}>로그아웃</LogoutBtn>
      </EmptyContainer>
      <Footer />
    </>
  );
}


