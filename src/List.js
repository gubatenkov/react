import React from "react";

const List = ({ people }) => {
  return (
    <>
      <ul className="list">
        {people.map((persona) => {
          return (
            <li key={persona.id} className="person">
              <img src={persona.image} alt={persona.name} />
              <div>
                <h4>{persona.name}</h4>
                <p>{persona.age} рочкив</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
