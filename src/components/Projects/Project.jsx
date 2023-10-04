

const Project = ({title, description, tech, link}) => {
    return (
    <>
    <div className="project-card">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        <div className="project-description">{description}</div>
        <div className="project-tech">
            {tech.map((item,i)=>(<li key={i} >{item}</li>))}
        </div>
        <div className="project-buttons">
            <button><a href={link} target="_blank">GitHub Repo</a></button>
        </div>
    </div>
    
    </>
    )
}
export default Project