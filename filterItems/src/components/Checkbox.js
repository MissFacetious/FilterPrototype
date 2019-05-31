import React from 'react';
import createClass from 'create-react-class';
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
		if (this.state.checked) {
		// checked
		} else {
		// unchecked
		}
    var label = this.props.label;
	  return (
	  	<p className="left entry">
	    	<input className="small-input check" type="checkbox" data-value={label} onChange={this.onFilter} defaultChecked={this.state.checked}/><span className="over">{label}</span>
	    </p>
	  );
	}
});

export default Checkbox;
