import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import MenuContent from "./MenuContent"

const FooterContainer = styled.footer`position: fixed; bottom:0; left:0; right:0; height: 60px; border-top: solid 1px rgb(153, 150, 150); z-index: 20; background-color: #fff; font-family: 'yg-jalnan', 'sans-serif';`
const MenuContainer = styled.ul`display: flex; align-items: center; height: 100%;`
const MenuWrapLink = styled(Link)`width: 20%; display: flex; justify-content: space-evenly; align-items: center; flex-direction: column; height:100%;`
const MenuWrapLi = styled.li`width: 20%; display: flex; justify-content: space-evenly; align-items: center; flex-direction: column; height:100%; color:red`


export default function Footer() {
  const menus = [
    {name: "홈", url: "/", icon: "fas fa-home"}, 
    {name: "이용안내", url: "/used", icon: "fas fa-info"}, 
    {name: "코스안내", url: "/course", icon: "fas fa-road"}, 
    {name: "QR", url: "/qr", icon: "fas fa-qrcode"}, 
    {name: "마이페이지", url: "/mypage", icon: "fas fa-user"}
  ]
  const currentPath = window.location.pathname;
  return (
    <>
      <FooterContainer>
        <MenuContainer>
          {
            menus.map((menu) => (
              menu.url !== currentPath 
                ? <MenuWrapLink to={menu.url} key={menu.name}><MenuContent menu={menu} /></MenuWrapLink>
                : <MenuWrapLi key={menu.name}><MenuContent menu={menu} /></MenuWrapLi>
            ))
          }
        </MenuContainer>
      </FooterContainer>
    </>
  )
}