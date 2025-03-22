function Certifications() {
  return (
    <div className="relative bg-zinc-800 w-screen min-h-screen flex flex-col items-center justify-center py-12 px-6">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('./bg-Portfolio3.jpg')" }}
      >
        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-stone-900 opacity-50"></div>
      </div>
      
      {/* Title */}
      <h1 className="relative z-10 text-3xl text-gray-200 mb-8">My Certifications</h1>

      {/* Certifications Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
        
        {/* Certification Cards */}
        <CertificationCard 
          title="Red Hat Certified Enterprise Application Developer"
          link="https://www.credly.com/badges/338b5ee7-80c7-4080-b9f2-7b97c2f9f797/public_url"
          iconClass="fa-brands fa-redhat text-gray-300"
        />

        <CertificationCard 
          title="AWS Cloud Practitioner"
          link="https://www.credly.com/badges/b3f19505-494f-43ec-a36b-536ae28db6f4/public_url"
          iconClass="fa-brands fa-aws text-gray-300"
        />

        <CertificationCard 
          title="EPAM Certification"
          link="https://certificates.epam.com/certificates/db2ccba1-28f3-4045-bbdb-4beea60b02dc"
          iconClass="fa-solid fa-certificate text-gray-300"
        />

        <CertificationCard 
          title="Advanced RPA Professional"
          link="#"
          iconClass="fa-solid fa-robot text-gray-300"
        />
        
      </div>
    </div>
  );
}

// Reusable Certification Card Component with Dark Theme
function CertificationCard({ title, link, iconClass }) {
  return (
    <div className="bg-neutral-700 shadow-xl rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <i className={`${iconClass} text-4xl mb-4`}></i>
      <h2 className="text-xl text-lime-200">{title}</h2>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 bg-zinc-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-600 transition-all duration-300"
      >
       <span className="text-gray-200">View Certification</span> 
      </a>
    </div>
  );
}

export default Certifications;
