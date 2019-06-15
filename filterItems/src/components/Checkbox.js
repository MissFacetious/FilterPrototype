import React, { Component } from 'react';

import './../App.css';

class Checkbox extends Component {

  constructor(props) {
    super(props)
    this.state = { checked: this.props.checked }
    this.onFilter = this.onFilter.bind(this)
  }

  onFilter(event) {
    this.props.onFilter(event.currentTarget.dataset.value, event.currentTarget.checked)
  }

  render() {
    var label = this.props.label;
	  return (
	  	<p className="left entry">
	    	<input
          className="small-input check"
          type="checkbox"
          data-value={label}
          onChange={this.onFilter}
          defaultChecked={this.state.checked}
        />
        <span className="over">
          {label}
        </span>
	    </p>
	  );
	}
}

export default Checkbox;
