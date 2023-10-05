import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import heroLogo from '../../assets/heroLogo.png'
import './hero.css'

const Hero = () => {
  const projectVariant = {
    visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x:-200 }
}

const control = useAnimation()
const [ref, inView] = useInView()

useEffect(() => {
if (inView) {
    control.start("visible");
} else {
    control.start("hidden");
}
}, [control, inView]);
  
  return (
    <>
    <div className="hero-container" id="hero" >
      <motion.div className="hero-logo" ref={ref}
      variants={projectVariant}
      initial="hidden"
      animate={control}>
        <img src={heroLogo} alt="Hero Logo" />
      </motion.div>
      <div className="hero-title">
        <h1>Junior<br/>Software<br/>Developer</h1>
      </div>
    </div>
    </>
  )
}
export default Hero