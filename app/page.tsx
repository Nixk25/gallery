import About from "@/components/About";
import Hero from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import SneakPeak from "@/components/SneakPeak";

export default function Home() {
  return (
    <div>
      <Marquee />
      <Hero />
      <About />
      <SneakPeak />
    </div>
  );
}
