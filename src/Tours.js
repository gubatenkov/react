import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, filterTours }) => {
  return (
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} filterTours={filterTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
