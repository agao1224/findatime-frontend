/**
 * @Imports
 */
import Head from 'next/head';
import DaySelector from '../components/DaySelector';
import TimeSelector from '../components/TimeSelector';
import styles from '../styles/Home.module.css';
import AvailabilitySelector from '../components/AvailabilitySelector/AvailabilitySelector';
import 'tachyons';

import { useState } from 'react';

/**
 * @Page Root page 
 */
const Home = () => {
  const [days, setDays] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [startTime, setStartTime] = useState("Start Time");
  const [endTime, setEndTime] = useState("End Time");

  const convertStrToTime = (time) => {
    // Look at last two indices, AM or PM 
    const strLen = time.length;
    const amOrPM = time.charAt(strLen-2) + "" + time.charAt(strLen-1);

    let militaryTime = 0;
    if (amOrPM === "PM") {
      militaryTime += 1200 
    }

    let offset = 0;
    // Look at first two indices, check if the second is ":" or number
    if (time.charAt(1) === ":") {
      offset = (parseInt(time.charAt(0)))
    } else {
      offset = parseInt((time.charAt(0) + "" + time.charAt(1)));
    }
    offset = offset * 100;
    return (militaryTime + offset);
  }

  const createEvent = async () => {
    const eventObj = {
      name: eventTitle,
      days: days,
      startTime: convertStrToTime(startTime),
      endTime: convertStrToTime(endTime)
    }
    
    console.log(eventObj);

    const createEventResponse = await fetch("http://localhost:5000/events", {
      method: "POST",
      body: JSON.stringify(eventObj),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const createEventData = await createEventResponse.json();
    alert(`Event Created! Event link: ${createEventData.uri}`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title> findatime </title>
      </Head>

      <main className={styles.main}>
        <h1> Name your Event! </h1>
        <div className={styles.titlebox}>
          <div className="form-floating">
            <input className="form-control form-control-lg" type="text" 
                  placeholder=".form-control-lg" 
                  aria-label=".form-control-lg example"
                  value={eventTitle}
                  onChange={(event) => setEventTitle(event.target.value)}
            />
          </div>
        </div>
      </main>

      <div className={styles.body}>
        <div className='pa5 center'>
          <AvailabilitySelector />
        </div>
        <div className={styles.timeselector}>
          <TimeSelector timeBound={startTime} setTimeBound={setStartTime} 
                        timeText={"Meet no earlier than..."} key={1} />
          <TimeSelector timeBound={endTime} setTimeBound={setEndTime} 
                        timeText={"Meet no later than..."} key={2} />
        </div>
      </div>
      
      <div className={styles.createbutton}>
        <button type="button" className="btn btn-success btn-lg"
         onClick={createEvent}>
          Create Event!
        </button>
      </div>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home;