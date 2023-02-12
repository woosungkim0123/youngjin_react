import styled from "@emotion/styled";
import Footer from "../components/Footer";
import TopInfo from "../components/TopInfo";
import { ContentContainer } from "../global/common";

const TitleWrap = styled.div`color: #a1805f; text-align: center; margin: 0 auto; padding: 30px; font-size: 20px; font-weight:bold; font-family: 'Pretendard-ExtraBold' !important; letter-spacing: 2px;`
const ContentWrap = styled.div`font-family: "Pretendard-Medium"; padding: 0 40px; font-size: 18px; text-align: center; `
const Content = styled.p`line-height: 2; font-size: 14px; font-weight: bold;`
export default function Used() {
  return (
    <>
      <TopInfo title="이용안내" />
      <ContentContainer>
        <TitleWrap>
          <p>용계역 주변을 여행하자</p>
        </TitleWrap>
        <ContentWrap>
          <Content>1. 하단 코스안내 탭에서 소개된 곳을 방문합니다.</Content>
          <Content>2. 그곳에 위치한 QR코드를 찾습니다.</Content>
          <Content>3. 하단 QR 탭을 클릭하여 QR코드를 찍습니다.</Content>
          <Content>4. 코스안내 탭에서 여행 인증을 확인할 수 있습니다.</Content>
        </ContentWrap>
      </ContentContainer>
      <Footer />
    </>
  );
}