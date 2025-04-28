export default function Hero() {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center bg-[url('../public/images/dog-groomer-hero.jpg')] bg-cover bg-center bg-[rgb(123,156,125)]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mb-4">
            Professional Dog Grooming
          </h1>
          <p className="text-xl md:text-2xl text-white text-shadow-[0_3px_6px_rgba(0,0,0,0.5)] mb-8">
            Because your best friend deserves the best care
          </p>
          <a
            href="#contact"
            className="bg-[rgb(13,56,15)] hover:bg-[rgb(21,69,23)] text-white text-shadow-[0_3px_6px_rgba(0,0,0,0.5)] font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    );
  }