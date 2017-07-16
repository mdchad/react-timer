import React, { Component } from 'react';

export default class Form extends Component {

	onHandle = (e) => {
		this.props.onChangeProps(e)
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.value !== nextProps.value) {
			return true;
		}
		if (this.props.type !== nextProps.type) {
			return true;
		}
		if (this.props.cssStyle !== nextProps.cssStyle) {
			return true;
		}
		if (this.props.placeholder !== nextProps.placeholder) {
			return true;
		}
		if (this.props.onChangeProps !== nextProps.onChangeProps) {
			return true;
		}
		return false;
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