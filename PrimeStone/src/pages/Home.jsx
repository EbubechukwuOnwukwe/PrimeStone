import Hero from "../components/Hero"
import CorePracticeAreas from "../components/CorePracticeAreas"

/**
 * Home page component.
 * Serves as the landing page, aggregating the Hero and CorePracticeAreas components.
 */
const Home = () => {
  return (
    <>    
    <Hero />
    <CorePracticeAreas />
    </>
  )
}

export default Home