import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // --- CONFIGURATION VARIABLES ---
  const logoPath = '/images/logos/igneous-property-logo.png';
  const igneousPropertyUrl = 'https://www.igneousproperty.co.za';
  const masterPlanPath = '/images/floorplans/master-floor-plan.jpg'; // Path to the colour-coded master plan
  const heroImagePath = '/images/lifestyle/cornerstone-hero.jpg'; // Path to the main architectural render
  const whatsappNumber = '27724503626'; // Your WhatsApp number

  // Data for the Features & Amenities Section (using icons/emojis as placeholders)
  const mainFeatures = [
    { icon: '🔑', title: 'Low Maintenance', description: 'Enjoy a true lock-up-and-go lifestyle ideal for modern professionals.' },
    { icon: '🚨', title: 'Secure Living', description: 'Full perimeter electric fencing, automated access control, and dedicated security measures.' },
    { icon: '🅿️', title: 'Parking', description: 'One dedicated parking bay provided per apartment for maximum convenience.' },
    { icon: '☀️', title: 'Green Energy', description: 'Sustainable living supported by solar-assisted water heating systems.' },
    { icon: '🏠', title: 'Modern Finishes', description: 'Contemporary kitchen cabinetry, quality bathroom fittings, and stylish vinyl flooring.' },
    { icon: '⚡️', title: 'Connectivity', description: 'Fibre-ready infrastructure pre-installed for lightning-fast internet access.' },
  ];

  // Data for the Floor Plan Cards (Derived from Pricelist)
  const floorPlans = [
    {
      name: 'The Arum (1 Bedroom)',
      size: '45m² - 48m² Total Size',
      price: 'From R 1,500,000',
      description: 'The efficient 1-bedroom unit perfect for first-time buyers and investors.',
    },
    {
      name: 'The Cornerstone (2 Bedroom)',
      size: '67m² - 68m² Total Size',
      price: 'From R 2,100,000',
      description: 'The spacious 2-bedroom unit designed for small families or sharers.',
    },
    {
      name: 'The Loft (2 Bed, 2 Bath)',
      size: '77m² Total Size',
      price: 'From R 2,600,000',
      description: 'Exclusive 3rd-floor loft units with two bathrooms and maximum space.',
    },
  ];

  // --- COMPONENT RENDER ---

  return (
    <div className={`min-h-screen flex flex-col`}>
      {/* ======================================================================
        HEADER/NAVIGATION
        ====================================================================== */}
      <header className="bg-gray-800 p-4 shadow-xl">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">Cornerstone on Arum</h1>
        </div>
      </header>

      {/* ======================================================================
        HERO SECTION
        ====================================================================== */}
      <section
        className="relative h-screen bg-gray-600 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url("${heroImagePath}")` }}
      >
        {/* Overlay reduced to opacity-20 for better image visibility */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
            Cornerstone on Arum - Modern Living in Table View
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto drop-shadow-md">
            22 Exclusive Apartments, 1 & 2 Bedrooms. **Zero Transfer Duty.**
          </p>
          <Link href="#contact" passHref legacyBehavior>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105">
              View Floor Plans
            </button>
          </Link>
        </div>
      </section>

      {/* ======================================================================
        MAIN CONTENT
        ====================================================================== */}
      <main className="flex-grow">
        {/* --- 1A. DESIGNED FOR LIVING (DESCRIPTIVE BLOCK) --- */}
        <section id="designed-for-living" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Designed For Living, Crafted For Life
            </h2>
            <p className="text-lg text-gray-700">
              Cornerstone on Arum sets a benchmark for residential living in Table View. The development offers premium apartments within a secure and well-managed community, designed to deliver long-term value through superior standards of design, sustainability, and comfort. Featuring 22 thoughtfully designed one- and two-bedroom units, the project presents an exceptional investment opportunity.
            </p>
          </div>
        </section>

        {/* --- 1B. FEATURES & AMENITIES SECTION --- */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
              Features & Amenities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl">
                  <div className="text-4xl mb-4 p-3 bg-blue-100 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. TABLE VIEW LIFESTYLE CAROUSEL SECTION --- */}
        <section id="lifestyle" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
              The Table View Lifestyle
            </h2>
            {/* Horizontal Scroll/Carousel Container */}
            <div className="flex space-x-6 pb-4 overflow-x-scroll scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:space-x-0">
              {['Kite Surfing', 'Sunset Views', 'Fine Dining'].map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-full bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                  <Image
                    src={`/images/lifestyle/lifestyle-${index + 1}.jpg`}
                    alt={item}
                    width={320}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item}</h3>
                    <p className="text-sm text-gray-600 mt-1">Cape Town living at its absolute best.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* --- 3A. DESIGN & STRENGTH CARDS (Under Lifestyle) --- */}
        <section id="design-strength" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Design & Strength</h3>
                <p className="text-gray-700 text-sm">
                  Smart layouts maximise space and natural light, paired with premium finishes such as timber-look vinyl flooring, engineered stone countertops, and soft-close cabinetry. Built with a full reinforced concrete frame, every apartment delivers structural integrity, acoustic comfort, and reduced long-term maintenance.
                </p>
                <a href="#features" className="text-blue-600 text-sm mt-3 inline-block hover:underline">
                  Read Less
                </a>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Sustainable Systems</h3>
                <p className="text-gray-700 text-sm">
                  Cornerstone incorporates practical green features, including onsite water storage, central hot water boiler system. These sustainable systems reduce environmental impact while providing reliable, efficient utilities for all residents.
                </p>
                <a href="#features" className="text-blue-600 text-sm mt-3 inline-block hover:underline">
                  Read Less
                </a>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3">Local Advantage</h3>
                <p className="text-gray-700 text-sm">
                  Positioned in Table View, Cornerstone on Arum is close to beaches, shopping centres, restaurants, top-tier schools, medical facilities, and the MyCiTi transport network. It combines a coastal lifestyle with everyday convenience, making it an ideal location for both living and investment.
                </p>
                <a href="#features" className="text-blue-600 text-sm mt-3 inline-block hover:underline">
                  Read Less
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3B. MASTER FLOOR PLAN OVERVIEW --- */}
        <section id="layouts" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
              Explore the Layouts
            </h2>
            <p className="text-gray-600 mb-8">
              Colour-coded plans are linked to unit availability. Select apartment type or download the full set.
            </p>

            {/* Master Plan Image and Filters */}
            <div className="mb-10 p-4 border border-gray-200 rounded-xl shadow-inner">
              <Image
                src={masterPlanPath}
                alt="Colour Coded Master Floor Plan Layout"
                width={1200}
                height={600}
                layout="responsive"
                className="rounded-lg"
              />
              <p className="mt-4 p-3 bg-yellow-50 text-sm text-yellow-800 rounded-lg border border-yellow-200">
                **Important Notice:** The images shown are photorealistic architectural renders and artist's impressions. While every effort has been made to ensure accuracy, these renders may differ from the finished product. Final specifications, finishes, and layouts may vary. Please refer to the official plans and specifications for exact details.
              </p>
            </div>

            {/* Filter Buttons & Download CTA */}
            <div className="flex justify-center space-x-3 mb-8">
              <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                All
              </button>
              <button className="border border-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
                1 Bedroom
              </button>
              <button className="border border-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
                2 Bedroom
              </button>
              <button className="border border-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
                Loft
              </button>
            </div>
            <a href="/documents/Cornerstone-Floor-Plans.pdf" download className="inline-flex items-center bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-xl hover:bg-gray-900 transition duration-300">
              Download All Floor Plans
            </a>
          </div>
        </section>

        {/* --- 4. FLOOR PLAN CARDS (Horizontal Scroll) --- */}
        <section id="floorplans" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
              Available Apartments
            </h2>
            <div className="flex space-x-6 pb-4 overflow-x-scroll scrollbar-hide md:grid md:grid-cols-3 md:gap-6 md:space-x-0">
              {floorPlans.map((plan, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-full bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">
                  {/* Placeholder for Plan Image */}
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    PLAN IMAGE - UNIT {index + 1}
                  </div>
                  <div className="p-5">
                    <h3 className="text-2xl font-bold mb-1 text-gray-900">{plan.name}</h3>
                    <p className="text-lg text-green-600 font-extrabold mb-2">{plan.price}</p>
                    <p className="text-sm text-gray-600 mb-3">{plan.size}</p>
                    <p className="text-gray-700 text-sm mb-4">{plan.description}</p>
                    <Link href="#contact" passHref legacyBehavior>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition duration-300">
                        Enquire Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. BETTERBOND FINANCING SECTION --- */}
        <section id="financing" className="bg-blue-900 py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white items-center">
              {/* Left Column: Text and Stats */}
              <div className="flex flex-col space-y-6">
                <h2 className="text-5xl font-extrabold leading-tight">Financing Made Simple</h2>
                <p className="text-xl text-blue-200">
                  Cornerstone on Arum buyers enjoy exclusive access to **BetterBond** – South Africa's trusted bond originator. With tailored guidance and faster approvals, securing your new home has never been easier.
                </p>

                <h3 className="text-2xl font-bold mt-4">Why BetterBond?</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🏆', text: '79% Success Rate: A higher approval rate than direct bank applications.' },
                    { icon: '⏱️', text: 'Fast Pre-Approval in 48 Hours: Confirm what you can afford before you commit.' },
                    { icon: '💰', text: '100% Financing Options: No deposit required for qualifying buyers.' },
                    { icon: '🤝', text: 'Dedicated Guidance: A professional bond originator supports you through every step.' },
                  ].map((item, index) => (
                    <p key={index} className="flex items-start text-lg">
                      <span className="text-2xl mr-3 text-blue-300">{item.icon}</span>
                      {item.text}
                    </p>
                  ))}
                </div>

                {/* Buyer Advantage Box */}
                <div className="p-6 bg-blue-800 rounded-lg border-2 border-blue-600 shadow-2xl">
                  <h4 className="text-xl font-bold mb-2">Cornerstone Buyer Advantage</h4>
                  <p className="text-blue-100">
                    All bond applications are managed through BetterBond, ensuring a smooth, quick, and successful process.
                  </p>
                </div>
              </div>

              {/* Right Column: BetterBond Card and CTA */}
              <div className="relative p-8 bg-white rounded-2xl shadow-2xl text-gray-900">
                <div className="flex justify-center mb-6">
                  {/* BetterBond Logo Placeholder */}
                  <Image
                    src="/images/logos/betterbond-logo.png"
                    alt="BetterBond Logo"
                    width={200}
                    height={50}
                    className="h-12 w-auto"
                  />
                </div>

                <div className="p-4 bg-gray-100 rounded-xl text-center mb-6 shadow-inner">
                  <h5 className="font-semibold text-lg mb-1">Trusted Financing Partner</h5>
                  <p className="text-sm text-gray-600">Smooth, quick, and successful bond applications.</p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-3 text-center mb-8">
                  <div className="border-r border-gray-300">
                    <p className="text-3xl font-extrabold text-blue-600">79%</p>
                    <p className="text-sm text-gray-500">Success Rate</p>
                  </div>
                  <div className="border-r border-gray-300">
                    <p className="text-3xl font-extrabold text-blue-600">48h</p>
                    <p className="text-sm text-gray-500">Pre-Approval</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-blue-600">100%</p>
                    <p className="text-sm text-gray-500">Financing</p>
                  </div>
                </div>

                {/* Contact Yolanda Kensley */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Take the First Step Today</h4>
                  <div className="flex space-x-4">
                    <a href="https://betterbond.co.za/apply" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
                      Apply for Your Bond
                    </a>
                    <button className="flex-1 text-center border-2 border-gray-300 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                      Call Yolanda: 084 645 7216
                    </button>
                  </div>
                  <div className="mt-4 p-4 bg-blue-800 rounded-lg text-white">
                    <h5 className="font-semibold mb-1">Your Bond Originator: Yolanda Kensley</h5>
                    <p className="text-sm">
                      <a href="mailto:yolanda.kensley@betterbond.co.za" className="text-blue-300 hover:underline">
                        yolanda.kensley@betterbond.co.za
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. CONTACT SECTION --- */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info (Left Column) */}
              <div className="text-lg bg-gray-50 p-8 rounded-xl shadow-inner">
                <p className="mb-4">
                  <span className="font-semibold text-gray-700">Sales:</span>
                </p>
                <p className="mb-3">
                  <span className="font-bold text-gray-900">Contact Grant on:</span>{' '}
                  <a href="tel:+27724503626" className="text-blue-600 hover:underline">072 450 3626</a>
                </p>
                <p className="mb-3">
                  <span className="font-bold text-gray-900">Email:</span>{' '}
                  <a href="mailto:sales@igneousproperty.co.za" className="text-blue-600 hover:underline">sales@igneousproperty.co.za</a>
                </p>
                <p className="mb-3">
                  <span className="font-bold text-gray-900">WhatsApp:</span>{' '}
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    +27 72 450 3626
                  </a>
                </p>
                <p className="mb-3">
                  <span className="font-bold text-gray-900">Address:</span> 154 Arum Road, Table View, 7441
                </p>
              </div>

              {/* Google Map Embed (Right Column) */}
              <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1922875972264!2d18.494940315210778!3d-33.86447618065823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f4b7b2082f5%3A0xb1b3c8c937348c21!2s154%20Arum%20Rd%2C%20Table%20View%2C%20Cape%20Town%2C%207441%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678871200000!5m2!1sen!2sus"
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
          </div>
        </section>
      </main>

      {/* ======================================================================
        FOOTER
        ====================================================================== */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Another Development by{' '}
              <a href={igneousPropertyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-semibold">
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
              className="h-10 w-auto"
            />
          </div>
        </div>
      </footer>

      {/* ======================================================================
        FLOATING WHATSAPP BUTTON
        ====================================================================== */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out transform hover:scale-110 z-50"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon Placeholder (using emoji) */}
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}
