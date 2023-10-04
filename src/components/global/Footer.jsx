import './footer.css'
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons'

const Footer = () => {
    return (
    <>
    <footer>
    <div className="footer-container">
        <div className="footer-copyright">
            <p>Carlos Cordero © 2023 | 🥹</p>
        </div>
        <div className="icons">
            <a href="https://github.com/composercordero" target="_blank"><GithubOutlined /></a>
            <a href="https://www.linkedin.com/in/composercordero/" target="_blank"><LinkedinOutlined /></a>
            <a href="https://www.instagram.com/composercordero/" target="_blank"><InstagramOutlined /></a>
        </div>
    </div>
    </footer>
    </>
    )
}
export default Footer