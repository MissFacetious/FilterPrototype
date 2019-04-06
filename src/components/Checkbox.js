import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import './../App.css';

var Checkbox = createClass({

  getInitialState: function() {
    return {checked: false}
  },

  onFilter: function(event) {
    this.props.onFilter(event.currentTarget.dataset.value, !this.state.checked);
    this.setState({checked: !this.state.checked});
  },

  render() {
		var msg;
		if (this.state.checked) {
			msg = "checked";
		} else {
			msg = "unchecked";
		}
    var label = this.props.label;
	  return (
	  	<p className="left">
	    	<input className="small-input check" type="checkbox" data-value={label} onChange={this.onFilter} defaultChecked={this.state.checked}/><span className="over">{label}</span>
	    </p>
	  );
	}
});

export default Checkbox;
