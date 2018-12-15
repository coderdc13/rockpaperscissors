import React, { Component } from 'react';
import './App.css';

const PlayerCard = props => {
  const style = {
    backgroundColor: props.color,
    backgroundImage: 'url(./image/' + props.symbol + '.png)',
  }
  return (

  <div style={style} className="player-card">{props.symbol}</div>);
};

export default PlayerCard;
