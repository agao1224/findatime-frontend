/**
 * @Imports 
 */
import styles from '../styles/AvailabilitySelector.module.css';
import React from 'react';

import ScheduleSelector from 'react-schedule-selector'

class AvailabilitySelector extends React.Component {
  constructor() {
    super();
    this.state = {
      schedule: []
    }
  }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <div className={styles.availwrapper}>
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={1}
          minTime={8}
          maxTime={22}
          hourlyChunks={1}
          onChange={this.handleChange}
          dateFormat={"dddd"}
          startDate={"2022-12-18T22:47:10+0000"}
        />
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={1}
          minTime={8}
          maxTime={22}
          hourlyChunks={1}
          onChange={this.handleChange}
          dateFormat={"dddd"}
          startDate={"2022-12-20T22:47:10+0000"}
        />  
      </div>
    )
  }
}

export default AvailabilitySelector; 
