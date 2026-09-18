import Slide5 from "../assets/Slide5.jpg"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

/**
 * Contact page component.
 * Displays office locations (Imo & Abuja) and provides a general inquiry form.
 */
const Contact = () => {
  const [isSending, setIsSending] = useState(false);


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
    <section className="mb-9">
      {/* Hero Header */}
      <div className="md:relative bg-[#1A242F] h-130 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">    
        <img 
            src={Slide5} 
            alt="" 
            className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
        />
        
        <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2]  xl:text-left xl:ml-20">
          <span className="lg:hidden">PRIMESTONE</span>
            <span className="block mt-5 text-4xl lg:text-6xl xl:text-7xl">
                GET IN TOUCH
                </span>
                <p className="text-3xl my-6 xl:w-[73%] hidden md:block xl:ml-1">Reach out to our experts for strategic counsel.</p>
        </h1>
      </div>

      <div>
        <div className="xl:flex xl:gap-5 xl:my-10 xl:items-center">
          
          {/* Desktop Contact Details */}
          <div className="hidden xl:block xl:flex-1 xl:p-12">
          <h1 className="text-center text-4xl font-bold mt-13 lg:text-5xl xl:text-[65px] xl:font-semibold xl:mt-3 xl:text-left">Contact Us</h1>
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-23 rounded-2xl my-10 bg-[#1A242F] text-[#C5A059] p-5">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
          <div className="my-10 text-4xl ml-4 font-bold">
            <p className="font-bold text-[45px]">Phone</p>
            <a href="tel:">+234 800 000 0000</a>{/*add contact phone number with nation code(+234)*/}
          </div>
          </div>
          <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-23 rounded-2xl my-10 bg-[#1A242F] text-[#C5A059] p-5">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>

          <div className="my-10 text-4xl ml-4 font-bold">
            <p className="font-bold text-[45px]">Email</p>
            <a href="mailto:">placeholder@gmail.com</a>{/*add contact email*/}
          </div>
          </div>
          <div className="flex">
            <a href="" target="_blank" rel="noreferrer">{/*add google maps url*/}
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="size-23 rounded-2xl my-10 bg-[#1A242F] text-[#C5A059] p-5">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          </a>
          <a href="" target="_blank" rel="noreferrer">{/*add google maps url*/}
          <div className="my-10 text-4xl ml-4 font-bold">
            <p className="font-bold text-[45px]">Imo State</p>
            <p>19 Mbano Street, 
              <br /> 
              Aladinma, Owerri.</p>
          </div>
          </a>
          </div>
          <div className="flex">
            <a href="" target="_blank" rel="noreferrer">{/*add google maps url*/}
              <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="size-23 rounded-2xl my-10 bg-[#1A242F] text-[#C5A059] p-5">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="" target="_blank" rel="noreferrer">{/*add google maps url*/}
              <div className="my-10 text-4xl ml-4 font-bold">
                <p className="font-bold text-[45px]">FCT Abuja</p>
                <p>Emdic Plaza, 3rd/4th
                  <br /> 
                  Avenue, Opposite
                  <br /> 
                  Chambian Plaza, Gwarinpa.</p>
              </div>
            </a>
          </div>
          </div>

          {/* General Inquiry Form */}
          <form action="" onSubmit={handleSubmit} method="POST" className="w-[98%] m-auto p-5 xl:flex-1 xl:border-5 xl:border-[#E5E7EB] xl:rounded-2xl xl:p-10 xl:mx-5 xl:h-222">
            <div className="lg:flex lg:gap-5 xl:block">
            <input type="text" name="name" placeholder="Full Name" id="name" maxLength={256} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#E5E7EB] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />
            <input type="email" name="email" placeholder="Email" id="email" maxLength={256} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#E5E7EB] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />
            </div>
            <input type="text" inputMode="numeric" pattern="[0-9]*" name="number" placeholder="Phone" id="number" maxLength={11} required className=" p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#E5E7EB] w-full my-2 lg:text-3xl xl:h-25 xl:text-4xl" />

            {/* HoneyPot against bots */}
            <div className="hidden" aria-hidden='true'>
              <input 
                type="text" 
                name="website_source"
                tabIndex='-1'
                autoComplete="off" 
              />
            </div>
            
            <textarea name="message" placeholder="Message" id="message" required className=" h-40 p-4 border-5 placeholder-[#1A242F] font-semibold text-2xl rounded-2xl border-[#E5E7EB] w-full my-2 lg:text-3xl lg:h-60 xl:text-4xl xl:h-83"></textarea>
            <button type="submit" disabled={isSending} className="w-full text-center text-2xl bg-[#1A242F] text-[#F9F7F2] p-4 rounded-2xl font-semibold hover:bg-[#C5A059] lg:text-4xl lg:p-6 xl:text-[42px]">{isSending ? "Sending..." : "Send Inquiry"}</button>
          </form>
        </div>

        {/* Mobile/Tablet Office Locations */}
        <div className="mt-10 lg:mt-20 xl:hidden">
          <h1 className="text-center text-4xl font-bold lg:text-5xl">Locate Us</h1>
          <div className="p-4 border border-[#C5A059] rounded-2xl w-[90%] m-auto mt-9 text-center lg:py-8">
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-15 m-auto mt-1 text-[#C5A059] lg:size-20">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <p className="text-3xl font-bold my-2.5 lg:text-5xl">PrimeStone, Owerri</p>
          <a href="" target="_blank" rel="noreferrer" className="text-[#C5A059] text-[26px] font-semibold lg:text-4xl">Open in Maps</a>{/*add google maps url*/}
          </div>
          <div className="p-4 border border-[#C5A059] rounded-2xl w-[90%] m-auto mt-9 text-center lg:py-8">
          <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="size-15 m-auto mt-1 text-[#C5A059] lg:size-20">
              <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
          <p className="text-3xl font-bold my-2.5 lg:text-5xl">PrimeStone, Abuja</p>
          <a href="" target="_blank" rel="noreferrer" className="text-[#C5A059] text-[26px] font-semibold lg:text-4xl">Open in Maps</a>{/*add google maps url*/}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Contact