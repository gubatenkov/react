import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    // console.log(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const filterTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        {tours.length > 0 ? (
          <Tours tours={tours} filterTours={filterTours} />
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>No Tours Left</h2>
            <button
              className="btn"
              style={{ display: "block", margin: "0 auto" }}
              onClick={fetchTours}
            >
              Load tours
            </button>
          </>
        )}
      </main>
    );
  }
}

export default App;
