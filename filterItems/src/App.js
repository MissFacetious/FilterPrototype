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

    this.findClass = this.findClass.bind(this);
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
      var course = Items[i];
      if (course.name.includes(search)) {
        newItems.push(course);
      }
    }
    this.setState({items: newItems});
  }

  onFilter(filter, include) {
    // do we include the search results too?
    // add filter to the list of things to filter
    var currentFilters = this.state.filter;
    var newCurrentFilters = [];
    //console.log(filter);

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
      var course = Items[i];
      for (var f=0; f < newCurrentFilters.length; f++) {
        if (course.content.includes(newCurrentFilters[f])) {
          if (!this.findClass(newItems, course.label)) {
            newItems.push(course);
          }
        }
        if (course.skills.includes(newCurrentFilters[f])) {
          if (!this.findClass(newItems, course.label)) {
            newItems.push(course);
          }
        }
        if (course.topics.includes(newCurrentFilters[f])) {
          if (!this.findClass(newItems, course.label)) {
            newItems.push(course);
          }
        }
        if (course.degrees.includes(newCurrentFilters[f])) {
          if (!this.findClass(newItems, course.label)) {
            newItems.push(course);
          }
        }
        if (newCurrentFilters[f] === "Over 2 Stars" && course.rating > 2) {
          if (!this.alreadyIn(newItems, course)) {
            newItems.push(course);
          }
        }
        if (newCurrentFilters[f] === "Over 3 Stars" && course.rating > 3) {
          if (!this.alreadyIn(newItems, course)) {
            newItems.push(course);
          }
        }
        if (newCurrentFilters[f] === "Over 4 Stars" && course.rating > 4) {
          if (!this.alreadyIn(newItems, course)) {
            newItems.push(course);
            console.log("add over 4 stars" + course.key);
          }
        }
        // if the amount of people enrolled is less than the class size, we have room
        if (newCurrentFilters[f] === "Space Available" && course.enrolled < course.classSize) {
          newItems.push(course);
        }
        // if the amoutn of people enrolled is equal or more than the class size,
        // check the waitlist has room
        if (newCurrentFilters[f] === "Waiting List Only" && course.enrolled >= course.classSize && (course.enrolled < (course.waitingList + course.classSize))) {
          newItems.push(course);
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

  onClose() {
    var element = document.getElementById("panel");
    element.style.display = 'none';
  }

  onShow() {
    var element = document.getElementById("panel");
    element.style.display = 'block';
  }

  findClass(items, value) {
    var myCourse = null;
    for (var i=0; i < items.length; i++) {
      var course = items[i];
      if (course.label === value) {
        myCourse = course;
      }
    }
    return myCourse;
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

  alreadyIn(items, course) {
    for (var i=0; i < items.length; i++) {
      if (course === items[i]) {
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
    //this.onFilter("", false);
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
    else if (listItems.length === 1) plural = "Returned " + listItems.length + " Class";
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
              <Search options={this.state.items} onSearch={this.onSearch} value="Computers" />
            </div>
          </div>
        </div>
        <div className="heading-behind" />
        <div className="grid-two grid-squish allshade">
          <div className="grid-two-column top">
          <div className="box border shade3">
            <p className="title">Filter</p>
            <input className="button-click" type="button" value="Clear All" onClick={this.clearAll} />
            <Accordion allowZeroExpanded="true">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Category</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Electronics" onFilter={this.onFilter} />
                  <Checkbox label="Clothes" onFilter={this.onFilter} />
                  <Checkbox label="Food" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Color</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Red" onFilter={this.onFilter} />
                  <Checkbox label="Blue" onFilter={this.onFilter} />
                  <Checkbox label="Yellow" onFilter={this.onFilter} />
                  <Checkbox label="Orange" onFilter={this.onFilter} />
                  <Checkbox label="Green" onFilter={this.onFilter} />
                  <Checkbox label="Purple" onFilter={this.onFilter} />
                  <Checkbox label="Black" onFilter={this.onFilter} />
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
          <div className="grid-two-column top">
            <div className="listitem">
      				<div className="box shade2 left-line">
      					<p className="title">Results</p>
                <p>{plural}</p>
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
