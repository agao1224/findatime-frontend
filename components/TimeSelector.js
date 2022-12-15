/**
 * @Imports
 */
import styles from '../styles/TimeSelector.module.css';

/**
 * @Component TimeSelector 
 */
const TimeSelector = ({timeBound, setTimeBound, timeText}) => {
  const convertTimeToText = (time) => {
    let timeText = "";
    let ampmStatus = "";
    if (time == 0) {
      ampmStatus = "AM"
      time += 12;
    } else if (time < 12) {
      ampmStatus = "AM";
    } else if (time == 12) {
      ampmStatus = "PM";
    } else if (time == 24) {
      ampmStatus = "AM";
      time -= 12;
    } else {
      ampmStatus = "PM";
      time -= 12;
    } 

    return timeText.concat(time.toString().concat(":00")).concat(" ").concat(ampmStatus);
  }

  const createTimesArray = (hrs) => {
    const timesArray = []
    for (let i = 0; i <= hrs; i++) {
      timesArray.push(convertTimeToText(i));
    }
    return timesArray;
  }

  const timesArray = createTimesArray(24);
  return (
    <div className={styles.selector}>
      <h5 className={styles.timetext}>
        {timeText}
      </h5>
      <div className="btn-group dropend">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {timeBound}
        </button>
        <ul className="dropdown-menu" style={{height: "10rem", overflowY: "auto"}}>
          {timesArray.map((time) =>
            <li key={Math.random()}>
              <a className="dropdown-item" href="#" key={Math.random()} onClick={() => setTimeBound(time)}> 
                {time}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TimeSelector;