import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SneakPeak from "@/components/SneakPeak/SneakPeak";
import UpcomingEvents from "@/components/Events/UpcomingEvents";
import Faq from "@/components/Faq/Faq";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Hero />
      <About />
      <SneakPeak />
      <UpcomingEvents />
      <Testimonials />
      <Faq />
    </div>
  );
}
