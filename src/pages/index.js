import React from "react"
import ReactMarkdown from "react-markdown"
import Title from "../components/title"
import Section from "../components/section"
import Container from "../components/container"
import DevelopmentJob from "../components/developmentJob"
import OtherJob from "../components/otherJob"
import Education from "../components/education"
import Overview from "../components/overview"
import { summary } from "../content/introduction"
import { developmentExperience, unrelatedExperience } from "../content/experience"
import education from "../content/education"
import styles from "./resume.module.scss"

let mergeUnique = (arr1, arr2) => {
  let result = JSON.parse(JSON.stringify(arr1));
  arr2.forEach(item => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

export default () => {
  let devJobs = developmentExperience.map((job, i, arr) => {
    let item = JSON.parse(JSON.stringify(job));

    if (i + 1 < arr.length && item.employer === arr[i + 1].employer) {
      item.dateRange.from = arr[i + 1].dateRange.from;

      item.languages = undefined;
      item.technologies = undefined;
    }

    if (i > 0 && item.employer === arr[i - 1].employer) {
      item.employer = undefined;
      item.dateRange = undefined;

      item.languages = mergeUnique(arr[i - 1].languages, job.languages);
      item.technologies = mergeUnique(arr[i - 1].technologies, job.technologies);
    }

    return item;
  });

  return (
    <Container className={styles.resume} size="medium">
      <Title />
      <div className={styles.content}>
        <Section title="Bio" className={styles.bio}><ReactMarkdown source={summary} /></Section>
        <Section title="Overview" className={styles.overview}>
          <Overview />
        </Section>
        <Section title="Experience" className={styles.experience}>
          {devJobs.map((job) => 
            <DevelopmentJob key={job.id} earliestDate="2003-09-01" {...job} />
          )}
        </Section>
        <Section title="Additional Experience" className={styles.additionalExperience}>
          {unrelatedExperience.map((job) => 
            <OtherJob key={job.id} earliestDate="2003-09-01" {...job} />
          )}</Section>
        <Section title="Education" className={styles.education}>
          <Education {...education} earliestDate="2003-09-01" />
        </Section>
      </div>
    </Container>
  );
}