export default function About() {
    return (
      <section id="about" className="py-20 bg-linear-to-t from-[rgb(13,51,2)] to-[rgb(153,194,153)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">About Us</h2>
            <div className="w-20 h-1 bg-[rgb(13,56,15)] mx-auto mt-4"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/about-us-pic.jpg"
                alt="Happy dog"
                className="rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.5)] w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-black text-shadow-[0_0_3px_rgba(0,0,0,0.5)]">
                Our Passion for Pets
              </h3>
              <p className="text-black mb-4">
                At Paws & Claws Grooming, we believe every pet deserves to look and feel their best. 
                Our team of certified groomers has over 20 years of combined experience in pet care.
              </p>
              <p className="text-black mb-4">
                We use only the highest quality, pet-safe products and take the time to ensure your 
                furry friend has a stress-free, enjoyable experience.
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <span className="text-[rgb(26,84,28)] mr-2">✓</span>
                  Certified professional groomers
                </li>
                <li className="flex items-center">
                  <span className="text-[rgb(26,84,28)] mr-2">✓</span>
                  All-natural, hypoallergenic products
                </li>
                <li className="flex items-center">
                  <span className="text-[rgb(26,84,28)] mr-2">✓</span>
                  Stress-free environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }