import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Notices from "./pages/Notices";
import NoticeDetails from "./components/notices/NoticeDetails";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/notices" element={<Notices />} />

        {/* Individual Notice */}
        <Route path="/notices/:id" element={<NoticeDetails />} />
        
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;