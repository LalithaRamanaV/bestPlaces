import React, { useState } from "react";
import "./styles.css";

const travelDb = {
  Vizag: [
    {
      name: "Rushikonda Beach",
      special: "Beaches are like heaven and peace",
      rating: "5/5"
    },
    {
      name: "Vanjangi",
      special: "Vanjangi is famous to see the sunrises",
      rating: "5/5"
    },
    {
      name: "Araku",
      special: "Best time to visit araku is winter",
      rating: "5/5"
    }
  ],
  Chennai: [
    {
      name: "Marina Beach",
      special: "Beaches are the best places to visit anytime ",
      rating: "4/5"
    },
    {
      name: "Guindy National Park",
      special: "This is the place to visit the animals",
      rating: "4/5"
    },
    {
      name: "Government Museum",
      special: "Best place to see the ancient collection",
      rating: "4/5"
    }
  ],
  Banglore: [
    {
      name: "Bangalore Palace",
      special: "This is famous for its architecture",
      rating: "4/5"
    },
    {
      name: "Nandi Hills",
      special: "Perfect location to enjoy nature",
      rating: "4/5"
    },
    {
      name: "Cubbon park",
      special: "Best place to visit because of its greenary ",
      rating: "4/5"
    }
  ]
};

export default function App() {
  var [places, setPlaces] = useState("Vizag");

  function btnClicked(e) {
    setPlaces(e.target.innerText);
  }
  return (
    <>
      <div className="App">
        <h1>Best places</h1>
        <p>
          Best places to visit once in lifetime.Click on the button to get
          started.
        </p>
        <div>
          <button onClick={btnClicked} className="btn">
            Vizag
          </button>
          <button onClick={btnClicked} className="btn">
            Chennai
          </button>
          <button onClick={btnClicked} className="btn">
            Banglore
          </button>
        </div>
        {travelDb[places].map((city) => {
          return (
            <div key={city.name} className="container">
              <h3>{city.name}</h3>
              <p>Famous for: {city.special}</p>
              <p>Rating: {city.rating}</p>
            </div>
          );
        })}
      </div>

      <footer className="footer">
        <div className="footer-header">Connect with me here</div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href="https://github.com/LalithaRamanaV"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>

          <li className="list-item-inline">
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href="https://www.linkedin.com/in/lalithavadavalli/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <p>Copyright Lalitha Vadavalli</p>
      </footer>
    </>
  );
}
