/**
 * @Imports
 */
import styles from '../styles/TitleBox.module.css';
import { useState } from 'react'

/**
 * @Component Event Name title field
 */
const TitleBox = () => {
  const [eventTitle] = useState(0)

  const listenEventTitle = (e) => {
    eventTitle = e.target.value;
  }

  return (
    <div>
      <form Name="Event Title" Action="" Method="GET">
        <input type="text" name="Event-Title" onChange={listenEventTitle} className={styles.titlebox}/>
      </form>
    </div>
  )
}

export default TitleBox;