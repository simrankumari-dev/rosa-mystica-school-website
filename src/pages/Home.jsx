
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview"
import WhyChooseUs from "../components/home/WhyChooseUs"
import PrincipalMessage from "../components/home/PrincipalMessage";
import { Academics } from "../components/home/Academics";
import Gallery from "../components/home/Gallery";


function Home(){
    return(

        <>
      
      <Hero />
      
      <AboutPreview/>
      <WhyChooseUs/>
      <PrincipalMessage/>
      <Academics />
      <Gallery />
      


       </>
    )
}
export default Home;