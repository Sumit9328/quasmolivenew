import React from 'react'
import Header from '../components/header'
import ContactSection from '../OtherComponents/Contact/ContactSection'
import ContactInfo from '../OtherComponents/Contact/ContactInfo'
import MapSection from '../OtherComponents/Contact/MapSection'
import { FAQSection } from '../components/FAQSection';
import QualityAssurance from '../OtherComponents/About/QualityAssurance';
import TestimonialSection from '../components/TestimonialSection';
import LatestBlogs from '../components/LatestBlogs';
import SubscribeSection from '../components/SubscribeSection';
import QuasmoSection from '../components/QuasmoSection';
import QuasmoFooter from '../components/QuasmoFooter';




const page = () => {
    return (
        <>
            <Header />
            <ContactSection />
            <ContactInfo />
            <MapSection />
            <FAQSection />
            <QualityAssurance />
            <TestimonialSection />
            <LatestBlogs />
            <SubscribeSection />
            <QuasmoSection />
            <QuasmoFooter />
        </>
    )
}

export default page