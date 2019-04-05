import React from 'react';
import createClass from 'create-react-class';

var Search = createClass({

    //this.state = {
    //  availableClasses: null,
    //  semester: this.props.semester,
    //},

    getInitialState () {
      return {
        removeSelected: true,
        disabled: false,
        stayOpen: false,
        value: [],
        rtl: false,
      };
  },

  onChange ({target}) {
      //this.setState({ value });
      console.log("value in Search");
      //console.log(target.value);
      this.props.onChange(target.value);
  },

  handleClick (value) {
    console.log(value);
  },

  render() {
    return (
      <div className="box shade1 center">
        <input className="large-input" type="text" onChange={this.onChange} />
        <input className="button-click" type="submit" value="search" onClick={this.handleClick} />
      </div>
    )}
  });

export default Search;
