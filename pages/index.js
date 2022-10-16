/**
 * @Imports
 */
import Head from 'next/head';
import TitleBox from '../components/TitleBox';
import DaySelector from '../components/DaySelector';
import TimeSelector from '../components/TimeSelector';
import styles from '../styles/Home.module.css';

import { useState } from 'react';

/**
 * @Page Root page 
 */
const Home = () => {
  const [startTime, setStartTime] = useState("Start Time");
  const [endTime, setEndTime] = useState("End Time");
  return (
    <div className={styles.container}>
      <Head>
        <title> findatime </title>
      </Head>

      <main className={styles.main}>
        <h1> Event Title </h1>
        <TitleBox />
      </main>

      <div className={styles.body}>
        <div className={styles.dayselector}>
          <DaySelector />
        </div>
        <div className={styles.timeselector}>
          <TimeSelector timeBound={startTime} setTimeBound={setStartTime} 
                        timeText={"Meet no earlier than..."} key={1} />
          <TimeSelector timeBound={endTime} setTimeBound={setEndTime} 
                        timeText={"Meet no later than..."} key={2} />
        </div>
      </div>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;