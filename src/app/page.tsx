import { TopBar } from "@/components/sunzee/top-bar";
import { Header } from "@/components/sunzee/header";
import { Hero } from "@/components/sunzee/hero";
import { Destinations } from "@/components/sunzee/destinations";
import { Experiences } from "@/components/sunzee/experiences";
import { About } from "@/components/sunzee/about";
import { Moments } from "@/components/sunzee/moments";
import { WhyChooseUs } from "@/components/sunzee/why-choose-us";
import { Testimonials } from "@/components/sunzee/testimonials";
import { CTA } from "@/components/sunzee/cta";
import { Enquiry } from "@/components/sunzee/enquiry";
import { Partners } from "@/components/sunzee/partners";
import { Footer } from "@/components/sunzee/footer";
import { FloatingActions } from "@/components/sunzee/floating-actions";
import { ScrollProgress } from "@/components/sunzee/scroll-progress";
import { WaveDivider } from "@/components/sunzee/ornaments";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Wave from hero (image) into destinations (cream paper) */}
        <WaveDivider color="var(--background)" variant="triple" className="-mt-px relative z-10 text-[var(--background)]" />
        <Destinations />

        {/* Subtle wave into Experiences (sand-tint) */}
        <WaveDivider color="var(--sand)" variant="double" className="text-[var(--sand)]" />
        <Experiences />

        {/* Wave from Experiences (sand) into About (white) */}
        <WaveDivider color="#ffffff" variant="double" className="text-white" />
        <About />

        {/* Wave from About (white) into Moments (white) — keeps flow but adds ocean detail */}
        <Moments />

        {/* Wave from Moments into WhyChooseUs (sky-tint) */}
        <WaveDivider color="var(--sky)" variant="triple" className="text-[var(--sky)]" />
        <WhyChooseUs />

        {/* Wave back into Testimonials (white) */}
        <WaveDivider color="#ffffff" variant="double" className="text-white" />
        <Testimonials />

        <CTA />

        {/* Wave from CTA (image) into Enquiry (sand-tint) */}
        <WaveDivider color="var(--sand)" variant="triple" className="-mt-px relative z-10 text-[var(--sand)]" />
        <Enquiry />

        {/* Wave from Enquiry (sand) into Partners (sky-tint) */}
        <WaveDivider color="var(--sky)" variant="double" className="text-[var(--sky)]" />
        <Partners />
      </main>
      <Footer />
      <FloatingActions />
      {/* Spacer so mobile bottom nav doesn't cover footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
