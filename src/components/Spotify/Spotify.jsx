import SpotifyCard from "./SpotifyCard"
import "./spotify.css"
import { useState, useEffect } from 'react'

const CLIENT_ID = '84de987c2c6d45248d2dc9d4b3f439ab'
const CLIENT_SECRET = '7f97e3d2b0b94dc0b09cb55407cba768'

const Spotify = () => {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(()=>{
    // API access Token
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))

    const searchParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
      fetch ('https://api.spotify.com/v1/artists/' + '6vWDO969PvNqNYHIOW5v0m' + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {setAlbums(data.items)})
      
  },[])

  // Search function

  async function search(e) {
    e.preventDefault();
    console.log('search for ' + searchInput)
    console.log(accessToken)

    // Get Request using search to get the artist ID
    const searchParameters ={
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(response => response.json())
      .then(data => {return data.artists.items[0].id})

      console.log('artist ID is', artistID)
    // Get request with artist ID grab all the albums
    const returnedAlbums = await  fetch ('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(response => response.json())
      .then(data => {
        setAlbums(data.items)
      });
    }
    
  return (
    <>
    <div className="spotify-container">
        <div className="spotify-search">
        <div className="title"> <h1>Spotify API</h1> </div>
        <form className="spotify-form">
          <div class="form-group">
            <span>Artist</span>
            <input className="spotify-input"
            placeholder="Search for artist" type="input" 
            onChange={(e)=> setSearchInput(e.target.value)}/>
          </div>
          <button className="spotify-button" onClick ={(e) => search(e)}>Search</button>
        </form>
        </div>
        <div className="spotify-albums">
          {albums.map((album, i)=>{return (
            <SpotifyCard key={i} title={album.name} image={album.images[0].url}/>
          )
          })}
        </div>
    </div>
    </>
  )
}
export default Spotify