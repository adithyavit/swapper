import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import a from './cards/a.png';
import b from './cards/2.png';
import './App.css';
// import ReactTransitionGroup from 'react-addons-transition-group' // ES6
// import TransitionGroup from 'react-transition-group/TransitionGroup' // ES6
import { Transition } from 'react-transition-group';
import {defaultStyle} from './DefaultStyle.js'
import {transitionStyles} from './TransitionStyle.js'
import MyComponent from './MyComponent.js'
import Button from './Button';


class App extends React.Component{
  

  constructor(props){
    super(props)
    this.state = {img1_left: 0,  img1_top:0, img2_left:0, top:0}
    this.swap = this.swap.bind(this);
    this.card1 = React.createRef();
    this.card2 = React.createRef();
    this.inProp = false;
   }

  swap(event) {
    var card1_ref = findDOMNode(this.card1.current);
    console.log(card1_ref)
    console.log(card1_ref.offsetLeft)
    // var card1_rect = card1_ref.getBoundingClientRect()
    // var card1_left = card1_rect.left;
    // console.log(this)
    // console.log(this.card1.current.offsetLeft)
    // this.card1.current.offsetLeft += 100;
    // console.log(event)
    // this.setState({img1x: card1_left}, ()=> alert(this.state.img1x))
  }
   Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={300}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
        </div>
      )}
    </Transition>
    );

    render(){
      return (
        <div style={{ backgroundColor: "orange" }}>
          {/* <div /> */}
          <h1>hello adithya, good morning</h1>
          <div className="flexbox-container">
            <div ref={this.card1} className="card">
              {" "}
              <img src={a} alt="NaN" width="20%"></img>{" "}
            </div>
            <div ref={this.card2} className="card">
              {" "}
              <img src={b} alt="NaN" width="20%"></img>{" "}
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.swap.bind(this, this.img1x)}
            >
              swap cards
            </button>
            <MyComponent />

            {/* <this.Fade {inProp = true}/> */}

            {/* <this.Fade <MyComponent />/> */}

            <Transition in={this.inProp} timeout={300}>
              {(state) => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  I'm a fade Transition!
                </div>
              )}
            </Transition>
            <button onClick={ () => this.setState( { inProp: true })} > Click to Enter </button>
          </div>
        </div>
      );
    }
}

export default App;