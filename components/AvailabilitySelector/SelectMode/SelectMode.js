import React from 'react'

const SelectMode = ({ onChangeAvailabilityMode }) => {
    return (
        <select onChange={onChangeAvailabilityMode}>
            <option value='Specific Dates'>Specific Dates</option>
            <option value='Days Of The Week'>Days of the Week</option>
        </select>
    )
}

export default SelectMode