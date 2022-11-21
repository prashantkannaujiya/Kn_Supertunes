import React from "react";
import './index.css';
import Rating from './Rating'
const SongCard = (props) => {
    const mysty={
        height:'2px',
        width:'2px'
    };
  return <div className='song-card'>
      <img src={props.input.thumb} alt='song-name' />
      
      <b>{props.input.title}
      by{console.log(props)}
      
      {props.input.artist}</b>
      
     
      <Rating star={props.input.rating}/>
     
  </div>;
};

export default SongCard;