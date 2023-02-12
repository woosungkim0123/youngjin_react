import Footer from "../components/Footer";
import KakaoMap from "../components/KakaoMap";
import TopInfo from "../components/TopInfo";
import { ContentContainer } from "../global/common";

export default function Course() {
  
  return (
    <>
      <TopInfo title="코스안내" />
      <ContentContainer>
        <KakaoMap />
      </ContentContainer>
      <Footer />
    </>
  );
}
