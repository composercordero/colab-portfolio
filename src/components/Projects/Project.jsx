import "./project.css"

const Project = ({title, description, tech, link}) => {
    return (
    <>
    <div className="project-card" id="project">
        <div className="project-title-container">
            <div className="project-title">{title}</div>
            <div className="button">
                <a href={link} target="_blank" className="button">GitHub Repo</a>
            </div>
        </div>
        <div className="project-description">{description}</div>
        <div className="project-tech">
            {tech.map((item,i)=>(<li key={i} >{item}</li>))}
        </div>
    </div>
    
    </>
    )
}
export default Project