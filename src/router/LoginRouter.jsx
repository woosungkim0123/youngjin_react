import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "../pages/Login/Join";
import Login from "../pages/Login/Login";



export default function LoginRouter() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}