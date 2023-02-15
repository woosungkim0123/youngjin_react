import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "../pages/Main/Course";
import Home from "../pages/Main/Home";
import Mypage from "../pages/Main/Mypage";
import Qr from "../pages/Main/Qr";
import Used from "../pages/Main/Used";




export default function MainRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used" element={<Used />} />
        <Route path="/course" element={<Course />} />
        <Route path="/qr" element={<Qr />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  )
}