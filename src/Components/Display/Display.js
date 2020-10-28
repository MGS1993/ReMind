import React, {useEffect} from 'react'
import styles from './Display.module.css';


const Display = (props) => {

useEffect(()=> {
  console.log("[Display.js] rendering...")
})
  return (
    <div className={styles.displayWrapper}>
      <div className={styles.displayHeader}>Reminders</div>
      <div className={styles.displayContent}>
        {props.children}
      </div>
    </div>
  )
}

export default React.memo(Display)