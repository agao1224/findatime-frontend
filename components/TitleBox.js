/**
 * @Imports
 */
import styles from '../styles/TitleBox.module.css';
import { useState } from 'react'

/**
 * @Component Button for TestSaveTitle
 */
const Button = (props) => {
  return ( 
    <input type="button" name="Create Event Button" value="Check Event Title" onClick={props.onClick} className={styles.button}/>
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
  const [eventTitle] = useState("")

  // Keeps track of the Event Title
  const listenEventTitle = (e) => {
    eventTitle = e.target.value;
    // Debugging: check eventTitle
    console.log(eventTitle)
  }

  // Test if the Event Name is saved
  const TestSaveTitle = () => {
    if (eventTitle === "") {
      alert("Please enter Event name!");
    } else {
      alert("Event: " + eventTitle)
    }
  }

  return (
    <div>
      <TitleBox 
        onChange={listenEventTitle}
      />
      <Button 
        onClick={TestSaveTitle}
      />
    </div>
  )
}

export default renderTitleBox;