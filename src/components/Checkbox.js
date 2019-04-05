import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import './../App.css';

var Checkbox = createClass({
  getInitialState: function() {
    return {checked: false}
  },
  handleCheck: function() {
    this.setState({checked: !this.state.checked});
  },
  render: function() {

  },

	render() {
		var msg;
		if (this.state.checked) {
			msg = "checked";
		} else {
			msg = "unchecked";
		}
	  return (
	  	<p className="left">
	    	<input className="small-input" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/><span className="over">{this.props.label}</span>
	    </p>
	  );
	}
});

export default Checkbox;
