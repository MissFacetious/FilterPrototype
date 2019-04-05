import React from 'react';
import createClass from 'create-react-class';
import Checkbox from './Checkbox'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../accordion.css';

var Filter = createClass({

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

  handleSelectChange (value) {
      //this.setState({ value });
      console.log(this.props.semester);
      this.props.onChange(value, this.props.semester);
  },


  render() {
    return (
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
              <Checkbox label="Individual Projects" />
              <Checkbox label="Group Projects" />
              <Checkbox label="Tests" />
              <Checkbox label="Assignments" />
              <Checkbox label="Presentations" />
              <Checkbox label="Discussion" />
              <Checkbox label="Lectures" />
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <span className="category left">Skills</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Checkbox label="Coding" />
              <Checkbox label="Writing" />
              <Checkbox label="Algorithms" />
              <Checkbox label="Reading" />
              <Checkbox label="Algebra" />
              <Checkbox label="Calculus" />
              <Checkbox label="Gaming" />
              <Checkbox label="VR" />
              <Checkbox label="Robotics" />
              <Checkbox label="Debugging" />
              <Checkbox label="Mobile" />
              <Checkbox label="Ethics" />
              <Checkbox label="Command Line" />
              <Checkbox label="Problem Solving" />
            </AccordionItemPanel>
          </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="category left">Specializations</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox label="Computational Perception & Robotics" />
                <Checkbox label="Computing Systems" />
                <Checkbox label="Interactive Intelligence" />
                <Checkbox label="Machine Learning" />
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className="category left">Rating</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox label="Over 4 Stars" />
                <Checkbox label="Over 3 Stars" />
                <Checkbox label="Over 2 Stars" />
                </AccordionItemPanel>
              </AccordionItem>
        </Accordion>
      </div>
    )}
  });

export default Filter;
