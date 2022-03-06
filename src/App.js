import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Tech from "./pages/tech";
// import CoverLetter from "./pages/coverLetter";
import Contact from "./pages/contact";
function App() {
  return (
    <>
      <div className="font-ttnorms">
        <Navbar />
        <Routes>
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          {/* <Route path="/cover-letter" element={<CoverLetter />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path=":routeId" element={<RouteDirection />}> */}
          {/* <Route path=":directionId" element={<RouteDetails />} /> */}

          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
