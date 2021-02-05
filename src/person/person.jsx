import React from "react";
const Person = ({ name, lastname,phone, handleDeletePerson, handleEditPerson }) => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="card m-2 d-flex flex-column align-items-center w-25">
        <div className="d-flex justify-content-center mt-2">
          <p className="">{`${name} ${lastname}`}<br/>{` ${phone}`}</p>
        </div>
        <input
          type="text"
          placeholder="Edit"
          onChange={handleEditPerson}
          className="form-control w-50 mb-1"
        />
        <button
          onClick={handleDeletePerson}
          className="btn btn-bg btn-danger fa fa-trash mb-1 w-50"
        />
      </div>
    </div>
  );
};

export default Person;
