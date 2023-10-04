import './Footer.css'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
    <>
    <div className="footer">
        <div className="footer-copyright">
            <p>Hi, there! I am Carlos Cordero and I created this page 🥹</p>
        </div>
        <div className="icons">
            <a href="https://github.com/composercordero" target="_blank"><GithubOutlined /></a>
            <a href="https://www.linkedin.com/in/composercordero/" target="_blank"><LinkedinOutlined /></a>
            <a href="https://www.instagram.com/composercordero/" target="_blank"><InstagramOutlined /></a>
        </div>
    </div>
    </>
    )
}
export default Footer