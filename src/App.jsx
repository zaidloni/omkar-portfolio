import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import WheelUpPage from "./WheelUpPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wheelUp" element={<WheelUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
