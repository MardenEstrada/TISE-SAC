import Banner from "../components/Banner";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";
import CtaHome from "../components/Cta";
import Testimonials from "../components/Testimonials";
import Allies from "../components/Allies";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Banner />
        <Navbar />
        <Header />
        <CtaHome />
        <Features />
        <Allies />
        <Stats />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
