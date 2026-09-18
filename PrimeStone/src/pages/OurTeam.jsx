import Slide1 from "../assets/Slide1.jpg"
import Placeholder from "../assets/placeholder.png"

/**
 * OurTeam page component.
 * Showcases the firm's leadership and legal professionals, 
 * and articulates the core values defined as the "PrimeStone Legacy".
 */
const OurTeam = () => {
  return (
    <section>
        {/* Hero Header Section */}
        <div className="md:relative bg-[#1A242F] h-130 w-full py-10 px-0 text-center md:h-170 md:py-0 flex flex-col justify-center items-center xl:items-start overflow-hidden">
            
            <img 
                src={Slide1} 
                alt="" 
                className='w-[90%] h-70 md:absolute md:inset-0 md:w-full md:h-full md:object-cover md:opacity-25'
            />
            
            <h1 className="md:relative md:z-10 text-center mt-10 text-5xl font-serif font-semibold text-[#F9F7F2]  xl:text-left xl:ml-20">
              <span className="lg:hidden">PRIMESTONE</span>
                <span className="block mt-5 text-[40px] lg:mt-0 lg:text-6xl xl:text-7xl">
                    <span className="lg:hidden">OUR TEAM</span>
                    <br />
                    <span className="hidden lg:block">
                    MEET OUR VISIONARY
                    <br />
                    LEGAL TEAM
                    </span>
                    </span>
                    <p className="text-3xl my-6  xl:w-[73%] hidden md:block">A legacy of expertise and integrity.</p>
            </h1>
        </div>

        {/* Corporate Philosophy / Legacy Statement */}
        <div className="hidden lg:block lg:text-center">
          <h1 className="text-5xl font-bold my-10">The PrimeStone Legacy</h1>
          <p className="text-3xl">The Primestone Legacy is a testament to the belief that profound legal success is rooted in the perfect balance of professional mastery and unwavering character. Guided by our motto, <span className="font-bold">"Excellence in Practice, Integrity in People"</span>, we have built a firm where sophisticated advocacy and ethical conduct are inseparable. This legacy is not merely a reflection of our past achievements, but a daily commitment to provide meticulous, results-driven representation while fostering transparent, trust-based relationships with every client we serve. At Primestone Law Practice, we don't just navigate the law; we uphold a tradition of excellence that ensures our clients' interests are protected by the highest standards of integrity and precision.</p>
        </div>

        {/* Personnel Profiles Grid */}
        <div>
          <h1 className="hidden lg:block text-center text-5xl font-bold mt-20">Our Team</h1>
          <div className="mb-15 lg:grid lg:grid-cols-2 xl:grid-cols-3">
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">John Doe, Ph.D</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Founding/Managing Partner</p>
            </div>
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">Jane Smith, ESQ</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Senior Associate</p>
            </div>
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">David Johnson, ESQ</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Senior Associate</p>
            </div>
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">Michael Brown, ESQ</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Senior Associate</p>
            </div>
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">Robert Davis, ESQ</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Senior Associate</p>
            </div>
            <div className="m-auto my-13 w-[70%] md:w-[40%] lg:w-[80%] xl:w-[90%]">
              <img 
                src={Placeholder} 
                alt=""
                className="h-85 w-full rounded-2xl lg:h-100" />
                <p className="text-xl md:text-[22px] font-semibold my-1">Sarah Wilson</p>
                <p className="text-xl md:text-[22px] font-semibold text-[#C5A059]">Legal Secretary</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default OurTeam