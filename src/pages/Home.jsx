import PublicLayout from "../components/PublicLayout";
import Header from "../components/Header";
import Cta from "../components/Cta";
import Features from "../components/Features";
import About from "../components/About";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Allies from "../components/Allies";

export default function Home() {
  return (
    <PublicLayout showBanner>
      <Header />
      <Cta />
      <Features />
      <About />
      <Allies />
      <Stats />
      <Testimonials />
    </PublicLayout>
  );
}
