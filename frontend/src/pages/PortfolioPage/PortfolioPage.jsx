import Banner from "../../section/Banner/Banner"
import Contact from "../../section/Contact/Contact"
import Features from "../../section/Features/Features"
import Footer from "../../section/Footer/Footer"
import FooterBottom from "../../section/FooterBottom/FooterBottom"
import Navbar from "../../section/Navbar/Navbar"
import Projects from "../../section/Projects/Projects"
import Resume from "../../section/Resume/Resume"
import Testimonials from "../../section/Testimonials/Testimonials"

const PortfolioPage = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4'>
        <Navbar />
        <div className='max-w-screen-xl mx-auto'>
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Testimonials />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
  )
}

export default PortfolioPage