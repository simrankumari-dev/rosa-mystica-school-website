import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview"
import WhyChooseUs from "../components/home/WhyChooseUs"
import PrincipalMessage from "../components/home/PrincipalMessage";
import { Academics } from "../components/home/Academics";
import Gallery from "../components/home/Gallery";
import Footer from "../components/layout/Footer";

function Home(){
    return(

        <>
      <Header />
      <Hero />
      <Hero/>
      <AboutPreview/>
      <WhyChooseUs/>
      <PrincipalMessage/>
      <Academics />
      <Gallery />
      <Footer />


       </>
    )
}
export default Home;