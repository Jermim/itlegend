import styles from './Video.module.scss'

function Video({ src }) {
  return (
    <div className={styles.Video}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vN4iSTbNnfQ?si=ENWo6d3IXVJKxTni&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Video