import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import GallerySection from '@/components/sections/GallerySection';
import NewsSection from '@/components/sections/NewsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <GallerySection />
        <NewsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;