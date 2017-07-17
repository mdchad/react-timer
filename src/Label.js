import React, { Component } from 'react';

export default class Form extends Component {

	onHandle = (e) => {
		this.props.onChangeProps(e)
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) {
			return true
		} else {
			return false
		}
	}

	render() {
		const { value, placeholder, type, title, cssStyle } = this.props;
		return (
			<label> {title}
				<input
					className={ cssStyle }
					type={ type }
					value={ value }
					onChange={ this.onHandle }
					placeholder={ placeholder }
					required/>
			</label>
		)
	}
}