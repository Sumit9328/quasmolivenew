import React from 'react'
import CareerHero from '@/app/OtherComponents/Contact/CareerHero';
import Header from '@/app/components/header';
import CareersPage from '@/app/OtherComponents/Contact/CareersPage';
import OpportunityForm from '@/app/OtherComponents/Contact/OpportunityForm';
import { FAQSection } from '@/app/components/FAQSection';
import SubscribeSection from '@/app/components/SubscribeSection';
import QuasmoSection from '@/app/components/QuasmoSection';
import QuasmoFooter from '@/app/components/QuasmoFooter';



const page = () => {
    return (
        <>
            <Header />
            <CareerHero />
            <CareersPage />
            <OpportunityForm/>
            <FAQSection />
            <SubscribeSection />
            <QuasmoSection />
            <QuasmoFooter />
        </>
    )
}

export default page