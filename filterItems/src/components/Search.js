import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this)
    this.clickSearch = this.clickSearch.bind(this)
  }

  onSearch ({target}) {
      this.props.onSearch(target.value);
  }

  clickSearch () {
    var element = document.getElementById("searchValue");
    if (element != null) {
      this.props.onSearch(element.value);
    }
  }

  render() {
    return (
      <div className="center vcenter">
        <input id="searchValue" className="large-input search-input" type="text" placeholder="Type to Search..." />
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input className="button-click" type="submit" value="Search" onClick={this.clickSearch} />
      </div>
    )}
  }

export default Search;
