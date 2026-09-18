import { useEffect } from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Outlet, useLocation } from "react-router-dom"

/**
 * Layout component that wraps the main content of the application.
 * It provides consistent navigation and footer across different pages
 * and handles scroll restoration on route changes.
 */
const Layout = () => {
  const { pathname } = useLocation()

  /**
   * Scroll to the top of the window whenever the URL path changes.
   * This ensures that navigating to a new page starts the user at the top.
   */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [pathname])

  return (
        <>
            {/* Common Navigation Bar */}
            <NavBar />
            
            {/* Dynamic Page Content */}
            <main>
                <Outlet />
            </main>
            
            {/* Common Footer */}
            <Footer />
        </>
  )
}

export default Layout