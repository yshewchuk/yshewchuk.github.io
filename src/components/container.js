import React from "react"
import classNames from "classnames"
import styles from "./container.module.scss"

export default (props) => {
  return (
    <div className={classNames(styles.container, styles[props.size], props.className)}>
      {props.children}
    </div>
    )
}
