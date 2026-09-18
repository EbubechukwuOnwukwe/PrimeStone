import Slide2 from "../assets/Slide2.jpg"

/**
 * Firm page component.
 * Details the history, mission, and vision of PrimeStone Law Practice.
 */
const Firm = () => {
     return (
        <>
            {/* Hero Section */}
            <section className="mb-9"> 
                <div className="md:relative bg-[#1A242F] h-160 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">
                    
                    <img 
                        src={Slide2} 
                        alt="" 
                        className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
                    />
                    
                    <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2]  xl:text-left xl:ml-20">
                      <span className="lg:hidden">PRIMESTONE</span>
                        <span className="block mt-5 text-4xl lg:text-6xl xl:text-7xl">
                            OUR FIRM:
                            <br />
                            EXCELLENCE IN PRACTICE,
                            <br />
                            INTEGRITY IN PEOPLE.
                            </span>
                            <p className="text-3xl my-6  xl:w-[73%] hidden md:block">Rooted in experience, committed to your future.</p>
                    </h1>
                </div>

                {/* Our Story / Background */}
                <div className="hidden lg:block">
                  <h1 className="text-center text-5xl font-bold my-10">Our Story</h1>
                  <p className="text-left text-3xl mx-12 font-semibold">PrimeStone Law Practice is dedicated to providing unparalleled legal services to it's diverse clientele spanning across the country and globe.
                    <br />
                    The firm is dedicated to maintaining the highest level of ethical conduct, honesty, and trustworthiness in all aspects of it's interactions with it's stakeholders.
                    <br />
                    Having placed top priority on building and maintaining relationships, PrimeStone Law Practice adopts a client-focused approach where the well-being and interests of individuals are a top priority.
                  </p>
                </div>
                
                {/* Mission and Vision Statements */}
                <div className='mt-13 xl:flex xl:items-stretch'>
                  <div className='flex-1 border-[#C5A059] border mx-5 rounded-xl px-3.25 py-9 my-5'>
                    <div className='gap-2 xl:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="size-8 text-[#C5A059] mb-2 md:mb-5 md:size-12 xl:size-13">
                      <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                      <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>

                  <h1 className='text-[22px] font-semibold mb-2 md:text-3xl lg:text-4xl xl:my-5'>Mission Statement</h1>
                    </div>
                    <p className='md:text-xl lg:text-2xl'>PrimeStone's mission is to provide diverse, yet premium legal services with regard to the highest standards of professional integrity and esteem for our clients.</p>
                  </div>

                  <div className='flex-1 border-[#C5A059] border mx-5 rounded-xl px-3.25 py-9 my-5 bg-[#2C2C2C] text-[#F9F7F2]'>
                    <div className='gap-2 xl:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="size-8 text-[#C5A059] mb-2 md:mb-5 md:size-12 xl:size-13">
                      <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                      <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
                    </svg>


                  <h1 className='text-[22px] font-semibold mb-2 md:text-3xl lg:text-4xl xl:my-5'>Vision Statement</h1>
                    </div>
                    <p className='md:text-xl lg:text-2xl'>To acquire national and international relevance and recognition for exceptional and innovative legal solutions and client service.</p>
                  </div>
                </div>
            </section>
        </>
      )
}

export default Firm