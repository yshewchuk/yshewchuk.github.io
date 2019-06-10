import React from "react"
import Activity from "../components/activity"
import styles from "./developmentJob.module.scss"

export default (props) => {
  let data = [];
  if (props.accomplishments) {
    data.push({heading: "Accomplishments", items: props.accomplishments, class: styles.accomplishments});
  }
  if (props.languages) {
    data.push({heading: "Languages", items: props.languages, class: styles.languages});
  }
  if (props.technologies) {
    data.push({heading: "Technologies", items: props.technologies, class: styles.technologies});
  }

  return (
    <Activity 
      id={props.id}
      title={props.title}
      earliestDate={props.earliestDate}
      dateRange={props.dateRange}
      location={props.employer}
      data={data} />
    )
}
