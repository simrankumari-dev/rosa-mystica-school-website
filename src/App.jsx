import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutPreview from "./components/home/AboutPreview"
import WhyChooseUs from "./components/home/WhyChooseUs"
import PrincipalMessage from "./components/home/PrincipalMessage";

function App() {
  return (
    <>
      <TopBar />
      <Navbar/>
      <Hero/>
      <AboutPreview/>
      <WhyChooseUs/>
      <PrincipalMessage/>


    </>
  );
}

export default App;