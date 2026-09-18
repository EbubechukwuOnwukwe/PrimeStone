import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/placeholder.png"

/**
 * Navigation menu items configuration matching paths in App.jsx
 */
const navLinks = [
  { name: 'Firm', path: '/Firm' },
  { name: 'Our Team', path: '/OurTeam' },
  { name: 'Practice Areas', path: '/PracticeAreas' },
  { name: 'Contact', path: '/Contact' },
];

/**
 * NavBar component for the PrimeStone application.
 * Features a responsive design with a desktop horizontal menu and a mobile overlay menu.
 */
const NavBar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  // Reference to the nav element for outside click detection
  const navRef = useRef(null);

  /**
   * Side effect to lock scrolling when the mobile menu is open.
   * Prevents background scrolling while the overlay is active.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup to ensure scrolling is restored if component unmounts
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  /**
   * Side effect to close the mobile menu when clicking outside the navigation area.
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup listener on unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-[#F9F7F2] md:bg-[#1A242F] lg:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex justify-between h-14 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="shrink-0 flex items-center">
            <img 
                src={Logo} 
                alt="PrimeStone Logo" 
                className='w-12 h-12 md:w-16 md:h-14 lg:h-16 lg:w-18 xl:w-20 xl:h-20'
                />
            <span className="text-xl font-bold text-[#1A242F] md:text-[#F9F7F2] md:hover:text-[#8E7341] md:text-xl lg:text-2xl xl:text-3xl">PRIMESTONE</span>
          </Link>

          {/* Desktop Menu - Hidden on small screens */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="text-[#1A242F] md:text-[#F9F7F2] md:hover:text-[#8E7341] px-3 py-2 rounded-md text-[16px] font-semibold transition-colors lg:text-2xl xl:text-3xl">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Hidden on medium and larger screens */}
          <div className="md:hidden flex items-center z-60">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A242F] hover:text-[#8E7341] focus:outline-none" aria-label="Toggle menu">
              {isOpen ? (
                // Close Icon (X)
                <svg className="h-12 w-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.0} 
                  stroke="#1A242F" 
                  className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content - Full-screen overlay transition */}
      <div 
        className={`fixed inset-0 z-50 md:hidden bg-[#F9F7F2] transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar