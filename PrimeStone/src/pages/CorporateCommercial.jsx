import CorporateCommercials from "../assets/CorporateCommercial.jpg"
import { FaRegFileAlt, FaHandshake, FaUsers, FaSignature, FaBalanceScale, FaChevronDown, FaCoins, FaMedal } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

/**
 * CorporateCommercial page component.
 * Details services for company compliance, M&A, and commercial contracts.
 */
const CorporateCommercial = () => {

  const [isSending, setIsSending] = useState(false);
  // State to manage the inquiry selection dropdown logic
  const [inquiryType, setInquiryType] = useState("");


 
    // 1. Fetch the CSRF token when the page loads
    useEffect(() => {
      const initCSRF = async () => {
        try {
          await fetch(`${import.meta.env.VITE_API_URL}/api/set-csrf/`, {
            credentials: 'include', // Add this
        });
        } catch (err) {
          console.error("CSRF initialization failed", err);
        }
      };
      initCSRF();
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSending(true); // Disable button
      
      // 1. Extract data from the form
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const csrftoken = Cookies.get('csrftoken');
    
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          },
          body: JSON.stringify(data),
        });
    
        // Parse response body text safely to prevent JSON crashes
        const responseText = await response.text();
        let responseData = {};
        if (responseText) {
          responseData = JSON.parse(responseText);
        }
    
        if (response.ok) {
          alert("Success! Inquiry sent to Primestone Law Practice.");
          if (e.target && typeof e.target.reset === 'function') {
            e.target.reset();
          }
        } else {
          console.error("Django Error Payload:", responseData);
        }
      } catch (error) {
        console.error("Network / Execution Error:", error);
        alert("Network error. Could not reach the server. Please try again or contact PrimeStone LP.");
      }
    
      setIsSending(false); // Re-enable button
    };
  
  
  return (
    <>
      {/* Hero Header */}
      <section>
        <div className="md:relative bg-[#1A242F] h-130 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">    
                <img 
                    src={CorporateCommercials} 
                    alt="" 
                    className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
                />
                
                <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2]  xl:text-left xl:ml-20">
                  <span className="lg:text-6xl xl:text-7xl">CORPORATE & <br className="hidden xl:block"/> COMMERCIAL</span>
                  <p className="text-3xl my-6 xl:w-[73%] hidden md:block md:px-4 xl:px-0 xl:ml-1">Strategic legal foundations and regulatory guidance to power your business growth.</p>
                </h1>
              </div>
      </section>

      {/* Core Expertise and Consultation Form */}
      <section className="my-7 xl:flex xl:gap-5 xl:my-10 xl:items-stretch xl:w-[98%] xl:m-auto">
        <div className="xl:flex-1">
          <h1 className="text-center text-[34.5px] font-bold lg:text-[52px] xl:text-left xl:ml-4">OUR CORPORATE <br className="hidden xl:block" />& COMMERCIAL EXPERTISE</h1>
          <div className="w-[95%] m-auto mt-8 lg:grid lg:grid-cols-2 lg:gap-5 xl:block">
            <div className="my-6 flex font-semibold">
              <FaRegFileAlt className="text-[75px] text-[#C5A059] bg-[#1A242F] p-4 rounded-2xl lg:text-8xl"/>
              <p className="text-3xl mx-2 lg:text-4xl lg:mt-1 xl:mt-2.25">Company Secretariat <br/>& Compliance</p>
            </div>
            <div className="my-6 flex font-semibold">
              <FaHandshake className="text-[75px] text-[#C5A059] bg-[#1A242F] p-4 rounded-2xl lg:text-8xl"/>
              <p className="text-3xl mx-2 lg:text-4xl lg:mt-1 xl:mt-2.25">Mergers & <br />Acquisitions</p>
            </div>
            <div className="my-6 flex font-semibold">
              <FaUsers className="text-[75px] text-[#C5A059] bg-[#1A242F] p-4 rounded-2xl lg:text-8xl"/>
              <p className="text-3xl mx-2 lg:text-4xl lg:mt-1 xl:mt-2.25">Joint Ventures <br/>& Partnerships</p>
            </div>
            <div className="my-6 flex font-semibold">
              <FaSignature className="text-[75px] text-[#C5A059] bg-[#1A242F] p-4 rounded-2xl lg:text-8xl"/>
              <p className="text-3xl mx-2 lg:text-4xl lg:mt-1 xl:mt-2.25">Commercial <br />Contracts</p>
            </div>
            <div className="my-6 flex font-semibold">
              <FaBalanceScale className="text-[75px] text-[#C5A059] bg-[#1A242F] p-4 rounded-2xl lg:text-8xl"/>
              <p className="text-3xl mx-2 lg:text-4xl lg:mt-1 xl:mt-2.25">Insolvency & <br className="hidden lg:block"/>Restructuring</p>
            </div>
          </div>
        </div>
          <form 
            action="" 
            onSubmit={handleSubmit}
            method="POST" 
            className={`w-[98%] m-auto my-5 py-5 px-2 xl:flex-1 xl:border-5 xl:border-[#C5A059] xl:rounded-2xl xl:p-10 xl:mx-5 ${inquiryType === "Other" ? "xl:h-250" : "xl:h-222"}`}
          >
            <input type="text" name="name" placeholder="Full Name" id="name" maxLength={256} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />
            <div className="lg:flex lg:gap-5">
            <input type="email" name="email" placeholder="Email" id="email" maxLength={256} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />
            <input type="text" inputMode="numeric" pattern="[0-9]*" name="number" placeholder="Phone" id="number" maxLength={11} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />
            </div>

            <div className="relative w-full my-2">
              <select 
                name="service" 
                id="service" 
                required 
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="appearance-none p-4 pr-16 border-5 text-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full lg:text-3xl xl:h-25 xl:text-4xl cursor-pointer"
              >
                <option value="" disabled>Inquiry Type</option>
                <option value="Company Secretariat & Compliance">Company Secretariat & Compliance</option>
                <option value="Mergers & Acquisitions">Mergers & Acquisitions</option>
                <option value="Joint Ventures & Partnerships">Joint Ventures & Partnerships</option>
                <option value="Commercial Contracts">Commercial Contracts</option>
                <option value="Insolvency & Restructuring">Insolvency & Restructuring</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-[#C5A059]">
                <FaChevronDown className="text-3xl lg:text-4xl xl:text-5xl" />
              </div>
            </div>

            {inquiryType === "Other" && (
              <input 
                type="text" 
                name="other_service" 
                placeholder="Please specify" 
                required 
                className="p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" 
              />
            )}

            {/* HoneyPot against bots */}
            <div className="hidden" aria-hidden='true'>
              <input 
                type="text" 
                name="website_source"
                tabIndex='-1'
                autoComplete="off" 
              />
            </div>

            <textarea name="message" placeholder="Message" id="message" required className=" h-40 p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#C5A059] w-full my-2 lg:text-3xl lg:h-60 xl:text-4xl xl:h-83"></textarea>
            <button type="submit" disabled={isSending} className="w-full text-center text-2xl bg-[#1A242F] text-[#F9F7F2] p-4 rounded-2xl font-semibold hover:bg-[#C5A059] lg:text-4xl lg:p-6 xl:text-[42px]">{isSending ? "Sending..." : "Request Consultation"}</button>
          </form>
      </section>

      {/* Footer Area Section */}
      <section className="p-5 bg-[#C5A059] mb-0">
        <h1 className="text-center text-4xl font-semibold text-[#F9F7F2] mt-5 mb-8 lg:text-5xl xl:text-6xl">EXPLORE OTHER PRACTICE AREAS</h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          <div className="bg-[#F9F7F2] p-7 text-3xl text-center rounded-2xl font-bold my-5">
          <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-15 text-[#C5A059] m-auto">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z" clipRule="evenodd" />
              </svg>
            <p>Litigation & <br className="hidden lg:block"/>Dispute Resolution</p>
            <Link to="/LitigationDisputeResolution" className="text-[28px] mt-3 justify-center items-center flex text-[#C5A059] hover:text-[#9D7F45]">
                View
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="size-6 mt-2.5">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </Link>
          </div>
          <div className="bg-[#F9F7F2] p-7 text-3xl text-center rounded-2xl font-bold my-5">
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-15 text-[#C5A059] m-auto">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <p>Real Estate <br className="hidden xl:block"/>& <br className="hidden lg:block"/>Construction</p>
            <Link to="/RealEstateConstruction" className="text-[28px] mt-3 justify-center items-center flex text-[#C5A059] hover:text-[#9D7F45]">
                View
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="size-6 mt-2.5">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </Link>
          </div>
          <div className="bg-[#F9F7F2] p-7 text-3xl text-center rounded-2xl font-bold my-5">
          <FaCoins className="text-6xl m-auto text-[#C5A059]"/>
            <p>Corporate <br className="hidden lg:block"/>Finance & Banking</p>
            <Link to="/CorporateFinanceBanking" className="text-[28px] mt-3 justify-center items-center flex text-[#C5A059] hover:text-[#9D7F45]">
                View
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="size-6 mt-2.5">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </Link>
          </div>
          <div className="bg-[#F9F7F2] p-7 text-3xl text-center rounded-2xl font-bold my-5">
          <FaMedal className="text-6xl m-auto text-[#C5A059]"/>
            <p>Entertainment <br className="hidden xl:block"/>& <br className="hidden lg:block"/>Sports</p>
            <Link to="/EntertainmentSports" className="text-[28px] mt-3 justify-center items-center flex text-[#C5A059] hover:text-[#9D7F45]">
                View
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="size-6 mt-2.5">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CorporateCommercial