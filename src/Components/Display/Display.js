import React from 'react'
import styles from './Display.module.css';


const Display = (props) => {


  return (
    <div className={styles.displayWrapper}>
      <div className={styles.displayHeader}>Reminders</div>
      <div className={styles.displayContent}>
        {props.children}
      </div>
    </div>
  )
}

export default Display