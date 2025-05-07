'use client';

import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import CompanyInfoSection from '@/components/organisms/Know';
import StickyNavbar from '@/components/organisms/Navbar';
import FreightConsultingIntro from '@/components/organisms/NextSteps';
import Products from '@/components/organisms/Products';
import Services from '@/components/organisms/Services';
import TestimonialSection from '@/components/organisms/Testimonials';
import TopSection from '@/components/organisms/TopSection';

export default function Home() {
  return (
    <main className='bg-[#FDB813]'>
      <StickyNavbar />
      <HeroSection />
      <Services />
      <TopSection />
      <FreightConsultingIntro />
      <Products />
      <CompanyInfoSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
