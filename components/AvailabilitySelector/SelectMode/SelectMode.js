import React from 'react'

const SelectMode = ({ onChangeAvailabilityMode, availabilityMode }) => {
    return (
        <select onChange={onChangeAvailabilityMode} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="Specific Dates">Specific Dates</option>
            <option value="Days Of The Week">Days of the Week</option>
        </select>
    )
}

export default SelectMode