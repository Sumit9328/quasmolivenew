import React from 'react';
import Header from '@/app/components/header';
import AboutHero from '../OtherComponents/About/AboutHero';
import CompanyOverview from '../OtherComponents/About/CompanyOverview';
import ImpactStats from '../components/ImpactStats';
import VisionMission from '../OtherComponents/About/VisionMission';
import OurValues from '../OtherComponents/About/OurValues';
import MindsBehind from '../OtherComponents/About/MindsBehind';
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
            <AboutHero />
            <CompanyOverview />
            <ImpactStats />
            <VisionMission />
            <OurValues />
            <MindsBehind />
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