import About from "@/components/About";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SneakPeak from "@/components/SneakPeak";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Hero />
      <About />
      <SneakPeak />
      <UpcomingEvents />
    </div>
  );
}
