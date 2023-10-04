import Project from './Project'
import projectInfo from './projectInfo'

const Projects = () => {
  return (
    <>
    <div className='project-grid'>
    {projectInfo.map((project, i)=> (
      <Project key={i} title={project.title} description={project.description} tech={project.tech} link={project.link} />
    ))}
    </div>
    </>
  )
}
export default Projects