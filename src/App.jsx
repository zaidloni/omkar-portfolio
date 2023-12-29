import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import WheelUpPage from "./WheelUpPage";
import NetflixPage from "./NetflixPage";
import AmulPage from "./AmulPage";
import DeliciossoPage from "./DeliciossoPage";
import LivNestExpPage from "./LivNestExpPage";
import UnderdogsExpPage from "./UnderdogsExpPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wheelUp" element={<WheelUpPage />} />
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/amul" element={<AmulPage />} />
        <Route path="/deliciosso" element={<DeliciossoPage />} />
        <Route path="/livnest" element={<LivNestExpPage />} />
        <Route path="/underdogs" element={<UnderdogsExpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
