import { ARTWORKS } from "@/app/constants";
import Artwork from "./Artwork";

const SneakPeak = () => {
  return (
    <section className="flex justify-center items-center relative ">
      <div className="container border border-t-0 border-black">
        <h2 className="subheading px-5 tracking-tighter border-b border-black">
          A Glimpse into Our <br />{" "}
          <span className="text-primary">Collection</span>
        </h2>
        <div className="flex flex-wrap w-full justify-evenly cursor-none">
          {ARTWORKS.map((artwork, idx) => (
            <Artwork key={idx} artwork={artwork} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakPeak;
