import { Button } from "../button";
import { Typewriter } from 'react-simple-typewriter'

export const HeroSection = () => {
  return (
    <main id="home" className="flex-1">
      <section className="w-full py-8 md:py-6 lg:py-2">

        <div className="container px-4 md:px-6 lg:py-2">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-[#e07f46] text-5xl truncate font-bold tracking-tighter py-2">

                  <Typewriter words={['Hey ! I am Suraj 🌞', "MERN Stack Developer"]}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />

                </h1>
                <p className="max-w-[600px] pt-3 text-muted-foreground md:text-xl">
                  Dynamic MERN stack developer with foundational Python programming skills, crafting, interactive web applications and creative solutions.
                </p>
              </div>

              <div className="flex flex-col pt-3 gap-2 min-[400px]:flex-row">
                <Button varient={"outline"} size={"default"} >
                  <a href="https://drive.google.com/file/d/1QiRu5UgajqGmGJbWwszkKUcoiqNEYG8T/view?usp=drive_link">Download CV</a>

                </Button>
                {/* <Button varient = {"default"} size={"default"} >
                    Contact Me
                </Button> */}
              </div>
            </div>

            <img src="hero.jpg"
              alt="Hero" width="500" height="500" className="mx-auto aspect-auto overflow-hidden object-cover sm:w-fill" />


          </div>
        </div>

      </section>
    </main>
  );
};
