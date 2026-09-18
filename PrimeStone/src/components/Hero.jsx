import Slide3 from "../assets/Slide3.jpg"
import { Link } from 'react-router-dom';

/**
 * Hero component for the PrimeStone landing page.
 * Displays the brand name, core message, and a call-to-action button
 * against a background image overlay.
 */
const Hero = () => {
  return (
    <>
        <section> 
            <div className="md:relative bg-[#1A242F] h-130 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">
                
                {/* Background Image Overlay - Reduced opacity on desktop for better text contrast */}
                <img 
                    src={Slide3} 
                    alt="" 
                    className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
                />
                
                {/* Main Branding and Value Proposition */}
                <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2] lg:text-6xl xl:text-7xl xl:text-left xl:ml-20">PRIMESTONE
                    {/* <span className="hidden md:inline">.</span> */}
                    <span className="hidden md:block">
                        LEGAL
                        <br />
                        PRACTITIONERS.
                        </span>
                        <p className="text-3xl my-6  xl:w-[73%] hidden md:block">Excellence in Practice, Integrity in People.</p>
                </h1>
                
                {/* Call to Action Link - Mobile and Tablet visibility only */}
                <Link to="/Contact" className="relative z-10 bg-[#C5A059] text-[#F9F7F2] text-2xl mt-6 rounded-md py-3 px-25 md:text-4xl md:font-semibold md:py-7 md:px-13 xl:hidden">
                    GET IN TOUCH
                </Link>
            </div>
        </section>
    </>
  )
}

export default Hero