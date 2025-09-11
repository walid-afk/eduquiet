import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import PowerPlants from "./components/PowerPlants";
import TestimonialCTA from "./components/TestimonialCTA";
import SpecificationsSection from "./components/SpecificationsSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WaveDivider from "./components/WaveDivider";

export default function Home() {
  return (

    
    <main className="font-sans min-h-screen flex flex-col">
      <Header />
      {/* Hero (white) */}
      <section id="home" className="bg-white text-[#111] pt-12 sm:pt-0 pb-0">
        <Hero />
        
      </section>

      <WaveDivider className="hidden sm:block" />

      {/* Specifications Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <SpecificationsSection />
      </section>

      <WaveDivider flip />

      {/* Feature grid (white) */}
      <section id="features" className="bg-white text-[#111] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <FeatureGrid />
        </div>
      </section>

      <WaveDivider />

      {/* Power plants (black full-bleed) */}
      <section className="bg-black text-white py-12 sm:py-16 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
      
        <PowerPlants />
        </div>
      </section>
     
      {/* Contact Form */}
      <section className="py-12 sm:py-16">
        <ContactForm />
      </section>
      <WaveDivider flip />

      {/* Testimonial + CTA (white) */}
      <section id="contact" className="bg-white text-[#111] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <TestimonialCTA />
        </div>
      </section>
     

{/* App Section */}
  

      <WaveDivider />
      <Footer />
    </main>
  );
}
