import React, {useEffect} from 'react';
import styles from './Layout.module.css';


const Layout = ( props ) => {

  useEffect(()=> {
    console.log('[Layout.js] rendering...')
  })
  return (
    <div className={styles.mainWrapper}>
      {props.children}
    </div>
  )

}

export default Layout