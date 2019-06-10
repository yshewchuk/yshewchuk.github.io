import React from "react"
import Activity from "../components/activity"
import styles from "./education.module.scss"

export default (props) => {
  return (
    <Activity 
      id={props.id}
      title={props.title}
      earliestDate={props.earliestDate}
      dateRange={props.dateRange}
      location={props.employer}
      data={[
        {heading: "Courses", items: props.courses, class: styles.courses},
        {heading: "Accomplishments", items: props.accomplishments, class: styles.accomplishments}
      ]} />
    )
}
