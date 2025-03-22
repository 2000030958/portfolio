function Projects() {
  return (
    <div className="relative bg-zinc-800 w-screen min-h-screen flex flex-col items-center justify-center py-12 px-6">
      
      
      
      {/* Title */}
      <h1 className="relative z-10 text-3xl text-gray-200 mb-8">My Projects</h1>

      {/* Project Grid */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-4">
        
        {/* Project Cards */}
        <ProjectCard 
          title="Glaucoma Detection using Machine Learning"
          date="March 2023"
          description="Developed a system for detecting glaucoma using machine learning techniques."
          technologies="CNN, Python, Jupyter Notebook"
          iconClass="fa-solid fa-eye text-gray-300"
        />

        <ProjectCard 
          title="Entertainment Management System (MERN Stack)"
          date="December 2021"
          description="Developed a web application for managing entertainment events."
          technologies="MongoDB, Express.js, React, Node.js"
          iconClass="fa-solid fa-film text-gray-300"
        />

        <ProjectCard 
          title="Stock-Exchange Management System"
          date="May 2022"
          description="Created an enterprise-level web application for managing stock exchanges."
          technologies="Java, Spring Boot, Hibernate"
          iconClass="fa-solid fa-chart-line text-gray-300"
        />

        <ProjectCard 
          title="Corporate Recruitment System (Java Full Stack)"
          date="December 2022"
          description="Built a web-based recruitment system for corporate use."
          technologies="Java, Spring Boot, Angular, MySQL"
          iconClass="fa-solid fa-briefcase text-gray-300"
        />
        
      </div>
    </div>
  );
}

// Reusable Project Card Component with Black & Gray Theme
function ProjectCard({ title, date, description, technologies, iconClass }) {
  return (
    <div className="bg-neutral-700 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 w-full">
      <i className={`${iconClass} text-4xl mb-4`}></i>
      <h2 className="text-xl text-lime-200">{title}</h2>
      <p className="text-gray-300 mt-2"><strong>Date:</strong> {date}</p>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-300 mt-2"><strong>Technologies Used:</strong> {technologies}</p>
    </div>
  );
}

export default Projects;
