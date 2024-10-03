import React from "react";
import { FaArrowRight } from "react-icons/fa";

const artworks = [
  {
    artist: "Sophia Michaels",
    title: "Echoes of the Mind",
    description:
      "Toto dílo vzniklo z introspektivního přemýšlení o lidských emocích. Sophia Michaela prozkoumala, jak vzpomínky a sny tvarují naše vnímání světa. Každá vrstva malby představuje různé stavy mysli, propojené abstraktními liniemi.",
    blur_image: "path/to/echoes_of_the_mind_blurred.jpg",
  },
  {
    artist: "Lukas von Meer",
    title: "Ocean of Time",
    description:
      "Inspirace přírodními cykly a proudy času vedla Lukase k vytvoření tohoto díla. Zkoumal, jak se čas neustále pohybuje a přetváří, stejně jako oceán, který nikdy nestojí na místě. Dílo kombinuje jemné odstíny modré s dramatickými strukturami.",
    blur_image: "path/to/ocean_of_time_blurred.jpg",
  },
  {
    artist: "Elena Rivas",
    title: "Fragments of Silence",
    description:
      "Elena se zaměřila na křehkost a sílu ticha v moderní době. Použitím jemných barev a ostrých tvarů chtěla vyjádřit kontrast mezi klidem a chaosem, který prožíváme ve světě plném hluku.",
    blur_image: "path/to/fragments_of_silence_blurred.jpg",
  },
  {
    artist: "Marco Bellini",
    title: "Illusions in Motion",
    description:
      "Toto abstraktní dílo vzniklo během Markova pobytu v Paříži, kde ho fascinovala hra světla a pohybu na ulicích. Každá barva a linie představuje prchavé okamžiky, které zachytil při každodenních procházkách městem.",
    blur_image: "path/to/illusions_in_motion_blurred.jpg",
  },
];

const SneakPeak = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="container  border border-t-0 border-black">
        <h2 className="subheading px-5 tracking-tighter border-b border-black">
          A Glimpse into Our <br />{" "}
          <span className="text-primary">Collection</span>
        </h2>
        <div className="flex  flex-wrap w-full justify-evenly">
          {artworks.map((artwork, idx) => (
            <div
              key={idx}
              className="flex flex-col  border-b  w-full  p-4 border-black "
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500  ">
                      {artwork.artist}
                    </span>
                    <span className="text-2xl  ">{artwork.title}</span>
                  </div>

                  <p className="text-sm max-w-[300px] ">
                    {artwork.description}
                  </p>
                </div>
                <div className="relative">
                  <div className="rounded-full size-10 md:size-20 bg-primary" />
                  <FaArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakPeak;
