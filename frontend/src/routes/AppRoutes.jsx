import { Navigate, Routes, Route} from "react-router-dom";

import Home from "../pages/main/Home.jsx";
import Artistik1 from "../pages/Artistik1/Artistik1.jsx";
import Artistik2 from "../pages/Artistik2/Artistik2.jsx";
import Artistik3 from "../pages/Artistik3/Artistik3.jsx";
import Artistik4 from "../pages/Artistik4/Artistik4.jsx";
import Artistik5 from "../pages/Artistik5/Artistik5.jsx";
import Artistik6 from "../pages/Artistik6/Artistik6.jsx";
import Artistik7 from "../pages/Artistik7/Artistik7.jsx";
import Artistik8 from "../pages/Artistik8/Artistik8.jsx";
import Artistik9 from "../pages/Artistik9/Artistik9.jsx";
import Jelajah from "../pages/main/Jelajah.jsx";
// import Acara from "../pages/Acara/Acara.jsx";

function AppRoutes() {
  return (
    <Routes>
      {/* Main Website */}
      <Route path="/" element={<Home />} />
      <Route path="/artistik1" element={<Artistik1 />} />
      <Route path="/artistik2" element={<Artistik2 />} />
      <Route path="/artistik3" element={<Artistik3 />} />
      <Route path="/artistik4" element={<Artistik4 />} />
      <Route path="/artistik5" element={<Artistik5 />} />
      <Route path="/artistik6" element={<Artistik6 />} />
      <Route path="/artistik7" element={<Artistik7 />} />
      <Route path="/artistik8" element={<Artistik8 />} />
      <Route path="/artistik9" element={<Artistik9 />} />
      <Route path="/jelajah" element={<Jelajah />} />
       <Route path="*" element={<Navigate to="/" replace />} />
      {/* <Route path="/acara" element={<Acara />} /> */}

      {/* Landing Pages */}
      {/* <Route path="/landing/xxx" element={<LandingXXX />} /> */}
    </Routes>
  );
}

export default AppRoutes;