function Contact() {
  
  return (
    <div className="relative bg-zinc-800 w-screen min-h-screen flex flex-col items-center justify-center py-12 px-6">
  {/* Background Image */}
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-center"
   // style={{ backgroundImage: "url('./bg-Portfolio3.jpg')" }}
  >
    <div className="absolute inset-0 bg-stone-900 opacity-50"></div>
  </div>

  {/* Content Wrapper */}
  <div className="relative z-10 text-center w-screen px-4">
    {/* Profile Image */}
    <div className="w-40 h-40 rounded-3xl overflow-hidden shadow-lg mx-auto">
      <img 
        src="./lasya.jpg" 
        alt="Lasyasri Sridharala" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name & Description */}
    <h1 className="text-3xl text-gray-300 mt-4">Lasyasri Sridharala</h1>
    <p className="mt-2 mb-3 text-gray-400 text-lg">
      Full Stack Enthusiast | Passionate about Web Development & AI | Love building applications!
    </p>

   

    {/* Contact Info */}
    <div className="mt-6 bg-neutral-700 bg-opacity-90 backdrop-blur-lg shadow-xl rounded-lg p-6 w-full max-w-2xl mx-auto">
      <p className="flex items-center justify-center text-gray-300 mb-3">
        <i className="fa-solid fa-envelope text-gray-300 mr-2"></i> 
        <a href="mailto:lasyasrisridharala@gmail.com" className="hover:text-lavender-300 transition-all">
          lasyasrisridharala@gmail.com
        </a>
      </p>

      <p className="flex items-center justify-center text-gray-300 mb-3">
        <i className="fa-solid fa-phone text-gray-300 mr-2"></i> 
        <a href="tel:+918374878237" className="hover:text-lavender-500 transition-all">
          +91 8374878237
        </a>
      </p>

      <p className="flex items-center justify-center text-gray-300 mb-3">
        <i className="fa-solid fa-location-dot text-gray-300 mr-2"></i> 
        Vijayawada, India
      </p>

      <p className="flex items-center justify-center text-gray-300 mb-3">
        <i className="fa-brands fa-linkedin text-gray-300 mr-2"></i> 
        <a 
          href="https://www.linkedin.com/in/lasyasri-sridharala" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=" hover:lavender-300 transition-all"
        >
          LinkedIn Profile
        </a>
      </p>

      <p className="flex items-center justify-center text-gray-300">
        <i className="fa-brands fa-github text-gray-300 mr-2"></i> 
        <a 
          href="https://github.com/YOUR_GITHUB_USERNAME" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition-all"
        >
          GitHub Profile
        </a>
      </p>
    </div>
  </div>
</div>


  );
}

export default Contact;
