import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Service from "./components/Service";
import About from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const TNClassRoot = () => {
  return (
    <div className="tnclass01">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default TNClassRoot;
