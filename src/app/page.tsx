import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import PowerPlants from "./components/PowerPlants";
import TestimonialCTA from "./components/TestimonialCTA";
import SpecificationsSection from "./components/SpecificationsSection";
import TestimonialsSection from "./components/TestimonialsSection";
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

      <WaveDivider />

      {/* Specifications Section */}
      <section className="py-16 sm:py-24">
        <SpecificationsSection />
      </section>

      <WaveDivider flip />

      {/* Feature grid (white) */}
      <section id="features" className="bg-white text-[#111] pt-12 sm:pt-20 pb-4 sm:pb-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <FeatureGrid />
        </div>
      </section>

      <WaveDivider />

      {/* Power plants (black full-bleed) */}
      <section className="bg-black text-white py-16 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <PowerPlants />
        </div>
      </section>    
      <WaveDivider flip/>
      <section className="py-16 sm:py-0">
        <TestimonialsSection />
      </section>
      <WaveDivider />
      {/* Contact Form */}
      <section className="py-16 sm:py-2">
        <ContactForm />
      </section>
      <WaveDivider flip />

      {/* Testimonial + CTA (white) */}
      <section id="contact" className="bg-white text-[#111] py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <TestimonialCTA />
        </div>
      </section>

      <WaveDivider />
      <Footer />
    </main>
  );
}
