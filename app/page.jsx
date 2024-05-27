import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Open-Source Contributor</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Jaysukh Makvana</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at building web applications using modern technologies.
            </p>

            {/* Button & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
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
