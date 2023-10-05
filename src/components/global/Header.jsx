import { Link, animateScroll as scroll } from "react-scroll"
import './header.css'


const Header = () => {
    return (
    <>
        <header>
        <div className="header-container">
        <div className="header-logo">
            <h2>Carlos</h2>
        </div>
        <nav className="header-menu">
            <ul>
                <li className="nav-item"><Link to='hero' offset={-100} duration={500} activeClass="active" >Home</Link></li>
                <li className="nav-item"><Link to='bio' spy={true} smooth={true} offset={-100} duration={500} activeClass="active">Bio</Link></li>
                <li className="nav-item"><Link to='project' spy={true} smooth={true} offset={-280} duration={500} activeClass="active">Projects</Link></li>
                <li className="nav-item"><Link to='spotify' spy={true} smooth={true} offset={-100} duration={500} activeClass="active">Dance</Link></li>
                <li><a href='https://docs.google.com/document/d/1peIeA7j-sQuOlP-WIZDSgIImkbW0KWiZl3LBgi2S9CM/edit?usp=sharing' target='_blank'>Resume</a></li>
            </ul>
            <div className="mode">
                <button>Change Mode</button>
            </div>
        </nav>
        </div>
        </header>
    </>
    )
}
export default Header