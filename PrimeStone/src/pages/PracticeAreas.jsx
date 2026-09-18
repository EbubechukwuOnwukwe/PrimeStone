import Slide4 from "../assets/Slide4.png"
import { Link } from "react-router-dom"
import { FaCoins, FaMedal } from "react-icons/fa";

/**
 * PracticeAreas page component.
 * Provides a comprehensive overview of all legal sectors the firm operates in,
 * acting as a hub for navigating to specific practice area details.
 */
const PracticeAreas = () => {
  return (
    <section className="mb-9">
       {/* Hero Banner Section */}
       <div className="md:relative bg-[#1A242F] h-160 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">    
            <img 
                src={Slide4} 
                alt="" 
                className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
            />
            
            <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2]  xl:text-left xl:ml-20">
              <span className="lg:hidden">PRIMESTONE</span>
                <span className="block mt-5 text-4xl lg:text-6xl xl:text-7xl">
                    DIVERSE EXPERTISE
                    <br />
                    TAILORED SOLUTIONS.
                    </span>
                    <p className="text-3xl my-6 xl:w-[73%] hidden md:block">Strategic Legal Counsel across dynamic sectors.</p>
            </h1>
        </div>

        {/* Main Content: Sector Overview Title */}
        <div>
          <h1 className="text-center text-4xl font-bold my-10 lg:text-5xl">
            Practice Areas
            <br className="md:hidden" />
            {" "}Overview</h1>

          {/* Grid Layout for individual Practice Area Cards */}
          <div className="w-[96%] m-auto lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-3">
            <div className="flex border border-[#C5A059] font-bold rounded-2xl p-4 my-3 lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-19 mt-0.5 text-[#C5A059]">
              <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
          </svg>
          <p className="text-[28px] ml-4 lg:text-4xl lg:ml-1">Corporate &
          <br className="hidden lg:block"/>
          {" "}Commercial</p>
          <p className="hidden lg:block lg:text-3xl lg:my-2.5 lg:ml-1 font-semibold">Strategic legal foundations and regulatory guidance to power your business growth.</p>
          <Link to="/CorporateCommercial" className="text-[28px] mt-3 ml-auto flex text-[#C5A059] hover:text-[#9D7F45] lg:text-4xl lg:ml-1">
              View
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-7 mt-2.5 hidden lg:block">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              </Link>
            </div>
            <div className="flex border border-[#C5A059] font-bold rounded-2xl p-4 my-3 lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-19 mt-0.5 text-[#C5A059]">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z" clipRule="evenodd" />
            </svg>
          <p className="text-[28px] ml-4 lg:text-4xl lg:ml-1">Litigation & Dispute Resolution</p>
          <p className="hidden lg:block lg:text-3xl lg:my-2.5 lg:ml-1 font-semibold">Rigorous advocacy and strategic resolution to protect your interests in every forum.</p>
          <Link to="/LitigationDisputeResolution" className="text-[28px] mt-3 ml-auto flex text-[#C5A059] hover:text-[#9D7F45] lg:text-4xl lg:ml-1">
              View
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-7 mt-2.5 hidden lg:block">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              </Link>
            </div>
            <div className="flex border border-[#C5A059] font-bold rounded-2xl p-4 my-3 lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-19 mt-0.5 text-[#C5A059]">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
          <p className="text-[28px] ml-4 lg:text-4xl lg:ml-1">Real Estate & 
            <br className="hidden lg:block"/>
            {" "}Construction</p>
            <p className="hidden lg:block lg:text-3xl lg:my-2.5 lg:ml-1 font-semibold">Securing high-value assets and infrastructure through expert property law and finance.</p>
          <Link to="/RealEstateConstruction" className="text-[28px] mt-3 ml-auto flex text-[#C5A059] hover:text-[#9D7F45] lg:text-4xl lg:ml-1">
              View
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-7 mt-2.5 hidden lg:block">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              </Link>
            </div>
            <div className="flex border border-[#C5A059] font-bold rounded-2xl p-4 my-3 lg:block">
            <FaCoins className="text-7xl mt-2 lg:ml-1 text-[#C5A059]"/>
          <p className="text-[28px] ml-4 lg:text-4xl lg:ml-1">Corporate Finance & Banking</p>
          <p className="hidden lg:block lg:text-3xl lg:my-2.5 lg:ml-1 font-semibold">Sophisticated legal structuring for capital markets, lending, and fintech innovation.</p>
          <Link to="/CorporateFinanceBanking" className="text-[28px] mt-3 ml-auto flex text-[#C5A059] hover:text-[#9D7F45] lg:text-4xl lg:ml-1">
              View
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-7 mt-2.5 hidden lg:block">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              </Link>
            </div>
            <div className="flex border border-[#C5A059] font-bold rounded-2xl p-4 my-3 lg:block">
            <FaMedal className="text-6xl mt-3.5 text-[#C5A059] lg:ml-1 lg:text-[65px]"/>
          <p className="text-[28px] ml-4 lg:text-4xl lg:ml-1">Entertainment & 
            <br className="hidden lg:block"/>
            {" "}Sports</p>
            <p className="hidden lg:block lg:text-3xl lg:my-2.5 lg:ml-1 font-semibold">Protecting creative assets and athletic talent through robust IP and brand management.</p>
          <Link to="/EntertainmentSports" className="text-[28px] mt-3 ml-auto flex text-[#C5A059] hover:text-[#9D7F45] lg:text-4xl lg:ml-1">
              View
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-7 mt-2.5 hidden lg:block">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
              </svg>
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default PracticeAreas