
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <section id='projects' className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
    <div className='container px-4 md:px-6'>

        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'> 
                Features Projects
            </h2>

            <p className='max-w-[900] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Checkout some of my projects
            </p>

        </div>
        </div>

        <div className='mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-10'>

        <ProjectCard
        imageUrl="project/My-Chat-App.png"
        title="My Chat App"
        description="A mordern web application built with MERN stack"
        url="https://github.com/surajdudhatra02/My-Chat-App-using-MERN-Stack"
        />

        <ProjectCard
        imageUrl="project/MyDocument.jpg"
        title="My Document"
        description="A document web application built with MERN stack"
        url="https://github.com/surajdudhatra02/My-Document"
        />

        <ProjectCard
        imageUrl="project/Restaurant.jpg"
        title="Restaurant Management System"
        description="A mordern web application built with Javascript, Nodejs, MongoDB"
        url="https://github.com/surajdudhatra02/My-Restaurant-"
        />

        <ProjectCard
        imageUrl="project/My-Snake-Game.png"
        title="My Snake Game"
        description="Using Python"
        url="https://github.com/surajdudhatra02/my-snake-game-using-python"
        />

        <ProjectCard
        imageUrl="project/My-Weather-App.png"
        title="My Weather App"
        description="Using Python"
        url="https://github.com/surajdudhatra02/Weather-App-using-Python"
        />

        <ProjectCard
        imageUrl="project/todo.jpg"
        title="To Do Website"
        description="Using HTML, CSS, JavaScript"
        url="https://github.com/surajdudhatra02/My-To-Do"
        />
        <ProjectCard
        imageUrl="project/qr-code.jpg"
        title="QR Code Generator"
        description="Using HTML, CSS, JavaScript"
        url="https://github.com/surajdudhatra02/QR-Code-Generator"
        />
        <ProjectCard
        imageUrl="project/calc.jpg"
        title="Calculator"
        description="Using HTML, CSS, JavaScript"
        url="https://github.com/surajdudhatra02/Calculator"
        />
        <ProjectCard
        imageUrl="project/Task management.jpg"
        title="Task Management System"
        description="Using Javacript, NodeJS"
        url="https://github.com/surajdudhatra02/Task-Generator-using-Node.js-"
        />
        <ProjectCard
        imageUrl="project/profile.jpg"
        title="Profile Generator"
        description="Using Javacript, NodeJS, MongoDB"
        url=""
        />

        </div>

    </div>
    </section>
  )
}

export default ProjectSection