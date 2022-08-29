/**
 * @Imports
 */
import Head from 'next/head';
import TitleBox from '../components/TitleBox';
import DaySelector from '../components/DaySelector';
import TimeSelector from '../components/TimeSelector';
import styles from '../styles/Home.module.css';

/**
 * @Page Root page 
 */
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> findatime </title>
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
        <h1> Event Title </h1>
        <TitleBox />
      </main>

      <div className={styles.body}>
        <div className={styles.dayselector}>
          <DaySelector />
        </div>
        <div className={styles.timeselector}>
          <TimeSelector />
          <TimeSelector />
        </div>
      </div>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;