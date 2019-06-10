import React from "react"
import person from "../content/person.json"
import styles from "./title.module.scss"

export default (props) => {
  return (
    <div className={styles.container}>
      <h1>{person.first} {person.last}</h1>
      <address>
        <span className={styles.mailing}>{person.address.line1}</span>
        <span className={styles.mailing}>{person.address.line2}</span>
        <span className={styles.mailing}>{person.address.city}, {person.address.province}</span>
        <span className={styles.mailing}>{person.address.postalCode}</span>
        <span className={styles.email}><a href={"mailto:" + person.contact.email}>{person.contact.email}</a></span>
        <span className={styles.phone}><a href={"tel:" + person.contact.phone.pure}>{person.contact.phone.display}</a></span>
      </address>
    </div>
    )
}
