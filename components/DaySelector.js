
/**
 * @Component Select days for event planning
 */
const DaySelector = () => {
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Monday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Tuesday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckDefault">
          Wednesday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Thursday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Friday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Saturday
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
          Sunday
        </label>
      </div>
    </div>
  )
}

export default DaySelector;