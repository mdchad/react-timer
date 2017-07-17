import React, { Component } from 'react';
import Label from './Label'

export default class Form extends Component {

	shouldComponentUpdate(nextProps) {
		if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
			return true
		} else {
			return false
		}
	}

	onHandleSubmit = (e) => {
		this.props.onSubmit(e)
	}

	render() {
		const { time, goal } = this.props;
		return (
		<form onSubmit={this.onHandleSubmit}>
			<Label title={'Time: '}
						 cssStyle={'textField time'}
						 value={ time }
						 type={'number'}
						 onChangeProps={ this.props.onChangeTime }
						 placeholder={ 'time is in seconds' } />
			<br />
			<Label title={'Target: '}
						 cssStyle={'textField'}
						 value={ goal }
						 type={'text'}
						 onChangeProps={ this.props.onChangeGoal } />
			<br />
			<button className="inputSubmit" type="submit">Submit</button>
		</form>
	)}
}

