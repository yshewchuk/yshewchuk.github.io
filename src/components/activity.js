import React from "react"
import DateRange from "./dateRange"
import classNames from "classnames"
import styles from "./activity.module.scss"

export default (props) => {
  return (
    <section className={classNames(styles.activity, props.className)}>
      {props.dateRange ? <DateRange 
        id={props.id + "-date"} 
        className={styles.dateRange} 
        textModifier={styles.smallText}
        earliestDate={new Date(props.earliestDate)} 
        latestDate={new Date()} 
        from={new Date(props.dateRange.from)} 
        to={props.dateRange.to ? new Date(props.dateRange.to) : new Date()} /> : ""}
      <h1>{props.title}</h1>
      {props.location ? <h2>{props.location}</h2> : ""}
      {props.data.map((segment) => 
        <div key={segment.heading} className={segment.class}>
          <h3>{segment.heading}</h3>
          <ul>
            {segment.items.map((item) => 
              <li key={item}>{item}</li>
              )}
          </ul>
        </div>
        )}
      {props.children}
    </section>
    )
}
