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
      <input className={styles.titlebox} 
             name="Event-Title" 
             type="text" 
      />
    </div>
  )
}

export default TitleBox;