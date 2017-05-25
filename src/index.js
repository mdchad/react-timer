import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      goal: [],
      submitted: false
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.clear = this.clear.bind(this)
    // this.start = this.start.bind(this)

    /* a better way to bind this using arrow function as demonstrated below */
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
    })
  };

  start = () => {
    let duration = (this.state.time * 1000) * 60;
    window.setTimeout(() => {
      alert('Time is up. Time to set another goal');
    }, duration);
  };

  render() {
    const { time, goal, submitted } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Time:
            <input
              className='textField time'
              type="number"
              value={ time }
              onChange={ this.handleChange }
              placeholder="time is in mins"/>
          </label>
          <br />
          <label> Target:
            <input
              className='textField'
              type="text"
              value={ goal }
              onChange={ this.handleInput }/>
          </label>
          <br />
          <button className="inputSubmit" type="submit">Submit</button>
        </form>
        {submitted && <Goals { ...this.state } />}
        {submitted && <button onClick={ this.clear }>Clear</button>}
        {submitted && <button onClick={ this.start }>Start</button>}
      </div>
    )
  }
}

//Parameters were passed from <Goals { ...this.state } />
const Goals = ({time, goal}) => {
  return (
    <div className="target">
      { goal.map((goal, index) =>
        <p key={ index }>Current target: { goal }</p>
      )}
      <p>Duration: { time } mins</p>
    </div>
  )
};

render(<App />, document.getElementById('root'));