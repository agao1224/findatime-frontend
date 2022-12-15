
/**
 * @Component Select days for event planning
 */
 const DaySelector = ({days, setDays}) => {
  const handleDayChange = (event) => {
    // Check if selected day is in array
    if (event.target.checked) {
      setDays([
        ...days,
        event.target.value
      ])
    } else {
      setDays(
        days.filter((day) => (day != event.target.value)),
      );
    }
  }

  return (
    <div>
      <div className="list-group">
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="M" 
           onChange={(event) => handleDayChange(event)}/>
          Monday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="T" 
           onChange={(event) => handleDayChange(event)}/>
          Tuesday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="W" 
           onChange={(event) => handleDayChange(event)}/>
          Wednesday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="Th" 
           onChange={(event) => handleDayChange(event)}/>
          Thursday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="F" 
           onChange={(event) => handleDayChange(event)}/>
          Friday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="Sat" 
           onChange={(event) => handleDayChange(event)}/>
          Saturday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="Sun" 
           onChange={(event) => handleDayChange(event)}/>
          Sunday
        </label>
      </div>
    </div>
  )
}

export default DaySelector;