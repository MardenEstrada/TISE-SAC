import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";
import Banner from "./Banner";

export default function PublicLayout({ children, showBanner = false }) {
  const [bannerVisible, setBannerVisible] = useState(showBanner);

  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink />
      {bannerVisible && <Banner onDismiss={() => setBannerVisible(false)} />}
      <Navbar hasBanner={bannerVisible} />
      <main
        id="contenido-principal"
        className={`flex-1 transition-[padding] duration-300 ${
          bannerVisible ? "pt-28 sm:pt-32" : "pt-16 lg:pt-[4.5rem]"
        }`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
