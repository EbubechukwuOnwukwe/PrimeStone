import { Link } from 'react-router-dom';

/**
 * CorePracticeAreas component for the PrimeStone website.
 * Showcases the firm's primary areas of legal expertise using a card-based layout
 * that adjusts from a vertical stack on mobile to a horizontal flex row on larger screens.
 */
const CorePracticeAreas = () => {
  return (
    <section className='mb-9'>
        {/* Section Header */}
        <h1 className='text-4xl text-center font-bold my-10 md:text-[40px]'>Core Practice Areas</h1>
        
        {/* Practice Area Cards Container */}
        <div className='xl:flex xl:items-stretch'>
          <div className='flex-1 border-[#C5A059] border mx-5 rounded-xl px-3.25 py-9 my-5'>
            <div className='flex gap-2 xl:block'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-8 text-[#C5A059] md:size-10 xl:size-13">
              <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
          </svg>
          <h1 className='text-[22px] font-semibold mb-2 md:text-3xl xl:my-5'>Corporate & Commercial</h1>
            </div>
            <p className='md:text-xl'>Strategic legal foundations and regulatory guidance to power your business growth.</p>
          </div>

          <div className='flex-1 mx-5 rounded-xl px-3.25 py-9 my-5 bg-[#E5E7EB]'>
            <div className='flex gap-2 xl:block'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-8 text-[#C5A059] md:size-10 xl:size-13">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z" clipRule="evenodd" />
            </svg>

          <h1 className='text-[22px] font-semibold mb-2 md:text-3xl xl:my-5'>Litigation & Dispute Resolution</h1>
            </div>
            <p className='md:text-xl'>Rigorous advocacy and strategic resolution to protect your interests in every forum.</p>
          </div>

          <div className='flex-1 border-[#C5A059] border mx-5 rounded-xl px-3.25 py-9 my-5 xl:border-0 xl:bg-[#2C2C2C] xl:text-[#F9F7F2]'>
            <div className='flex gap-2 xl:block'>
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-8 text-[#C5A059] md:size-10 xl:size-13">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>

          <h1 className='text-[22px] font-semibold mb-2 md:text-3xl xl:my-5'>Real Estate & Construction</h1>
            </div>
            <p className='md:text-xl'>Securing high-value assets and infrastructure through expert property law and finance.</p>
          </div>
        </div>

        {/* Mobile View All CTA */}
        <Link 
          to="/PracticeAreas"
          className='text-center block text-xl font-bold md:hidden'>
            VIEW ALL
          </Link>
          
          {/* Decorative Divider for Tablet and Desktop */}
          <div className='hidden md:flex md:my-13'>
          <hr className='w-[90%] ml-5 text-[#E5E7EB] border-t-2' />
          <hr className='w-[10%] mx-3 text-[#C5A059] border-t-2' />
          <hr className='w-[90%] mr-5 text-[#E5E7EB] border-t-2' />
          </div>

          {/* "Why PrimeStone" Branding Section */}
          <div className='hidden md:block md:text-center md:mb-15'>
            <h1 className='text-4xl mb-3 font-bold'>Why PrimeStone</h1>
            <p className='text-2xl mx-18 xl:mx-25'>Our Team consistently delivers top-tier legal services, upholds the highest ethical standards, and works together to tackle complex legal challenges. These values drive our success and guide every case we handle.</p>
          <hr className='my-7 w-[7%] m-auto  text-[#C5A059] border-t-2' />
          </div>

    </section>
  )
}

export default CorePracticeAreas