import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';

/**
 * Navigation menu items configuration matching paths in App.jsx
 */
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Firm', path: '/Firm' },
  { name: 'Our Team', path: '/OurTeam' },
  { name: 'Practice Areas', path: '/PracticeAreas' },
  { name: 'Contact', path: '/Contact' },
];

/**
 * Footer component for the PrimeStone application.
 * Provides navigation links, office locations with map integration, and social media icons.
 * Features a responsive layout that shifts from centered mobile stacks to a distributed desktop view.
 */
const Footer = () => {
  return (
    <section className='bg-[#2C2C2C] text-[#F9F7F2]'>
        <div className='pt-12 px-4'>
            <div className='lg:flex lg:justify-between lg:flex-nowrap lg:px-15 lg:text-2xl xl:text-[26px] xl:justify-center xl:gap-x-80'>
                {/* Navigation Links Column */}
                <ul>
                    <h1 className='text-xl font-semibold lg:text-3xl'>Quick Links</h1>
                    {navLinks.map((link) => (
                        <li key={link.name} className='my-3'>
                            <Link to={link.path} className="hover:text-[#C5A059] transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact Information Column - Hidden on mobile, shown on large screens */}
                <ul className='hidden lg:block'>
                <h1 className='text-xl font-semibold lg:text-3xl'>Contact</h1>
                    
                    {/* Owerri Office Location */}
                    <a href="" target="_blank" rel="noreferrer"> {/*add google maps url*/}
                        <li className='my-3 gap-3 flex hover:text-[#C5A059] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="size-8 mt-1 text-[#C5A059]">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                            456 Oak Avenue, Apt 2B
                            <br />
                            Sunnyvale, CA 94085
                            <br />
                            United States
                        </li>
                    </a>

                    {/* Abuja Office Location */}
                    <a href="" target="_blank" rel="noreferrer">{/*add google maps url*/}
                    <li className='my-3 gap-3 flex hover:text-[#C5A059] transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="size-8 mt-1 text-[#C5A059]">
                                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                           123 Main Street, Suite 500
                           <br />
                           New York, NY 10001
                           <br />
                           United States
                        </li>
                    </a>

                    {/* Desktop Social Media Icons */}
                    <div className='flex gap-3 mt-3.5 ml-10'>
                        <a href="tel:" target="_blank" rel="noreferrer" className='text-[33px] hover:text-[#C5A059]'><FaPhoneAlt /></a>{/*add contact phone number with nation code(+234)*/}
                        <a href="" target="_blank" rel="noreferrer" className='text-4xl hover:text-[#C5A059]'><FaInstagram /></a>{/*add instagram url*/}
                        <a href="" target="_blank" rel="noreferrer" className='text-4xl hover:text-[#C5A059]'><FaLinkedin /></a>{/*add linkedin url*/}
                    </div>
                </ul>
            </div>
        </div>

        {/* Mobile-only "Get In Touch" section */}
        <div className='text-center mt-8 lg:hidden'>
            <h1 className='text-xl font-semibold text-[#C5A059]'>GET IN TOUCH</h1>
            <div className='flex gap-3 items-center justify-center mt-2'>
            <a href="tel:" target="_blank" rel="noreferrer" className='text-2xl'><FaPhoneAlt /></a>{/*add contact phone number with nation code(+234)*/}
            <a href="" target="_blank" rel="noreferrer" className='text-2xl'><FaInstagram /></a>{/*add instagram url*/}
            <a href="" target="_blank" rel="noreferrer" className='text-2xl'><FaLinkedin /></a>{/*add linkedin url*/}
            </div>
        </div>

        {/* Footer Bottom Bar */}
        <hr className='my-5 border-t w-[97%] m-auto'/>
            <p className='text-center lg:text-xl'>&copy;Copyright 2026, PRIMESTONE Law Practice.
                <br className='lg:hidden'/>
                {" "}All rights reserved.</p>
    </section>
  )
}

export default Footer