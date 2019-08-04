import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this)
    this.input = React.createRef();
  }

  onSearch() {
    const value = this.input.current.value
    this.props.onSearch(value)
  }

  render() {
    return (
      <div className="grid-header">
        <div className="grid-header-column">
          <div className="title-text white-text font">Store Page</div>
        </div>
        <div className="grid-header-column">
          <input className="input-bar small-text"
            ref={this.input}
            type="text"
            placeholder="Type to search..." />
        </div>
        <div className="grid-header-column">
          <button className="button gray-backround medium-text" onClick={this.onSearch}>Search</button>
        </div>
      </div>
    )
  }
}

export default Search;
