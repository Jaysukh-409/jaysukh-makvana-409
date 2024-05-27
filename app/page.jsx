"use client";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import React from "react";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const resumeLink =
  "https://drive.google.com/file/d/1eIEd1E9J1lCyxM2-mnoZZRae3_ur3WRu/view?usp=sharing";

const Home = () => {
  const roleText = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(roleText.current, {
      strings: [
        "Open-Source Contributor",
        "Flutter Developer",
        "Competitive Programmer",
        "Youtuber",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Role Text Content */}
            <span className="text-xl" ref={roleText}></span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Jaysukh Makvana</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a open-source contributor and android developer. I love to
              work with new technologies and always ready to learn new things.
              Since, I like to solve problems, I am doing competitive
              programming as well. Apart from this, I make videos on youtube
              related to programming and development. I am noob :) footballer
              and love to play cricket.
            </p>

            {/* CV Download & Github */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => {
                  window.open(resumeLink, "_blank");
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
