import About from "./pages/About/About";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import Headroom from "react-headroom";
import Review from "./pages/Review/Review";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div className="bg-[#222222] overflow-x-hidden">
      <Headroom>
        <Navbar></Navbar>
      </Headroom>
      <Hero></Hero>
      <About></About>
      <Review></Review>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;