
/**
 * @Component Select days for event planning
 */
 const DaySelector = () => {
  return (
    <div>
      <div className="list-group">
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Monday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Tuesday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Wednesday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Thursday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Friday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Saturday
        </label>
        <label className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" />
          Sunday
        </label>
      </div>
    </div>
  )
}

export default DaySelector;