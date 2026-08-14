import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Notices from "./pages/Notices";
import NoticeDetails from "./components/notices/NoticeDetails";

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
      </Routes>
    </>
  );
}

export default App;