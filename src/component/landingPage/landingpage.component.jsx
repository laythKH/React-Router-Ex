import land from '../../assets/landing-page.png'

import './landingPage.style.css'

const LandingPage = () => {
   return (
      <div className="landing-page">
         <div className="container">
            <div className="intro-words">
               <h3 className="title">Welcome, Here</h3>
               <p className="paragraph">Take a tour we have different Types of Products</p>
            </div>
            <img src={land} alt="landing_image" className='landing-image' />
         </div>
      </div>
   )
}

export default LandingPage;