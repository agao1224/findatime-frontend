/**
 * @Imports
 */
import styles from '../styles/TitleBox.module.css';

/**
 * @Component Event Name title field
 */
const TitleBox = () => {
  return (
    <div>
      <input className = {styles.titlebox} type="text" 
             name="Event-Title" placeholder="Enter event title" 
      />
    </div>
  )
}

export default TitleBox;