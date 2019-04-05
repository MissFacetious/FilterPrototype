import React, { Component } from 'react';
import Search from './components/Search';
import Filter from './components/Filter';
import ListItem from './components/ListItem';
import Classes from './Classes';
import './App.css';

const defaultClass = { label: "label", key: 0, name: "None"};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classes: Classes,
      course: "*",
      takingClasses: [

      ],
    };

    this.onChange = this.onChange.bind(this);
    this.filterCourses = this.filterCourses.bind(this);
  }

  filterCourses(filter) {
    var newClasses = [];
    Classes.forEach(function (course) {
      if (course.name.includes(filter)) {
        newClasses.push(course);
        console.log(course);
      }
    });
    this.setState({classes: newClasses});
  }

  componentDidMount() {
    this.filterCourses("");
  }

  onChange(target) {
    this.filterCourses(target);
  }

  render() {
    return (
      <div className="background">
        <div className="one allshade top">
          <div className="center box">
            <p className="title">Pick Class</p>
            <Search options={this.state.classes} onChange={this.onChange} value="Computers" />
          </div>
        </div>
        <div className="grid-twos allshade">
          <div className="grid-two top">
            <Filter options={this.state.classes} onChange={this.onChange} />
          </div>
          <div className="grid-two top">
            <div className="listitem">
              <ListItem
                onClick={this.onChange}
                options={this.state.classes}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
