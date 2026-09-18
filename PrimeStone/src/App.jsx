import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Firm from "./pages/Firm"
import OurTeam from "./pages/OurTeam"
import PracticeAreas from "./pages/PracticeAreas"
import Contact from "./pages/Contact"
import Layout from './Layout'
import CorporateCommercial from "./pages/CorporateCommercial"
import CorporateFinanceBanking from "./pages/CorporateFinanceBanking"
import RealEstateConstruction from "./pages/RealEstateConstruction"
import LitigationDisputeResolution from "./pages/LitigationDisputeResolution"
import EntertainmentSports from "./pages/EntertainmentSports"

/**
 * Root Application component.
 * Sets up the BrowserRouter and defines the application's route structure
 * using a common Layout wrapper.
 */
function App() {
  return(
    <Router>
      <Routes>
        {/* Main layout wrapper containing NavBar and Footer */}
        <Route element={<Layout />}>
          {/* Public routes for primary pages */}
          <Route path="/" element={<Home />} />
          <Route path="/Firm" element={<Firm />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/PracticeAreas" element={<PracticeAreas />} />
          <Route path="/Contact" element={<Contact />} />
          
          {/* Detailed Practice Area sub-pages */}
          <Route path="/CorporateCommercial" element={<CorporateCommercial />} />
          <Route path="/CorporateFinanceBanking" element={<CorporateFinanceBanking />} />
          <Route path="/RealEstateConstruction" element={<RealEstateConstruction />} />
          <Route path="/LitigationDisputeResolution" element={<LitigationDisputeResolution />} />
          <Route path="/EntertainmentSports" element={<EntertainmentSports />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
