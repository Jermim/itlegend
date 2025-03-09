import { useState } from 'react'
import styles from './App.module.scss'
import Header from './Header'
import Progress from './Progress/Progress'
import Topic from './Topic/Topic'
import Video from './Video/Video'
import * as topics from './topics.json'
import * as comments from './comments.json'
import Details from './Details/Details'
import Section from './Section/Section'
import Comment from './Comment/Comment'
import WriteComment from './WriteComment/WriteComment'

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <div className={styles.Body}>
        <div className={styles.Content}>
          <Video src={''} />
          <Section title="Course Materials">
            <Details />
          </Section>
          <Section title="Comments">
            {comments.default.map((comment, i) => <Comment {...comment} key={i} />)}
          </Section>

          <Section title="">
            <WriteComment />
          </Section>
        </div>
        <div className={styles.Sidebar}>
          <h2 style={{ marginTop: 0, paddingTop: 0 }}>Topics for this Course</h2>
          <Progress progress={80} />

          {topics.default.map((topic, i) => <Topic  {...topic} key={i} />)}
        </div>
      </div>
    </div>
  )
}

export default App
