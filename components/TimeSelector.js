/**
 * @Imports
 */
import styles from '../styles/TimeSelector.module.css';

/**
 * @Component TimeSelector 
 */
const TimeSelector = () => {
  return (
    <div className={styles.selector}>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Start time 
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">12:00 AM</a></li>
          <li><a className="dropdown-item" href="#">1:00 AM</a></li>
          <li><a className="dropdown-item" href="#">2:00 AM</a></li>
          <li><a className="dropdown-item" href="#">3:00 AM</a></li>
          <li><a className="dropdown-item" href="#">4:00 AM</a></li>
          <li><a className="dropdown-item" href="#">5:00 AM</a></li>
          <li><a className="dropdown-item" href="#">6:00 AM</a></li>
          <li><a className="dropdown-item" href="#">7:00 AM</a></li>
          <li><a className="dropdown-item" href="#">8:00 AM</a></li>
          <li><a className="dropdown-item" href="#">9:00 AM</a></li>
          <li><a className="dropdown-item" href="#">10:00 AM</a></li>
          <li><a className="dropdown-item" href="#">11:00 AM</a></li>
          <li><a className="dropdown-item" href="#">12:00 PM</a></li>
          <li><a className="dropdown-item" href="#">1:00 PM</a></li>
          <li><a className="dropdown-item" href="#">2:00 PM</a></li>
          <li><a className="dropdown-item" href="#">3:00 PM</a></li>
          <li><a className="dropdown-item" href="#">4:00 PM</a></li>
          <li><a className="dropdown-item" href="#">5:00 PM</a></li>
          <li><a className="dropdown-item" href="#">6:00 PM</a></li>
          <li><a className="dropdown-item" href="#">7:00 PM</a></li>
          <li><a className="dropdown-item" href="#">8:00 PM</a></li>
          <li><a className="dropdown-item" href="#">9:00 PM</a></li>
          <li><a className="dropdown-item" href="#">10:00 PM</a></li>
          <li><a className="dropdown-item" href="#">11:00 PM</a></li>
          <li><a className="dropdown-item" href="#">12:00 AM</a></li>
        </ul>
      </div>
    </div>
  )
}

export default TimeSelector;