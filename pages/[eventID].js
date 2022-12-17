/**
 * @Imports 
 */
import styles from '../styles/EventPage.module.css'

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

/**
 * @Component Page to render event information given specific
 *        event ID (uri)
 */
const EventPage = () => {
  const [eventInfo, setEventInfo] = useState({});
  const { query, isReady } = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isReady) {
      setLoaded(false);
    } else {
      const eventID = query.eventID;

      fetch(`http://localhost:5000/events/${eventID}`)
        .then(res => res.json())
        .then(data => setEventInfo(data));   

      setLoaded(true);
    }
  }, [isReady]);

  if (loaded) {
    return (
      <div className={styles.eventmain}>
        <h1> {eventInfo.name} </h1>
      </div>
    )
  } else {
    return <div> Loading... </div>
  }
}

export default EventPage;