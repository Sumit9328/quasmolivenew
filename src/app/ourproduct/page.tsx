import React from 'react';
import ProductHero from '../OtherComponents/OurProduct/ProductHero';
import Header from '../components/header';
import ProductCategoryTabs from '../OtherComponents/OurProduct/ProductCategoryTabs';
import ProductSection from '../OtherComponents/OurProduct/ProductSection';
import QualityAssurance from '../OtherComponents/About/QualityAssurance';
import TestimonialSection from '../components/TestimonialSection';
import LatestBlogs from '../components/LatestBlogs';
import ContactSection from '../components/ContactSection';
import SubscribeSection from '../components/SubscribeSection';
import QuasmoSection from '../components/QuasmoSection';
import QuasmoFooter from '../components/QuasmoFooter';







const page = () => {
  return (
    <>
      <Header />
      <ProductHero />
      <ProductCategoryTabs />

      {/* SECTION 1 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 2 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />

      {/* SECTION 3 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 4 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />

            {/* SECTION 1 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 2 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />

      {/* SECTION 3 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 4 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />


            {/* SECTION 1 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 2 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />

      {/* SECTION 3 — IMAGE LEFT */}
      <ProductSection
        title="Dissecting & Educational Microscopes"
        description="Quasmo's microscopes are crafted to spark curiosity..."
        image="/images/product1.jpg"
        products={[
          "Dissecting Microscope PZ-2",
          "Student Microscope SP-5",
          "Compound Microscope PZ-7",
          "Medical Microscope PZ-9",
          "Medical Microscope PZ-9",
        ]}
      />

      {/* SECTION 4 — IMAGE RIGHT */}
      <ProductSection
        title="Laboratory Microscopes"
        description="Built for professionals who demand clarity..."
        image="/images/product2.jpg"
        products={[
          "Mono SP-20",
          "Binocular SP-22",
          "ECO STAR-M",
          "ECO STAR-B",
          "ECO STAR-B",
        ]}
        reverse={true}
      />
            <QualityAssurance />
            <TestimonialSection />
            <LatestBlogs />
            <ContactSection />
            <SubscribeSection />
            <QuasmoSection />
            <QuasmoFooter />
    </>
  )
}

export default page;
