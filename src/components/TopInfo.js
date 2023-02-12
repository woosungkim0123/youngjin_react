import styled from "@emotion/styled"


const NavContainer = styled.nav`position: fixed; width: 100%; height: 110px; background-color: #fff; top:0; z-index: 20; display: flex; justify-content: center; align-items: center; flex-direction: column;`
const NavTitle = styled.p`font-family: 'yg-jalnan', 'sans-serif'; display: flex; justify-content: center; align-items: center; font-size: 30px;  height: 100%;`
const NavSubTitle = styled.div`width: 100%; height: 55px; background: #ce3236;  color:#fff;  font-size: 18px;  font-weight: bold; display: flex; justify-content: center; align-items: center;`

export default function TopInfo({ title }) {
  console.log(title)
  return (
    <NavContainer>
      <NavTitle>용계역 여행</NavTitle>
      <NavSubTitle>{title}</NavSubTitle>
    </NavContainer>
  )
}