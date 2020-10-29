import React, { Component } from 'react';
import Button from './Button.js'


class MyComponent extends Component {
  render() {
    return (
    <div>
        <Button color="red"/>
        {/* <Button color="blue"/> */}
    </div>
    );
  }
}

export default MyComponent;