import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form'
import Goals from './Goals'
import './index.css';

const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      goal: [],
      submitted: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.clear = this.clear.bind(this)
    // this.start = this.start.bind(this)

    /* a better way to bind this using arrow function as demonstrated below
    *  using property initializer
    *  */
  }

  handleChange = (e) => {
    e.preventDefault();
    let numberChange = parseInt(e.target.value, 0);
    this.setState({time: numberChange});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({submitted: !prevState.submitted}));
  };

  handleInput = (e) => {
    this.setState({goal: [e.target.value]})
  };

  clear = () => {
    this.setState({
      time: '',
      goal: [],
      submitted: false
    });
    clearInterval(this.timer);
    clearTimeout(this.timeout);
  };

  start = () => {
    let duration = (this.state.time * 1000);
    this.timer = setInterval(() => {
      if (this.state.time > 0) { this.tick() }
		}, 1000);

    this.timeout = window.setTimeout(() => {
      alert('Time is up. Time to set another goal');
    }, duration);
  };

  tick = () => {
    this.setState({time: --this.state.time})
  };

  render() {
    const { time, goal, submitted } = this.state;
    return (
      <div>
        <Form goal={ goal }
              time={ time }
              onSubmit={ this.handleSubmit }
              onChangeTime={ this.handleChange }
              onChangeGoal={ this.handleInput } />
        {submitted && <Goals { ...this.state } />}
        {submitted && <button onClick={ this.clear }>Clear</button>}
        {submitted && <button onClick={ this.start }>Start</button>}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));