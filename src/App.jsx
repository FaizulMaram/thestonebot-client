import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Services from "./components/Services/Services";
import Fledged from "./components/Sections/Fledged";
import FledgedRevert from "./components/Sections/FledgedRevert";
import Awards from "./components/Awards/Awards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonials/Testimonial";
import Form from "./components/Forms/Form";
import Partner from "./components/Partners/Partner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Project />
      <Fledged />
      <FledgedRevert />
      <Awards />
      <Form />
      <Testimonial />
      <Partner />
      <Footer />
    </>
  );
}

export default App;
