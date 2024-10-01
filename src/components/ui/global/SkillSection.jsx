const SkillSection = () => {
  return (
    <section id='skills' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>

          <div className='space-y-2' >

            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              My Skills
            </h2>

            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Here are some of the technologies
            </p>

          </div>
        </div>

        <div className='mx-auto grid mt-10 max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-5'>
          <img
            src="/skills/html.png"
            width="100"
            height="100"
            alt="HTML"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/css.png"
            width="100"
            height="100"
            alt="CSS"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/javascript.png"
            width="100"
            height="100"
            alt="Javascript"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/python.png"
            width="100"
            height="100"
            alt="Python"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/sql.png"
            width="100"
            height="100"
            alt="SQL"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/react.png"
            width="100"
            height="100"
            alt="React"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/node.png"
            width="100"
            height="100"
            alt="Node"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/express.png"
            width="100"
            height="100"
            alt="Express.js"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/tailwind.png"
            width="100"
            height="100"
            alt="TailwindCss"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/mongodb.png"
            width="100"
            height="100"
            alt="MongoDB"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/ssms.png"
            width="100"
            height="100"
            alt="Microsoft SQL Server"
            className="mx-auto rounded-full shadow-lg"
          />
          <img
            src="/skills/git.png"
            width="100"
            height="100"
            alt="Git"
            className="mx-auto rounded-full shadow-lg"
          />
          

        </div>

      </div>
    </section>
  )
}

export default SkillSection