import MainBanner from './assets/components/MainBanner'
import About from './assets/components/About'
import Header from './assets/components/Header'
import Client from './assets/components/Client'
import Services from './assets/components/services'
import HowWeWork from './assets/components/HowWeWork'
import Team from './assets/components/Team'
import FAQ from './assets/components/FAQ'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
const heroContent = {
  shortTitle: "our agency",
  heroTitle: "creative design",
  heroDiscription: "Discover innovative strategies for impactful visual communication. We transform ideas into compelling realities, ensuring your brand stands out in a crowded marketplace. Our dedicated team leverages cutting-edge techniques to deliver exceptional results that resonate with your audience.",
  heroImage: "./abstract-1.webp"
}

const aboutContent = {
  title: "Elevating Business Performance Through Innovation",
  image: "/about-portrait-1.webp",
  disc1: "We focus on crafting bespoke strategies that navigate complexity and deliver tangible results for our clients.",
  disc2: "Through a blend of sophisticated analytics and creative problem-solving, we empower organizations to thrive in rapidly evolving markets.",
}

const clientContent = {
  title: "Our Clients Speak Highly",
  disc: "Hear directly from those who have experienced the impact of our partnership and achieved their strategic goals.",
}

const servicesContent = {
  title1: "innovative business",
  title2: "performance solution",
  intro: "We integrate forward-thinking strategies, creative approaches, and state-of-the-art technologies to deliver exceptional customer experiences that drive growth and engage target markets.",
}

const faqContent = {
  title: "Have a question? Check out the FAQ",
  disc: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum."
}

const contactContent = {
  address: "1842 Maple Avenue, Portland, Oregon 97204",
  email1: "info@gmail.com",
  email2: "contact@gmail.com",
  time1: "Sunday-Fri: 9 AM - 6 PM",
  time2: "Saturday: 9 AM - 4 PM",
}

const App = () => {
  return (
    <div>
      <Header />
      <MainBanner shortTitle={heroContent.shortTitle} heroTitle={heroContent.heroTitle} heroDiscription={heroContent.heroDiscription} heroBtnDiscription="explore services" heroImage={heroContent.heroImage} totalCampaign="5" />
      <About image={aboutContent.image} title={aboutContent.title} disc1={aboutContent.disc1} disc2={aboutContent.disc2} expertise="20" />
      <Client title={clientContent.title} disc={clientContent.disc} />
      <Services title1={servicesContent.title1} title2={servicesContent.title2} intro={servicesContent.intro} />
      <HowWeWork />
      <Team />
      <FAQ title={faqContent.title} disc={faqContent.disc} />
      <Contact address={contactContent.address} email1={contactContent.email1} email2={contactContent.email2} time1={contactContent.time1} time2={contactContent.time2} />
      <Footer />
    </div>
  )
}

export default App