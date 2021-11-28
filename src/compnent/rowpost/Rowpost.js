import React, { useEffect, useState } from 'react'
import {imageUrl,API_KEY } from '../../Constant/constant'
import axios from '../../axios'
import YouTube from 'react-youtube'


function Rowpost(props) {
    const [movie, setMovie] = useState([])
    const [urlId,setUrlId] = useState('')



    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            console.log(Response.data,"mejo")
            setMovie(Response.data.results)
        }).catch(err=>{
            alert("networkerror")

        })
       
       
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const selector = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
            console.log(Response.data)
            if(Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
            }else{
                  console.log("empty array")
            }
        })
      }
    
    return (
        <div className = 'row'>
            <h2>{props.title}</h2>
            
            <div className="posters">
                {movie.map((obj)=>
                <img onClick = {()=>selector(obj.id)} className={props.isSmall ? 'smallposter':'poster'} src= {`${imageUrl+obj.backdrop_path}`} alt="" />
                
                )}
                
               

            </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}  />}    
            
        </div>
    )
}

export default Rowpost
