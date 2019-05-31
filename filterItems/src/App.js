import React, { Component } from 'react';
import Search from './components/Search'; // simple keyword search
import ItemInfo from './components/ItemInfo'; // items are what is displayed as a class
import Checkbox from './components/Checkbox'
import Items from './Items'; // load up the information of Items
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import './App.css';
import './accordion.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: Items,
      filter: []
    };

    this.findItem = this.findItem.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.findFilter = this.findFilter.bind(this);
    this.alreadyIn = this.alreadyIn.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  onSearch(search) {
    // do we include the filtered results too?
    var newItems = [];
    for (var i=0; i < Items.length; i++) {
      var item = Items[i];
      if (item.name.includes(search)) {
        newItems.push(item);
      }
    }
    this.setState({items: newItems});
  }

  onFilter(filter, include) {
    // do we include the search results too?
    // add filter to the list of things to filter
    var currentFilters = this.state.filter;
    var newCurrentFilters = [];

    // find out if the filter is adding or removing
    if (include) {
      // add to filter
      if (!this.findFilter(currentFilters, filter)) {
        newCurrentFilters.push(filter);
      }
    }
    else {
      // remove from filter
      if (this.findFilter(currentFilters, filter)) {
        var index = currentFilters.indexOf(filter);
        currentFilters.splice(index, 1);
      }
    }

    for (var c=0; c < currentFilters.length; c++) {
      newCurrentFilters.push(currentFilters[c]);
    }

    var newItems = [];
    for (var i=0; i < Items.length; i++) {
      var item = Items[i];
      for (var f=0; f < newCurrentFilters.length; f++) {
        if (item.category.includes(newCurrentFilters[f])) {
          if (!this.findItem(newItems, item.key)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "Over 2 Stars" && item.rating > 2) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "Over 3 Stars" && item.rating > 3) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "Over 4 Stars" && item.rating > 4) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "Over $500" && item.price > 500) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "$100-$500" && item.price < 500 && item.price > 100) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "$50-$100" && item.price < 100 && item.price > 50) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "$10-$50" && item.price < 50 && item.price > 10) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        if (newCurrentFilters[f] === "Less than $10" && item.price < 10 && item.price > 0) {
          if (!this.alreadyIn(newItems, item)) {
            newItems.push(item);
          }
        }
        // if the amount of people enrolled is less than the class size, we have room
        if (newCurrentFilters[f] === "In Stock" && item.itemsLeft > 0) {
          newItems.push(item);
        }
      }
    }

    // this return all even when our filter has none, maybe take care of this case?
    if (newItems.length === 0) {
      // default to all
      newItems = Items;
    }
    this.setState({items: newItems, filter: newCurrentFilters});
  }

  findItem(items, key) {
    var myitem = null;
    for (var i=0; i < items.length; i++) {
      var item = items[i];
      if (item.key === key) {
        myitem = item;
      }
    }
    return myitem;
  }

  findFilter(filters, value) {
    var myFilter = null;
    for (var i=0; i < filters.length; i++) {
      var filter = filters[i];
      if (filter === value) {
        myFilter = filter;
      }
    }
    return myFilter;
  }

  alreadyIn(items, item) {
    for (var i=0; i < items.length; i++) {
      if (item === items[i]) {
        return true;
      }
    }
    return false;
  }

  clearAll() {
    var list = document.getElementsByClassName("check");
    for (var l=0; l < list.length; l++) {
      var element = list[l];
      element.checked = false;
    }
    this.onSearch("");
  }

  componentDidMount() {
    this.onSearch("");
  }

  render() {
    const listItems = this.state.items.map((li) =>
      <ItemInfo
        key={li.key}
        options={li} />
    );

    var plural = "";
    if (listItems.length === 0) plural = "Returned No Items";
    else if (listItems.length === 1) plural = "Returned " + listItems.length + " Item";
    else plural = "Returned " + listItems.length + " Items";

    return (
      <div className="background">
        <div className="heading">
          <div className="heading-grid">
            <div className="heading-grid-column">
              <div className="center vcenter">
                <p className="title">Store Page</p>
              </div>
            </div>
            <div className="heading-grid-column">
              <Search options={this.state.items} onSearch={this.onSearch} value="" />
            </div>
          </div>
        </div>
        <div className="heading-behind" />
        <div className="grid-two grid-squish allshade">
          <div className="grid-two-column top">
          <div className="box border shade3">
            <p className="title">Filter</p>
            <div className="center entry">
              <input className="button-click" type="button" value="Clear All" onClick={this.clearAll} />
            </div>
            <div className="entry">
            <Accordion allowZeroExpanded="true">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Category</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Electronics" onFilter={this.onFilter} />
                  <Checkbox label="Books" onFilter={this.onFilter} />
                  <Checkbox label="Toys" onFilter={this.onFilter} />
                  <Checkbox label="School" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Availabity</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="In Stock" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Price</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Over $500" onFilter={this.onFilter} />
                  <Checkbox label="$100-$500" onFilter={this.onFilter} />
                  <Checkbox label="$50-$100" onFilter={this.onFilter} />
                  <Checkbox label="$10-$50" onFilter={this.onFilter} />
                  <Checkbox label="Less than $10" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Rating</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Over 4 Stars" onFilter={this.onFilter} />
                  <Checkbox label="Over 3 Stars" onFilter={this.onFilter} />
                  <Checkbox label="Over 2 Stars" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          </div>
          </div>
          <div className="grid-two-column top">
            <div className="listitem">
      				<div className="box shade2 left-line">
                <div className="grid-two grid-full">
                  <div className="grid-two-columns left">
      					    <p className="title">Results</p>
                  </div>
                  <div className="grid-two-columns right">
                    <p>{plural}</p>
                  </div>
                </div>
      					<div className="results">{listItems}</div>
      				</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
