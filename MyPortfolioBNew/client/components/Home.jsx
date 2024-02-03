import BBG from '../src/assets/Dhruvinpic.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>

          <div id="introContainer">
               <div className="intro-content">
                    <div className="intro-text">

                         <span className="introText">Our <span className="introName">Mission</span> </span>
                         <p className="introPara">My mission as freelance software developers is to deliver innovative solutions tailored to our clients' unique needs.</p>
                         {/* <button>Hire Me</button> */}
                         <button>
                              <a href="about">Hire Me</a>
                         </button>

                    </div>
                    <div className="intro-img-container">
                         <img src={BBG} alt="profile" className="intro-image-container" />
                    </div>
               </div>
          </div>
     </>
}
