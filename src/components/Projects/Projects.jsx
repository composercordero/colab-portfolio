import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Project from './Project'
import projectInfo from './projectInfo'
import "./projects.css"


const Projects = () => {
  
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

  return (
    <>
    <motion.div className='project-container' ref={ref}
      variants={projectVariant}
      initial="hidden"
      animate={control}>
      <div className='title'>
        <h1>Projects I Am Proud Of</h1>
        </div>
    <div className='project-grid'>
    {projectInfo.map((project, i)=> (
      <Project key={i} title={project.title} description={project.description} tech={project.tech} link={project.link} />
    ))}
    </div>
    </motion.div>
    </>
  )
}
export default Projects