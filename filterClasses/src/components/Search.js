import React from 'react';
import createClass from 'create-react-class';

var Search = createClass({

    getInitialState () {
      return {
      };
  },

  onSearch ({target}) {
      //this.setState({ value });
      console.log("value in Search");
      //console.log(target.value);
      this.props.onSearch(target.value);
  },

  clickSearch () {
    var element = document.getElementById("searchValue");
    if (element != null) {
      this.props.onSearch(element.value);
    }
  },

  render() {
    return (
      <div className="box shade1 center">
        <input id="searchValue" className="large-input" type="text" onChange={this.onSearch} />
        <input className="button-click" type="submit" value="Search" onClick={this.clickSearch} />
      </div>
    )}
  });

export default Search;
