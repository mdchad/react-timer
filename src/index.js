import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';


class App extends Component {
    constructor(){
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
        let numberChange = parseInt(event.target.value, 0);
        this.setState({time: numberChange});
        e.preventDefault();
    };

    handleSubmit = (e) => {
        this.setState({submitted: true});
        e.preventDefault();
    };

    handleInput = (e) => {
        this.setState({
            goal: [e.target.value]
        })
    };

    clear = () => {
        this.setState({
            time: '',
            goal: [],
            submitted: false
        })
    };

    start = () => {
        let duration = this.state.time*1000;
        window.setTimeout(() => {
            alert('Time is up. Time to set another goal');
        }, duration);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Time:
                        <input
                            className='textField time'
                            type="number"
                            value={this.state.time}
                            onChange={this.handleChange}
                            placeholder="time is in seconds"/>
                    </label>
                    <br />
                    <label>
                        Target:
                        <input
                            className='textField'
                            type="text"
                            value={this.state.goal}
                            onChange={this.handleInput} />
                    </label>
                    <br />
                    <button
                        className="inputSubmit"
                        type="submit">Submit
                    </button>
                </form>
                {this.state.submitted && <Goals goal={this.state.goal} time={this.state.time} />}
                {this.state.submitted && <button onClick={this.clear}>Clear</button>}
                {this.state.submitted && <button onClick={this.start}>Start</button>}
            </div>
        )
    }
}

const Goals = ({time, goal}) => {
    return (
        <div className="target">
            {goal.map(({goal: {index}}) =>
                <p key={index}>Current target: {goal}</p>
            )}
            <p>Duration: {time}</p>
        </div>
    )
};

render(<App />, document.getElementById('root'));