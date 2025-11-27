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




export default function Home() {
  return (
    <>
      <Header />
      <HomeSlider />
      <MainAbout />
      <ImpactStats />
      <ProductGrid />
      <WhyUs />
      <ContactSection />
      <ProductSliderBlue />
      <ProductSliderWhite />
    </>
  );
}
