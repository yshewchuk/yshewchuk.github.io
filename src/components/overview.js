import React from "react"
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts"
import { languageSkill, technologyKnowledge } from "../content/overview-data.json"
import Interests from "../../static/interests.svg"
import Learning from "../../static/learning.svg"
import Health from "../../static/health.svg"
import Volleyball from "../../static/volleyball.svg"
import classNames from "classnames"
import styles from "./overview.module.scss"
import "./overview.scss"

export default (props) => {
  return (
    <div className={classNames(styles.overview, "overview")}>
      <div>
        <h1>Languages</h1>
        <BarChart width={300} height={220} layout="vertical" data={languageSkill.data}>
          <CartesianGrid horizontal={false} vertical={true} strokeDasharray="4 4" />
          <Bar dataKey="value" fill="black" />
          <YAxis tickLine={false} dataKey="name" type="category" />
          <XAxis tickCount={11} type="number" hide={true} domain={[0, 10]} />
        </BarChart>
      </div>
      <div>
        <h1>Technologies</h1>
        <div className={styles.technologies}>
          {technologyKnowledge.data
              .sort((item1, item2) => item2.value - item1.value)
              .map(item => (
            <div key={item.name} className={classNames(styles.technology, styles["techKnowledge" + item.value * 10])}>{item.name}</div>
          ))}
        </div>
      </div>
      <div>
        <h1>Interests</h1>
        <Interests className={classNames(styles.interests, "interests")} />
      </div>
      <div>
        <h1>Hobbies</h1>
        <div className={styles.hobbies}>
          <div>
            <h2>Learning</h2>
            <Learning className={styles.icon} />
          </div>
          <div>
            <h2>Health &amp; Fitness</h2>
            <Health className={styles.icon} />
          </div>
          <div>
            <h2>Volleyball</h2>
            <Volleyball className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
    )
}
