import React, {useEffect} from 'react';
import styles from './Input.module.css';


const Input = (props) => {

  useEffect(()=> {
    console.log('[input.js] rendering...')
  })
  return(
    <div className={styles.inputWrapper}>
      <form className={styles.form} onSubmit={props.handleSubmit}>
        <div>
          <p><input type="text" className={styles.textInput} placeholder='title' name='reminderTitle' onChange={props.handleTitle}/></p>
        </div>
        <div>
         <p><input type="text" className={styles.textInput} placeholder='description' name='reminderDescription' onChange={props.handleDescription}/></p>
      </div>
         <p><input type="date" className={styles.dateInput} name='reminderDueDate' onChange={props.handleDueDate}/></p>
      <div>
         <p><button className={styles.submitBtn}>Submit</button></p>
      </div>
      </form>
    </div>
  )
}

export default React.memo(Input)