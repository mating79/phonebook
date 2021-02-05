import React, { useContext } from "react";
import simpleContext from "../simpleContext/simpleContext";
const PersonCount = () => {
  const context = useContext(simpleContext);
  return (
    <div>
      <div
        className={
          context.getPersons.length < 2
            ? "card-footer  d-flex justify-content-center alert-danger"
            : "card-footer  d-flex justify-content-center alert-success"
        }
      >
        <h4>The Number of Person is: {context.getPersons.length}</h4>
      </div>
    </div>
  );
};

export default PersonCount;
