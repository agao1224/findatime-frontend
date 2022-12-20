/**
 * @Imports 
 */
import styles from '../styles/AvailabilitySelector.module.css';
import React from 'react';

import ScheduleSelector from 'react-schedule-selector'

const dayToStartDate = (day) => {
  // Basically arbitarily picked some date and just use it to label
  // days of the week
  let dayInISO = "";
  switch (day) {
    case "M":
      dayInISO = "2022-12-19T23:10:47+0000";
      break;
    case "T":
      dayInISO = "2022-12-20T23:10:47+0000";
      break;
    case "W":
      dayInISO = "2022-12-21T23:10:47+0000";
      break;
    case "Th":
      dayInISO = "2022-12-22T23:10:47+0000";
      break;
    case "F":
      dayInISO = "2022-12-23T23:10:47+0000";
      break;
    case "S":
      dayInISO = "2022-12-24T23:10:47+0000";
      break;
    case "Su":
      dayInISO = "2022-12-25T23:10:47+0000";
      break; 
    default: 
      console.log("Invalid day of week selected.");
      throw new Error("Invalid day of week selected.");
  }
  return dayInISO;
}

const availToSelection = (availArray) => {
  // [ {user: “Andrew”, times: [ { day: “M”, start: 900, end: 1000 } ] 	} ]
  
}

const selectionToAvail = (schedule) => {

}


class AvailabilitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: []
    }
  }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule });
    console.log(newSchedule);
    // console.log(typeof newSchedule[0]);
    // console.log(newSchedule[0].getHours());
    // console.log(newSchedule[1].getHours());
  }

  render() {
    return (
      <div className={styles.availwrapper}>
      {(this.props.daysSelected).map((day) => 
        { 
          let currStartDate = "2022-12-18T23:10:47+0000";
          try {
            currStartDate = dayToStartDate(day);
          } catch (e) {
            console.log("ERROR: Unexpected day value found");
          }
          return (
            <ScheduleSelector
              selection={this.state.schedule}
              numDays={1}
              minTime={this.props.startTime/100}
              maxTime={this.props.endTime/100}
              hourlyChunks={1}
              onChange={this.handleChange}
              dateFormat={"dddd"}
              startDate={currStartDate}/>
          )
        }
      )}
      </div>
    )
  }
}

export default AvailabilitySelector; 
