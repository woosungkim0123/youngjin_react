import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import { EmptyContainer } from "../../global/common";

const Title = styled.p`font-family: 'yg-jalnan', 'sans-serif'; font-size: 25px; font-weight: bold;`

export default function Qr() {
  return (
    <>
      <EmptyContainer>
        <Title>qr페이지</Title>
      </EmptyContainer>
      <Footer />
    </>
  );
}