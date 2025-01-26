
const experiences = [
  {
    title: 'Trainee Software Engineer',
    company: 'Sapphire Software Solutions - Ahmedabad',
    duration: 'Nov 2024 - Jan 2025',
    description: [
      'Mastered web design from basics to advanced through hands-on projects and continuous learning.',
      'Leveraged the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop fully-functional, scalable websites, showcasing full-stack development capabilities.',
      'Collaborated on diverse projects, from responsive single-page applications to robust e-commerce platforms, honing problem-solving skills and adapting to evolving project requirements.'
    ],
    link: "https://drive.google.com/file/d/1xv4ZTAlScW-T3o8SRRapXsHAAvlSR0fF/view?usp=drive_link"
  },
  {
    title: 'Technical Software Support Executive',
    company: 'Alpha-E Barcode Solutions - Ahmedabad',
    duration: 'Jan 2024 - Jun 2024',
    description: [
      'Worked with SSMS to store data of databases and solve related errors.',
      'Worked with SAP-CRYSTAL REPORTS to solve errors related to databases and display data from databases.',
      'Troubleshot and fixed bugs and issues of customers and clients in the software to ensure smooth operation of the application software.'
    ],
    link: "https://drive.google.com/file/d/1xv4ZTAlScW-T3o8SRRapXsHAAvlSR0fF/view?usp=drive_link"
  },
  {
    title: 'Front-end Development Intern',
    company: 'StackDot - Ahmedabad',
    duration: 'May 2023 - Jun 2023',
    description: [
      'Learned to design and develop websites using HTML, CSS.',
      'Assisted under senior web developers in the design and development of websites using HTML, CSS, and JavaScript.'
    ],
    link: "https://drive.google.com/file/d/1P-S0HE5uJVzzqUTZ_CjhFe6J3JjeCXdh/view?usp=drive_link"
  },
];

const Experience = () => {
  return (
    <section>
      <div id="experience" className="max-w-4xl mx-auto p-4 my-16">
        <h1 className="flex flex-col justify-center text-center text-3xl font-bold m-12 sm:text-5xl">Experience</h1>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transition-transform duration-200 hover:scale-105 
                       md:flex md:items-start md:justify-between md:p-8"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <h4 className="text-gray-600">{exp.company}</h4>
                <p className="text-gray-500">{exp.duration}</p>
                {/* <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-6 py-3 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-gray-700 w-32 h-12 mt-3 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <a href={exp.link} >Certificate</a>
                
              </button> */}

              </div>
              <ul className="mt-2 text-gray-700 md:w-1/2 md:ml-4">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="list-disc list-inside">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
