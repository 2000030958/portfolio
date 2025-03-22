function Education() {
  return (
    <div className="relative bg-zinc-800 w-screen min-h-screen flex flex-col items-center justify-center py-12 px-6">
      
      
      
      {/* Title */}
      <h1 className="relative z-10 text-3xl text-gray-200 mb-8">My Education</h1>

      {/* Education Grid */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        
        {/* Education Cards */}
        <EducationCard 
          degree="B.Tech in Computer Science"
          institution="KL University"
          year="2020 - 2024"
          cgpa="8.99 CGPA"
          location="Vijayawada, India"
          iconClass="fa-solid fa-graduation-cap text-gray-300"
        />

        <EducationCard 
          degree="Board of Intermediate"
          institution="Sarada Educational Institution"
          year="2018 - 2020"
          cgpa="9.3 CGPA"
          location="Vijayawada, India"
          iconClass="fa-solid fa-school text-gray-300"
        />

        <EducationCard 
          degree="SSC [10th]"
          institution="Sri Chaitanya School"
          year="2018"
          cgpa="9.8 CGPA"
          location="Vijayawada, India"
          iconClass="fa-solid fa-book text-gray-300"
        />
        
      </div>
    </div>
  );
}

// Reusable Education Card Component with Dark Theme
function EducationCard({ degree, institution, year, cgpa, location, iconClass }) {
  return (
    <div className="bg-neutral-700 shadow-xl rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl w-full">
      <i className={`${iconClass} text-4xl mb-4`}></i>
      <h2 className="text-xl text-lime-200">{degree}</h2>
      <p className="text-gray-300 mt-1"><strong>{institution}</strong></p>
      <p className="text-gray-300 mt-1"><strong>Year:</strong> {year}</p>
      <p className="text-gray-300 mt-1"><strong>CGPA:</strong> {cgpa}</p>
      <p className="text-gray-300 mt-1"><strong>Location:</strong> {location}</p>
    </div>
  );
}

export default Education;
