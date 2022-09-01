import React, { useState } from "react";
import "./styles.css";

const travelDb = {
  Beaches: [
    {
      name: "Rushikonda Beach",
      special: "Beaches are like heaven and peace",
      rating: "5/5"
    },
    {
      name: "Marina Beach",
      special: "Beaches are the best places to visit anytime ",
      rating: "4/5"
    },
    {
      name: "Kovalam",
      special: "Kovalam, Kerala is one of the best beaches to visit",
      rating: "5/5"
    }
  ],
  Summer: [
    {
      name: "Shimla",
      special: "Shimla should be visited in summer ",
      rating: "4/5"
    },
    {
      name: "Munnar",
      special: "This hill station munnar is famous for its tea estates",
      rating: "4/5"
    },
    {
      name: "Ooty",
      special:
        "For every mountain lover, the very idea of travelling to is ooty",
      rating: "4/5"
    }
  ],
  Winter: [
    {
      name: "Vanjangi",
      special: "Vanjangi is famous to see the sunrises",
      rating: "5/5"
    },
    {
      name: "Araku",
      special: "Best time to visit araku is winter",
      rating: "5/5"
    },
    {
      name: "Manali",
      special: "Manali, Himachal Pradesh for sure to be visited",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [places, setPlaces] = useState("Beaches");

  function btnClicked(e) {
    setPlaces(e.target.innerText);
  }
  return (
    <>
      <div className="App">
        <h1>Best places</h1>
        <p>
          Best places to visit once in lifetime.Click on the below genres to get
          started.
        </p>
        <div>
          <button onClick={btnClicked} className="btn">
            Beaches
          </button>
          <button onClick={btnClicked} className="btn">
            Summer
          </button>
          <button onClick={btnClicked} className="btn">
            Winter
          </button>
        </div>
        {travelDb[places].map((Beaches) => {
          return (
            <div key={Beaches.name} className="container">
              <h3>{Beaches.name}</h3>
              <p>Famous for: {Beaches.special}</p>
              <p>Rating: {Beaches.rating}</p>
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
