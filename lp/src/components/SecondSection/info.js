import React, { Component } from 'react';
import './style.css'
import ReactPlayer from 'react-player'
class  ResponsivePlayer  extends  Component  { 
    render  ( )  { 
      return  ( 
        <div className = 'player-wrapper'> 
          <ReactPlayer 
            className = 'react-player' 
            url = 'https://www.youtube.com/watch?v=rQj4PJvPFeU&ab_channel=AMD' 
            largura = '100%' 
            altura = '100%' 

          /> 
        </div> 
      ) 
    } 
  }
export default ResponsivePlayer