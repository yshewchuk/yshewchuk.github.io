import React from "react"
import classNames from "classnames"
import styles from "./section.module.scss"

export default (props) => {
  return (
    <section className={classNames(styles.container, props.className)}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </section>
    )
}
