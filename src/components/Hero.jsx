import heroLogo from '../assets/goldenBlob.svg'

const Hero = () => {
  return (
    <>
    <div className="hero-container">
      <div className="hero-logo">
        <img src={heroLogo} alt="Hero Logo" />
      </div>
      <div className="hero-title">
        <h1>Junior<br/>Software<br/>Developer</h1>
      </div>
    </div>
    </>
  )
}
export default Hero