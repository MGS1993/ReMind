import React from 'react';
import styles from './Input.module.css';


const Input = (props) => {


  return(
    <div className={styles.inputWrapper}>
      <form onSubmit={props.handleSubmit}>
      <p><input type="text" placeholder='title' name='reminderTitle' onChange={props.handleTitle}/></p>
      <p><input type="text" placeholder='description' name='reminderDescription' onChange={props.handleDescription}/></p>
      <p><input type="date" placeholder='dueDate' name='reminderDueDate' onChange={props.handleDueDate}/></p>
      <p><button>Submit</button></p>
      </form>
    </div>
  )
}

export default Input