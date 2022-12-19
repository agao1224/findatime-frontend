/**
 * @Imports 
 */
import styles from '../styles/EventPage.module.css'

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import LoginForm from '../components/LoginForm';
import AvailabilitySelector from '../components/AvailabilitySelector';

/**
 * @Component Page to render event information given specific
 *        event ID (uri)
 */
const EventPage = () => {
  const [eventInfo, setEventInfo] = useState({
    name: "",
    days: [],
    startTime: 0,
    endTime: 2400
  });
  const { query, isReady } = useRouter();
  const [link, setLink] = useState("Copy meeting link");
  const [loaded, setLoaded] = useState(false);

  const [loginStatus, setLoginStatus] = useState(false);
  const [accessToken, setAccessToken] = useState("");

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
        <a style={{ cursor:"pointer", color: "#3366CC" }} href={null}
           onClick={() => {
            navigator.clipboard.writeText(`http://localhost:3000/${query.eventID}`);
            setLink("Link copied!");
           }}>
          {link}
        </a>
        <div className={styles.eventcontainer}>
          <div className={styles.eventlogin}>
            <LoginForm loginStatus={loginStatus} setLoginStatus={setLoginStatus}
                        eventURI={query.eventID} accessToken={accessToken} setAccessToken={setAccessToken}/>
          </div>
          <div className={styles.availselect}>            
            <AvailabilitySelector daysSelected={eventInfo.days} />
          </div>
        </div>
      </div>
    )
  } else {
    return <div> Loading... </div>
  }
}

export default EventPage;