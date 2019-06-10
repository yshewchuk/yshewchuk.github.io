import React from "react"
import Activity from "../components/activity"
import styles from "./otherJob.module.scss"

export default (props) => {
  return (
    <Activity 
      id={props.id}
      title={props.title}
      earliestDate={props.earliestDate}
      dateRange={props.dateRange}
      location={props.employer}
      data={[
        {heading: "Responsibilities", items: props.responsibilities, class: styles.responsibilities},
        {heading: "Accomplishments", items: props.accomplishments, class: styles.accomplishments}
      ]} />
    )
}
