import styled from "@emotion/styled";
import Footer from "../components/Footer";
import { EmptyContainer } from "../global/common";

const MainTitle = styled.p`font-family: 'yg-jalnan', 'sans-serif'; font-size: 25px; font-weight: bold;`
const ImgWrap = styled.div`width: 220px; height: 220px; border-radius: 50%; overflow: hidden; margin-top: 20px;`
const Img = styled.img`width: 100%; height: 100%;`


export default function Home() {
  return (
    <>
      <EmptyContainer>
        <MainTitle>용계역 여행</MainTitle>
        <ImgWrap>
          <Img src="/main.gif" />
        </ImgWrap>
      </EmptyContainer>
      <Footer />
    </>
  );
}
