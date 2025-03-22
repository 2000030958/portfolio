function Achievements() {
  return (
    <div className="relative bg-zinc-800 w-screen min-h-screen flex flex-col items-center justify-center py-12 px-0 sm:px-4">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-Portfolio3.jpg')" }}
      >
        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-stone-900 opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center w-full px-4">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-200 mb-8">
          My Achievements
        </h1>

        {/* Achievement List */}
        <div className="bg-neutral-700 shadow-xl rounded-lg p-6 w-full max-w-5xl mx-auto">
          <ul className="list-none space-y-6 text-gray-200">
            
            {/* Achievement 1 - National Rifle Shooting */}
            <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-medal text-gray-300 text-2xl"></i>
              <span>
                <strong className="text-lime-200 me-2">National Rifle Shooting:</strong> 
                Gold Medal 
              </span>
            </li>

            {/* Achievement 2 - Research Paper */}
            <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-book text-blue-400 text-2xl"></i>
              <span>
                <a 
                  href="https://ieeexplore.ieee.org/document/10073681" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:underline"
                >
                  Authored a research paper on ML-based IDS for DDOS attacks (Cited in 10+ journals) 🔗
                </a>
              </span>
            </li>

            {/* Achievement 3 - Hackathon Participation */}
            <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-laptop-code text-gray-300 text-2xl"></i>
              <span>
                <strong className="text-lime-200 me-2">Hackathon Participation:</strong> 
                Showcased problem-solving & front-end development skills in various competitions.
              </span>
            </li>

            {/* Achievement 4 - Internships */}
            <li className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-briefcase text-gray-300 text-2xl"></i>
              <span>
                <strong className="text-lime-200 me-2">Internships:</strong> 
                Completed AI-ML Virtual Internship & Cyber Virtual Internship by AICTE.
              </span>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
