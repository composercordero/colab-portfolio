import blueBlob from '../assets/blueBlob.svg'
import carlos from '../assets/carlos.jpeg'

const Bio = () => {
    return (<>
    
    <div className="bio-title">
        <h1>Hola, People!</h1>
    </div>

    <div className="bio-content">
        <p>My name is Carlos. I am a venezuelan guy with a passion for coding, music, and crochet. As a junior software developer, I create user-centered solutions through writing efficient, clean code, effective communication, and meaningful collaboration. I strive to find creative solutions, listen to my peers, and perform extensive research to be a valuable part of a team, bringing timely, professional contributions to create the best product for our clients. </p>

        <p>As a musician, I have extensive experience in leadership, teamwork, deadlines, and finding creative solutions through research and extensive experimentation. I've worked with thousand of people, bringing meaningful conversations and collaborations to life and increasing both financial and social capital of organizations around the world.</p>
    </div>

    <div className="bio-picture">
        <img src={carlos} alt="Carlos" />
        <img src={blueBlob} alt="blue blob" />
    </div>
    
    </>
    )
}
export default Bio