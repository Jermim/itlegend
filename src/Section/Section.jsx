import styles from './Section.module.scss'

function Section({ title, children }) {
  return (
    <div className={styles.Section}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Section