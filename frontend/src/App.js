import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Spin from 'react-reveal/Spin';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';
import Roll from 'react-reveal/Roll';



import Fade from "react-reveal/Fade";

function App() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = () => {
    
    window.location.replace("http://localhost:8000/rest/v1/calendar/init/");
  };

  const handleRedirect = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    setIsLoading(true);
   
    var url = new URL("http://localhost:8000/rest/v1/calendar/redirect");
    url.searchParams.append("code", code);

    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setEvents(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Error fetching events");
        console.log(error);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
      <Fade left>
      <button className="auth-button" onClick={handleAuth}>
        Sign In
      </button>
      </Fade>
   
      <Fade right>
      <button className="get-data-button" onClick={handleRedirect}>
        Calender Data
      </button>
        </Fade>


    
      <Roll left>
      {events.length > 0 && (
        <ul className="events-list">
          {events.map((event) => (
            <li key={event.id} className="event-item">
              <div className="event-summary">{event.summary}</div>
              <div className="event-start-time">{event.start.dateTime}</div>
            </li>
          ))}
        </ul>
      )}
        </Roll>



    </div>
  );
}

export default App;
