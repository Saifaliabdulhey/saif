import React from 'react';
import player from '../images/player.png'
import feature from '../images/feature.png'

function Body() {
  return (
    <div className="body-container">
    <img className="feature" src={feature}/>
    <h1 className="title">Know more about me! </h1>
    <button className="btn-video"><span><img className="img" src={player} /></span>Watch the video</button>
    </div>

  )
}

export default Body