function Skills() {
  return (
    <div className="relative bg-zinc-800 w-full min-h-screen flex flex-col items-center justify-center py-20 px-12">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./bg-Portfolio3.jpg')" }}
      >
        {/* Gray Overlay */}
        <div className="absolute inset-0 w-full h-full bg-stone-900 opacity-50"></div>
      </div>
      
      {/* Title */}
      <h1 className="relative z-10 text-3xl text-gray-200 mb-8">My Technical Skills</h1>

      {/* Skill Grid */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        
        {/* Skill Cards */}
        <SkillCard 
          title="Full-Stack Development"
          description="Proficient in Python & modern web development technologies."
          iconClass="fa-solid fa-laptop-code text-gray-300"
        />

        <SkillCard 
          title="Web Development"
          description="Experience with HTML, CSS, JavaScript, Bootstrap, TailwindCSS, and React.js."
          iconClass="fa-brands fa-html5 text-gray-300"
        />

        <SkillCard 
          title="Database Management"
          description="Knowledge of SQL, NoSQL, AI, and Machine Learning concepts."
          iconClass="fa-solid fa-database text-gray-300"
        />

        <SkillCard 
          title="Cloud Technologies"
          description="Hands-on experience with AWS & Azure cloud platforms."
          iconClass="fa-brands fa-aws text-gray-300"
        />

        <SkillCard 
          title="Version Control & DevOps"
          description="Proficient in Git, GitHub, and Linux command-line operations."
          iconClass="fa-brands fa-github text-gray-300"
        />

        <SkillCard 
          title="Soft Skills"
          description="Strong teamwork and communication abilities for collaborative projects."
          iconClass="fa-solid fa-users text-gray-300"
        />
        
      </div>
    </div>
  );
}

// Reusable Skill Card Component with Dark Theme
function SkillCard({ title, description, iconClass }) {
  return (
    <div className="bg-neutral-700 shadow-xl rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-full">
      <i className={`${iconClass} text-4xl mb-4`}></i>
      <h2 className="text-xl text-lime-200">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default Skills;
