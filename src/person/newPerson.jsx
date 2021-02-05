import React from "react";
import simpleContext from "../simpleContext/simpleContext";
const NewPerson = () => {
  return (
    <simpleContext.Consumer>
      {(context) => (
        <div className="card-body d-flex flex-column align-items-sm-center half-width">
          <input
            type="text"
            className="form-control mb-1 w-50"
            onChange={(e) => context.setName(e.target.value)}
            placeholder={"name"}
            value={context.getName}
          ></input>
          <input
            type="text"
            className="form-control mb-1 w-50"
            onChange={(e) => context.setLastname(e.target.value)}
            placeholder={"lastname"}
            value={context.getLastname}
          ></input>
          <input
            type="number"
            className="form-control mb-1 w-50"
            onChange={(e) => context.setNumber(e.target.value)}
            placeholder={"Phone"}
            value={context.getNumber}
          ></input>
          <button
            type="submit"
            onClick={context.handleAddPerson}
            className="btn btn-bg-2  btn-success fa fa-plus w-50"
          />
        </div>
      )}
    </simpleContext.Consumer>
  );
};

export default NewPerson;
