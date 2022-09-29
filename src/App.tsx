import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/auth/login/LoginScreen";
import SignUpScreen from "./screens/auth/signup/SignUpScreen";
import AllBookingScreen from "./screens/booking/all/AllBookingScreen";
import NewBookingScreen from "./screens/booking/new/NewBookingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBookingScreen />} />
        <Route path="/new" element={<NewBookingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
