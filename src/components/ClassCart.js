import React from 'react';
import createClass from 'create-react-class';

var ClassInfo = createClass({

	getInitialState () {
		return {
		};
	},

	handleClick (event) {
    this.props.addClass(event.currentTarget.dataset.value);
  },

	render() {
		return (
			<div>
				<span className="close" onClick={this.removeClass}>&times;</span>
				<p>{this.props.options.label}</p>
			</div>
		);
	}
});
export default ClassInfo;
