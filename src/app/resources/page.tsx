"use client";
import React, { useState } from 'react';
import Header from '../components/header';
import ResourceTabs from '../OtherComponents/Resources/ResourceTabs';
import BlogLayout from '../OtherComponents/Resources/BlogLayout';
import LatestPosts from '../OtherComponents/Resources/LatestPosts';
import BlogDetailLayout from '../OtherComponents/Resources/BlogDetailLayout';
import BlogDetailSection2 from '../OtherComponents/Resources/BlogDetailSection2';
import ContactSection from '../components/ContactSection';
import SubscribeSection from '../components/SubscribeSection';
import QuasmoSection from '../components/QuasmoSection';
import QuasmoFooter from '../components/QuasmoFooter';
import ResourcesTestimonials from '../OtherComponents/Resources/ResourcesTestimonials';

const page = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <>
      <Header/>
      <ResourceTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
      
      {activeTab === "blogs" ? (
        <>
          <BlogDetailLayout/>
          <BlogDetailSection2/>
        </>
      ) : (
        <>
          <BlogLayout/>
          <LatestPosts/>
        </>
      )}
      
      <ResourcesTestimonials/>
      <ContactSection/>
      <SubscribeSection/>
      <QuasmoSection/>
      <QuasmoFooter/>
    </>
  )
}

export default page