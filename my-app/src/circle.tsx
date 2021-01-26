import {Component} from 'react';


class Circle extends Component {
    state = {
      value: ''
    };
    render() {
      return (
        <div>
          <label htmlFor="circle">Please enter a radius: </label>
          <input type="number" name="circle" id="circle" value={this.state.value} step="0.01" min="0" onChange={e=>{this.setState({value:e.target.value})}}/>
          <p className="circle">The circumference of the circle is:<span> {parseFloat(this.state.value)*2*Math.PI}</span></p>   
        </div>
      );
    }
  }
  
  export default Circle;
