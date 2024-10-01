import { Button } from "../button";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <main id="home" className="flex-1">
      <section className="w-full py-8 md:py-6 lg:py-4">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                {/* Added min-h to reserve space */}
                <h1 className="text-[#e07f46] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight py-2 min-h-[100px] md:min-h-[80px]">
                  <span className="inline-block">
                    <Typewriter
                      words={["Hey! I am Suraj 🌞" ,"MERN Stack Developer"]}
                      loop={false}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="max-w-[600px] pt-3 text-muted-foreground text-sm md:text-base lg:text-xl">
                  Dynamic MERN stack developer with foundational Python
                  programming skills, crafting interactive web applications and
                  creative solutions.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col pt-3 gap-2 sm:flex-row sm:justify-center lg:justify-start">
                <Button variant="outline" size="default" className="bg-gray-100">
                  <a
                    href="https://drive.google.com/file/d/1kVunM0FvZ2LKFKgm3OgVf0v5ib9KugbJ/view?usp=sharing"
                    // target="_blank"
                    // rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="hero.jpg"
                alt="Hero"
                width="500"
                height="500"
                className="aspect-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
