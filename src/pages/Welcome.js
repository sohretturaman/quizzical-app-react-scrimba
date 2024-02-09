import React from 'react'
import styles from './styles.module.css'
import {useNavigate} from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate(); 
  return (
    <div className={styles.welContainer}>
         <h2>Quizzical</h2>
         <span>Best Quiz App </span>
         <button className={styles.buttonWrapper} 
          onClick={()=> navigate('/home')}
         >Start Quiz</button>
    </div>
  )
}

export default Welcome
