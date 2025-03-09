import styles from './Progress.module.scss'

function Progress({ progress }) {
  return (
    <div className={styles.Progress}>
      <div className={styles.YourProgress} style={{ left: `${progress - 5}%` }}>
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.9874 16C31.9874 24.2608 25.114 31 16.5823 31C8.05061 31 1.17725 24.2608 1.17725 16C1.17725 7.73915 8.05061 1 16.5823 1C25.114 1 31.9874 7.73915 31.9874 16Z" stroke="#C8C8C8" stroke-width="2" />
          <text x="16.5" y="16" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="black">You</text>
        </svg>
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.09496 6L7.20278 0.75H0.98713L4.09496 6Z" fill="#C8C8C8" />
        </svg>
      </div>
      <div className={styles.InnerProgress} style={{ width: `${progress}%` }}></div>
      <div className={styles.Number} style={{ left: `${progress - 3}%` }}>{progress}%</div>
    </div>
  )
}

export default Progress