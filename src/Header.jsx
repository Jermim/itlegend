import { useState } from 'react'
import styles from './App.module.scss'

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Nav}>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Course Details</li>
        </ul>
      </div>
      <h1>Starting SEO as your Home</h1>
    </div>
  )
}

export default Header
