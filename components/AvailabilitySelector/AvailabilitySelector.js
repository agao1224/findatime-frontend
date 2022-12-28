import React, { Component, useState, useEffect } from 'react';
import SelectMode from './SelectMode/SelectMode'
import SpecificDate from './SpecificDate/SpecificDate'
import DaysOfTheWeek from './DaysOfTheWeek/DaysOfTheWeek'

class AvailabilitySelector extends Component {
    constructor() {
        super()
        this.state = {
            availabilityMode: 'Specific Dates'
        }
    }

    onChangeAvailabilityMode = (event) => {
        this.setState({availabilityMode: event.target.value})
    }
    render() {
        const {availabilityMode} = this.state
        return (
            <div>
                <SelectMode onChangeAvailabilityMode={this.onChangeAvailabilityMode} availabilityMode={availabilityMode}/>
            {
                availabilityMode === 'Specific Dates'
                ? <SpecificDate />
                : <DaysOfTheWeek />
            }
            </div>
        )
    }
}

export default AvailabilitySelector