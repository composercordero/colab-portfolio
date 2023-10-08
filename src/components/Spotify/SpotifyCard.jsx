import "./spotifyCard.css"

const SpotifyCard = ({title, image}) => {
  
  return (
    <>
    <div className="spotify-card-container">
        <div className="spotify-card-image">
          <img src={image} alt={title} />
        </div>
        {/* <div className="spotify-card-title"><h2>{title}</h2></div> */}
    </div>
    </>
  )
}
export default SpotifyCard

