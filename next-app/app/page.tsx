import Image from 'next/image';

export default function Home() {
  // The logo path is adjusted to be relative to the /public folder,
  // as Next.js serves assets from public/ as the root directory.
  const logoPath = '/images/logos/igneous-property-logo.png'; // Updated to the final logo path
  const igneousPropertyUrl = 'https://www.igneousproperty.co.za';

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
        MAIN CONTENT GOES HERE
        ======================================================================
      */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Example Section - Replace with your actual content */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome to Arum Road Development</h2>
          <p className="text-gray-700">
            Discover modern living in the heart of Table View.
          </p>
        </section>

        {/* Contact Details Section */}
        <section id="contact" className="py-12 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <div className="text-lg mb-8">
              <p className="mb-2">
                Contact Grant on: <a href="tel:+27724503626" className="text-blue-600 hover:underline">072 450 3626</a>
              </p>
              <p className="mb-2">
                Email: <a href="mailto:sales@igneousproperty.co.za" className="text-blue-600 hover:underline">sales@igneousproperty.co.za</a>
              </p>
              <p className="mb-2">
                WhatsApp: <a href="https://wa.me/27724503626" className="text-blue-600 hover:underline">+27 72 450 3626</a>
              </p>
              <p className="mb-2">
                Address: 154 Arum Road, Table View, 7441
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1922875972264!2d18.494940315210778!3d-33.86447618065823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!1m4!1m3!1d200!2d18.495!3d-33.864476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5f4b7b2082f5%3A0xb1b3c8c937348c21!2s154%20Arum%20Rd%2C%20Table%20View%2C%20Cape%20Town%2C%207441%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1678871200000!5m2!1sen!2sus" // This specific URL points to 154 Arum Road
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

        {/* Example Section - Replace with your actual content */}
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold mb-4">Project Highlights</h2>
          <p className="text-gray-700">
            Learn more about the features and amenities.
          </p>
        </section>
      </main>


      {/* ======================================================================
        FOOTER GOES HERE
        ======================================================================
      */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Another Development by{' '}
              <a href={igneousPropertyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Igneous Property
              </a>
            </p>
          </div>

          {/* Logo Placeholder - Updated with actual logo path */}
          <div className="flex items-center">
            {/* The image path below is relative to your /public folder */}
            <Image
              src={logoPath}
              alt="Igneous Property Logo"
              width={100} // Set appropriate size
              height={40} // Set appropriate size
              className="h-10 w-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
