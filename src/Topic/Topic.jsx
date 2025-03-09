import styles from './Topic.module.scss'

function Topic({ title, description, items }) {
  return (
    <div className={styles.Topic}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.TopicItems}>
        {items.map((item, i) => {
          return <div key={i}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ width: 20, verticalAlign: 'middle' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
            <span style={{ flex: 1 }}>{item.title}</span>
            <div className={styles.Icons}>
              {item.green && <span className={styles.Green}>{item.green}</span>}
              {item.red && <span className={styles.Red}>{item.red}</span>}
            </div>

            {!item.unlocked && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" style={{ width: 20 }}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>}
          </div>
        })}
      </div>
    </div>
  )
}

export default Topic