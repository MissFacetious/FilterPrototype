import React, { Component } from 'react';
import Search from './components/Search'; // simple keyword search
import ClassInfo from './components/ClassInfo'; // items are what is displayed as a class
import ClassCart from './components/ClassCart'; // items are what is displayed in the cart
import Checkbox from './components/Checkbox'
import Classes from './Classes'; // load up the information of classes
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import './App.css';
import './accordion.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: Classes,
      takingClasses: [],
      filter: []
    };

    //this.onChange = this.onChange.bind(this);
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.findClass = this.findClass.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.findFilter = this.findFilter.bind(this);
  }

  onSearch(search) {
    // do we include the filtered results too?
    var newClasses = [];
    for (var i=0; i < Classes.length; i++) {
      var course = Classes[i];
      if (course.name.includes(search)) {
        newClasses.push(course);
      }
    }
    this.setState({classes: newClasses});
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

    for (var f=0; f < currentFilters.length; f++) {
      newCurrentFilters.push(currentFilters[f]);
    }

    var newClasses = [];
    for (var i=0; i < Classes.length; i++) {
      var course = Classes[i];
      for (var f=0; f < newCurrentFilters.length; f++) {
        if (course.content.includes(newCurrentFilters[f])) {
          if (!this.findClass(newClasses, course.label)) {
            newClasses.push(course);
          }
        }
        if (course.skills.includes(newCurrentFilters[f])) {
          if (!this.findClass(newClasses, course.label)) {
            newClasses.push(course);
          }
        }
        if (course.specialization.includes(newCurrentFilters[f])) {
          if (!this.findClass(newClasses, course.label)) {
            newClasses.push(course);
          }
        }
        //if (course.rating.includes(newCurrentFilters[f])) {
        //  if (!this.findClass(newClasses, course.label)) {
        //    newClasses.push(course);
        //  }
        //}
      }
    }

    if (newClasses.length == 0) {
      // default to all
      newClasses = Classes;
    }
    this.setState({classes: newClasses, filter: newCurrentFilters});
  }

  onClose() {
    var element = document.getElementById("panel");
    element.style.display = 'none';
  }

  onShow() {
    var element = document.getElementById("panel");
    element.style.display = 'block';
  }

  addClass(value) {
    // add the class they want to the list
    var classArray = this.state.takingClasses;
    if (classArray.length == 0) classArray = [];

    // check for duplicate class
    if (!this.findClass(this.state.takingClasses, value)) {
      var course = this.findClass(this.state.classes, value);
      classArray.push(course);
      this.setState({takingClasses: classArray});
      // show panel
      this.onShow();
    }
  }

  removeClass(value) {

  }

  findClass(classes, value) {
    var myCourse = null;
    for (var i=0; i < classes.length; i++) {
      var course = classes[i];
      if (course.label == value) {
        myCourse = course;
      }
    }
    /*
    classes.forEach(function (course) {
      if (course.label == value) {
        myCourse = course;
      }
    });
    */
    return myCourse;
  }

  findFilter(filters, value) {
    var myFilter = null;
    for (var i=0; i < filters.length; i++) {
      var filter = filters[i];
      if (filter == value) {
        myFilter = filter;
      }
    }
    return myFilter;
  }

  componentDidMount() {
    this.onSearch("");
  }

  render() {
    const listItems = this.state.classes.map((li) =>
      <ClassInfo
        key={li.key}
        options={li}
        addClass={this.addClass}/>
    );
    const listClass = this.state.takingClasses.map((lc) =>
      <ClassCart
        key={lc.key}
        options={lc}
        removeClass={this.addClass} />
    );
    return (
      <div className="background">
      <div id="panel" className="hidden panel panel-large">
        <div className="panel-content">
          <div className="panel-header">
            <span className="close" onClick={this.onClose}>&times;</span>
            <h2>Classes Registering</h2>
          </div>
          <div className="panel-body">
            {listClass}
          </div>
        </div>
      </div>
        <div className="one allshade top">
          <div className="center box">
            <p className="title">Pick Class</p>
            <Search options={this.state.classes} onSearch={this.onSearch} value="Computers" />
          </div>
        </div>
        <div className="grid-twos allshade">
          <div className="grid-two top">
          <div className="box border shade3">
            <p className="title">Filter Classes</p>
            <input className="button-click" type="button" value="Clear All" />
            <Accordion allowZeroExpanded="true">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Content</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Individual Projects" onFilter={this.onFilter} />
                  <Checkbox label="Group Projects" onFilter={this.onFilter} />
                  <Checkbox label="Tests" onFilter={this.onFilter} />
                  <Checkbox label="Assignments" onFilter={this.onFilter} />
                  <Checkbox label="Presentations" onFilter={this.onFilter} />
                  <Checkbox label="Discussion" onFilter={this.onFilter} />
                  <Checkbox label="Lectures" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="category left">Skills</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Checkbox label="Coding" onFilter={this.onFilter} />
                  <Checkbox label="Writing" onFilter={this.onFilter} />
                  <Checkbox label="Algorithms" onFilter={this.onFilter} />
                  <Checkbox label="Reading" onFilter={this.onFilter} />
                  <Checkbox label="Algebra" onFilter={this.onFilter} />
                  <Checkbox label="Calculus" onFilter={this.onFilter} />
                  <Checkbox label="Gaming" onFilter={this.onFilter} />
                  <Checkbox label="VR" onFilter={this.onFilter} />
                  <Checkbox label="Robotics" onFilter={this.onFilter} />
                  <Checkbox label="Debugging" onFilter={this.onFilter} />
                  <Checkbox label="Mobile" onFilter={this.onFilter} />
                  <Checkbox label="Ethics" onFilter={this.onFilter} />
                  <Checkbox label="Command Line" onFilter={this.onFilter} />
                  <Checkbox label="Problem Solving" onFilter={this.onFilter} />
                </AccordionItemPanel>
              </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span className="category left">Specializations</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Checkbox label="Computational Perception & Robotics" onFilter={this.onFilter} />
                    <Checkbox label="Computing Systems" onFilter={this.onFilter} />
                    <Checkbox label="Interactive Intelligence" onFilter={this.onFilter} />
                    <Checkbox label="Machine Learning" onFilter={this.onFilter} />
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
          <div className="grid-two top">
            <div className="listitem">
      				<div className="box shade2 left-line">
      					<p className="title">Results</p>
      					<div>{listItems}</div>
      				</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
