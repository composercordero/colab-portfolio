import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import goldenBlob from '../assets/goldenBlob.svg'
import carlos from '../assets/carlos.png'
import "./bio.css"

const Bio = () => {
    
    const projectVariant = {
        visible: { opacity: 1, y:0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y:-100 }
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
    
    return (<>
    <motion.div className="bio-container" id="bio" ref={ref}
    variants={projectVariant}
    initial="hidden"
    animate={control}>
    <div className="title">
        <h1>A bit about me!</h1>
    </div>
    <div className="bio-description">
        <div className="bio-content">
            <p>My name is Carlos. I am a venezuelan guy with a passion for coding, music, and crochet. As a junior software developer, I create user-centered solutions through writing efficient, clean code, effective communication, and meaningful collaboration. I strive to find creative solutions, listen to my peers, and perform extensive research to be a valuable part of a team, bringing timely, professional contributions to create the best product for our clients. </p>

            <p>As a musician, I have extensive experience in leadership, teamwork, deadlines, and finding creative solutions through research and extensive experimentation. I've worked with thousand of people, bringing meaningful conversations and collaborations to life and increasing both financial and social capital of organizations around the world.</p>
        </div>

        <div className="bio-picture">
            <img src={carlos} alt="Carlos" />
            <img src={goldenBlob} alt="blue blob" className='golden-blob' />
        </div>
    </div>
    </motion.div>
    </>
    )
}
export default Bio