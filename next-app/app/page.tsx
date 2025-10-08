import Image from 'next/image';
import Link from 'next/link'; // FIX: Re-added the missing Link import

export default function Home() {
  // Constants
  const logoPath = '/images/logos/igneous-property-logo.png';
  const igneousPropertyUrl = 'https://www.igneousproperty.co.za';
  const contactAddress = '154 Arum Road, Table View, 7441';

  // Array of features for the new section
  const features = [
    { title: "Low Maintenance", description: "Lock-up-and-go lifestyle.", icon: "🏠" },
    { title: "Secure Living", description: "Electric fencing and access control.", icon: "🔑" },
    { title: "Parking", description: "Dedicated parking bay per apartment.", icon: "🅿️" },
    { title: "Green Energy", description: "Solar-assisted water heating to reduce utility bills.", icon: "☀️" },
    { title: "Modern Finishes", description: "Contemporary kitchen and bathroom fittings.", icon: "✨" },
    { title: "Connectivity", description: "Fibre-ready infrastructure for fast internet.", icon: "⚡️" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ======================================================================
        HEADER/NAVIGATION GOES HERE
        ======================================================================
      */}
      <header className="bg-gray-100 p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Arum Road Development</h1>
        </div>
      </header>

      {/* ======================================================================
        HERO SECTION
        ======================================================================
      */}
      <section 
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url("/images/lifestyle/cornerstone-hero.jpg")' }} 
      >
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Cornerstone on Arum - Modern Living in Table View
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-medium drop-shadow-md">
            22 Exclusive Apartments, 1 & 2 Bedrooms. **Zero Transfer Duty.**
          </p>
          <Link href="#contact" passHref legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transition duration-300 inline-block">
              View Floor Plans
            </a>
          </Link>
        </div>
      </section>

      {/* ======================================================================
        MAIN CONTENT CONTAINER
        ======================================================================
      */}
      <main className="flex-grow container mx-auto px-6 py-12">
        
        {/* ======================================================================
          FEATURES AND AMENITIES SECTION (New Content)
          ======================================================================
        */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Features & Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">
                <p className="text-4xl mb-4">{feature.icon}</p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Contact Details Section */}
        <section id="contact" className="py-12 bg-gray-50 rounded-xl shadow-inner my-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
            <div className="text-lg mb-8 space-y-2">
              <p>
                Contact Grant on: <a href="tel:+27724503626" className="text-blue-600 hover:underline">072 450 3626</a>
              </p>
              <p>
                Email: <a href="mailto:sales@igneousproperty.co.za" className="text-blue-600 hover:underline">sales@igneousproperty.co.za</a>
              </p>
              <p>
                WhatsApp: <a href="https://wa.me/27724503626" className="text-blue-600 hover:underline">+27 72 450 3626</a>
              </p>
              <p>
                Address: {contactAddress}
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 shadow-lg rounded-lg overflow-hidden mx-auto mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1922875972264!2d18.494940315210778!3d-33.86447618065823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!1m4!1m3!1d200!2d18.495!3d-33.864476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f4b7b2082f5%3A0xb1b3c8c937348c21!2s154%20Arum%20Rd%2C%20Table%20View%2C%20Cape%20Town%2C%207441%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678871200000!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of 154 Arum Road, Table View"
              ></iframe>
            </div>
          </div>
        </section>

      </main>


      {/* ======================================================================
        FOOTER GOES HERE
        ======================================================================
      */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left text-sm">
            <p>&copy; {new Date().getFullYear()} Another Development by{' '}
              <a href={igneousPropertyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Igneous Property
              </a>
            </p>
          </div>

          {/* Logo Placeholder - Updated with actual logo path */}
          <div className="flex items-center">
            <Image
              src={logoPath}
              alt="Igneous Property Logo"
              width={100} 
              height={40} 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
