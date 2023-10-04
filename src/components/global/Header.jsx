import { Link, animateScroll as scroll } from "react-scroll"
import logo from '../../assets/goldenBlob.svg'

const Header = () => {
  return (
    <>
        <div className="header-logo">
            <img src={logo} alt="CARLOS" />
        </div>
        <div className="header-menu">
            <ul>
                <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to='bio' spy={true} smooth={true} offset={50} duration={500}>Bio</Link></li>
                <li><Link to='projects' spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                <li><Link to='dance' spy={true} smooth={true} offset={50} duration={500}>Dance</Link></li>
                <li><a href='https://docs.google.com/document/d/1peIeA7j-sQuOlP-WIZDSgIImkbW0KWiZl3LBgi2S9CM/edit?usp=sharing' target='_blank'></a>Resume</li>
            </ul>
            <div className="mode">
                <button>Change Mode</button>
            </div>
        </div>
    </>
  )
}
export default Header