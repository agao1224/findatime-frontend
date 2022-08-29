/**
 * @Imports
 */
import styles from '../styles/TitleBox.module.css';

/**
 * @Component Event Name title field
 */
const TitleBox = () => {
  return (
    <div className={styles.titlebox}>
      <div className="form-floating">
        <input className="form-control form-control-lg" type="text" 
               placeholder=".form-control-lg" 
               aria-label=".form-control-lg example"
        />
      </div>
    </div>
  )
}

export default TitleBox;