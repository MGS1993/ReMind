import React from 'react';
import styles from './Item.module.css';
import greenArrow from '../../Assets/Images/greenArrow.png';

const Item = (props) => (
  <div className={styles.itemWrapper}>
    <div className={styles.itemHeader}>
      <div className={styles.imgWrapper} onClick={props.clicked}><img className={styles.checkMark} src={greenArrow} alt="green check mark"/></div>
      <p className={styles.title}>{props.title}</p>
    </div>
    <div className={styles.itemContent}>
      <div className={styles.description}>
        <p> {props.description}</p>
      </div>
      <div className={styles.dueDate}>
        <p>DueDate: {props.dueDate}</p>
      </div>
      
    </div>
    
  </div>
)


export default Item