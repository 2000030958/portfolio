function Home() {
  function handleHireMe() {
    window.location.href = "mailto:lasyasrisridharala@gmail.com"; 
  }

  function handleDownloadCV() {
    window.open("/Lasyasrisridharala_Resume.pdf", "_blank");
  }

  return (
    <div className="relative w-screen min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 px-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-stone-900 opacity-50"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl text-white font-light">Hello, I'm Lasyasri Sridharala</h2>
          <p className="mt-2 mb-3 text-gray-400 text-lg">
            Full Stack Enthusiast | Passionate about Web Development & AI | Love building applications!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            <button
              onClick={handleHireMe}
              className="px-6 py-2 rounded-lg bg-transparent border border-gray-400 hover:bg-blue-700 transition text-white font-semibold"
            >
              CONTACT
            </button>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-2 rounded-lg bg-neutral-700 hover:bg-blue-700 transition text-white font-semibold"
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg">
          <img
            src="/lasya.jpg" // Ensure lasya.jpg is inside the public/ folder
            alt="Lasyasri Sridharala"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    
  );
}

export default Home;
