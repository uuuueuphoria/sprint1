import {Component} from 'react';
import React from 'react';
import { useState, useEffect } from 'react';



class Increment extends Component {
    state = {
        count:0,
      };
    increaseValue(){
        this.setState({count:this.state.count+1})};
    render() {
      return (
        <div>
          <label htmlFor="number">Click here to increment count: </label>
          <button onClick={()=>this.increaseValue()}>Hit me!</button>
          <p className="number">You have clicked the button <span> {this.state.count}</span> times.</p>   
        </div>
      );
    }
}
  
  
  export default Increment;
