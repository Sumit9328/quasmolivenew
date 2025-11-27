import Image from "next/image";
import Header from "./components/header";
import ContactSection from "./components/ContactSection";
import ProductSliderBlue from "./components/ProductSliderBlue";
import ProductSliderWhite from "./components/ProductSliderWhite";
import HomeSlider from "./components/HomeSlider";
import ImpactStats from "./components/ImpactStats";
import ProductGrid from "./components/ProductGrid";
import WhyUs from "./components/WhyUs";
import MainAbout from "./components/MainAbout";
import { OurProcessSection } from "./components/OurProcessSection";
import { AboutQuasmo } from "./components/AboutQuasmo";
import { VideoHeroSection } from "./components/VideoSec";
import { FAQSection } from "./components/FAQSection";
import TestimonialSection from "./components/TestimonialSection";
import LatestBlogs from "./components/LatestBlogs";
import QuasmoSection from "./components/QuasmoSection";
import QuasmoFooter from "./components/QuasmoFooter";


export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <MainAbout />
      <ImpactStats />
      <ProductGrid />
      <WhyUs />
      <OurProcessSection />
      <AboutQuasmo />
      <VideoHeroSection />
      <FAQSection />
      <TestimonialSection />
      <LatestBlogs />
      <ContactSection />
      <ProductSliderBlue />
      {/* <ProductSliderWhite /> */}
      <QuasmoSection />
      <QuasmoFooter />
    </>
  );
}
