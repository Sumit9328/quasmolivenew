import React from 'react';
import Header from '../components/header';
import AccessoriesHero from '../OtherComponents/Accesories/AccessoriesHero';
import AccessoryShowcase from '../OtherComponents/Accesories/AccessoryShowcase';
import SubscribeSectionAcc from '../OtherComponents/Accesories/SubscribeSectionAcc';
import { FAQSection } from '../components/FAQSection';
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
            <AccessoriesHero />
            <AccessoryShowcase />
            <SubscribeSectionAcc />
            <FAQSection />
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

export default page