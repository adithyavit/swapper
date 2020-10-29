import React, { Component } from 'react';


const divStyle = {
    backgroudColor: 'blue',
    // backgroundImage: 'url(' + imgUrl + ')',
  };

  
class Button extends Component {
    render() {
      return (<div >
           <button type="button" style={{backgroundColor:this.props.color}}>Click Me!</button> 
      </div>)
    }
  }

export default Button;