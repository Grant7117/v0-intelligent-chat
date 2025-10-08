/**
 * This file contains the main page component for the Arum Road development website.
 * It includes the contact section and the footer information as requested.
 * NOTE: Add your main website content (hero, features, galleries, etc.) between the header and contact sections.
 */
import Image from 'next/image';

// Assuming the main content component is named 'MainContent' and is defined elsewhere, 
// or you will fill in the content later. For this snippet, we will structure the JSX.

export default function Home() {
  // --- Contact Details ---
  const contact = {
    grantPhone: '072 450 3626',
    whatsapp: '27724503626',
    email: 'sales@igneousproperty.co.za',
    address: '154 Arum Road, Table View, 7441',
  };

  // The logo path is adjusted to be relative to the /public folder, 
  // as Next.js serves assets from public/ as the root directory.
  // We assume the logo file is named 'logo.png' or a similar common name.
  // If the actual image file inside /public/images/logos is named differently, update the 'logoPath' below.
  const logoPath = '/images/logos/logo-placeholder.png'; // Placeholder name for the file in the public directory
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
        MAIN PAGE CONTENT GOES HERE (Hero, Gallery, Features, etc.)
        ======================================================================
      */}
      <main className="flex-grow">
        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold">Your Main Project Content Will Go Here</h2>
          <p className="mt-4 text-gray-600">This is where you will place the images, descriptions, and features of the Arum Road Apartments.</p>
        </section>

        {/* ======================================================================
          1. CONTACT DETAILS SECTION (As Requested)
          ======================================================================
        */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-2 border-blue-500 inline-block pb-1">
              Contact Us
            </h2>
            <div className="text-xl space-y-4">
              <p>
                <span className="font-semibold text-gray-700">Contact Grant on:</span>{' '}
                <a href={`tel:+${contact.whatsapp}`} className="text-blue-600 hover:text-blue-800 transition duration-150">
                  {contact.grantPhone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-700">Email:</span>{' '}
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800 transition duration-150">
                  {contact.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-700">WhatsApp:</span>{' '}
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition duration-150 flex justify-center items-center">
                  +27 72 450 3626 (Click to Chat)
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-700">Address:</span> {contact.address}
                <br />
                {/* Placeholder for Google Map Link/Embed */}
                <a href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:underline mt-1 block">
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ======================================================================
        2. FOOTER SECTION (Company Information and Logo)
        ======================================================================
      */}
      <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Copyright and Company Link */}
          <div className="mb-4 md:mb-0 text-center md:text-left text-sm">
            <p className="flex items-center justify-center md:justify-start">
              &copy; {new Date().getFullYear()} Another Development by{' '}
              <a 
                href={igneousPropertyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition duration-150 font-medium ml-1"
              >
                Igneous Property
              </a>
            </p>
          </div>
          
          {/* Logo Placeholder */}
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
