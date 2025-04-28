const services = [
    {
      name: 'Basic Grooming',
      description: 'Bath, brush, nail trim, ear cleaning, and haircut',
      price: '$50',
    },
    {
      name: 'Deluxe Spa Package',
      description: 'Everything in Basic plus teeth brushing, paw treatment, and blueberry facial',
      price: '$80',
    },
    {
      name: 'Puppy Package',
      description: 'Gentle introduction to grooming for puppies under 6 months',
      price: '$40',
    },
    {
      name: 'Senior Care',
      description: 'Special gentle grooming for older dogs with arthritis or sensitive skin',
      price: '$60',
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-20 bg-linear-to-t from-[rgb(153,194,153)] to-[rgb(13,51,2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Our Services</h2>
            <div className="w-20 h-1 bg-[rgb(224,243,225)] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[rgb(224,243,225)] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{service.name}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="text-[rgb(26,84,28)] font-bold text-lg">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }