import styles from './Comment.module.scss'

function Comment({ image, name, date, comment }) {
  return (
    <div className={styles.Comment}>
      <img className={styles.Image} src={image} alt={name} />
      <div className={styles.Details}>
        <div className={styles.Name}>{name}</div>
        <div className={styles.Date}>{date}</div>
        <div className={styles.Text}>{comment}</div>
      </div>
    </div>
  )
}

export default Comment