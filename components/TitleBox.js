/**
 * @Imports
 */
import styles from '../styles/TitleBox.module.css';
import { useState } from 'react'

/**
 * @Component Create Event Button
 */
const Button = (props) => {
  return ( 
    <input type="button" name="Create Event Button" value="Create Event" onClick={props.onClick} className={styles.button}/>
    )
} 

/**
 * @Component Event Name title field
 */
const TitleBox = (props) => {
  return (
    <form Name="Event Title" Action="" Method="GET">
      <input type="text" name="Event-Title" onChange={props.onChange} className={styles.titlebox}/>
    </form>
  )
}
/**
 * @Component Main Function For TitleBox
 */
const renderTitleBox = () => {
  const [eventTitle] = useState(0)

  // Keeps track of the Event Title
  const listenEventTitle = (e) => {
    eventTitle = e.target.value;

    // Debugging: check eventTitle
    console.log(eventTitle)
  }

  // Creates Event -> 
  const handleCreateEvent = () => {
    if (eventTitle === "") {
      alert("Please enter Event name!");
    } 
    console.log(eventTitle);
  }

  return (
    <div>
      <TitleBox 
        onChange={listenEventTitle}
      />
      <Button 
        onClick={handleCreateEvent}
      />
    </div>
  )
}

export default renderTitleBox;