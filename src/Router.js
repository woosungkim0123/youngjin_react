import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./Routes/Course";
import Home from "./Routes/Home";
import Mypage from "./Routes/Mypage";
import Qr from "./Routes/Qr";
import Used from "./Routes/Used";


export default function Router() {
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