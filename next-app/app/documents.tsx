
import Link from 'next/link';

const documents = [
  { name: 'Agreement of Sale', path: '/documents/agreement-of-sale.pdf' },
  { name: 'Conduct Rules', path: '/documents/conduct-rules.pdf' },
  { name: 'Schedule of Finishes', path: '/documents/schedule-of-finishes.pdf' },
  { name: 'Parking Allocation', path: '/documents/parking-allocation.pdf' },
  { name: 'Draft Levies', path: '/documents/draft-levies.pdf' },
  { name: 'Approved Building Plans', path: '/documents/approved-building-plans.pdf' },
  { name: 'Pricelist', path: '/documents/pricelist.pdf' },
];

export default function Documents() {
  return (
    <section id="documents" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Download Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <Link key={doc.name} href={doc.path} passHref>
              <a className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4" download>
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span className="text-lg font-semibold text-gray-800">{doc.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
