import React, { useState } from "react";
import { toast } from "react-toastify";
import simpleContext from "../simpleContext/simpleContext";

const GlobalState = (props) => {
  var uniqid = require("uniqid");
  const [getPersons, setPersons] = useState([]);
  const [getName, setName] = useState("");
  const [getLastname, setLastname] = useState("");
  const [getNumber, setNumber] = useState("");
  const headerr = "Personal Manager";

  const handleAddPerson = () => {
    const persons = [...getPersons];
    if (
      getName == "" ||
      getLastname == "" ||
      getLastname == " " ||
      getName == " "
    ) {
      toast.warning("Please Insert Your Name Or Lastname");
    } else {
      const person = {
        id: uniqid(),
        name: getName,
        lastname: getLastname,
        number: getNumber,
      };
      persons.push(person);
      setPersons(persons);
      toast.success("Person Added", {
        position: "bottom-center",
      });
      setName("");
      setLastname("");
      setNumber("");
    }
  };

  const handleDeletePerson = (id) => {
    const Persons = [...getPersons];
    const personsFillter = Persons.filter((p) => p.id !== id);
    setPersons(personsFillter);
    toast.error("Person Deleted!", {
      position: "bottom-center",
    });
  };

  const handleEditPerson = (e, id) => {
    const persons = getPersons;
    const personFind = persons.findIndex((p) => p.id === id);
    const personEdit = persons[personFind];
    personEdit.number = e.target.value;
    persons[personFind] = personEdit;
    const allPersons = [...persons];
    setPersons(allPersons);
  };

  return (
    <div>
      <simpleContext.Provider
        value={{
          setName: setName,
          setLastname: setLastname,
          getPersons: getPersons,
          getName: getName,
          setNumber: setNumber,
          getNumber: getNumber,
          getLastname: getLastname,
          handleAddPerson: handleAddPerson,
          handleEditPerson: handleEditPerson,
          handleDeletePerson: handleDeletePerson,
          headerr: headerr,
        }}
      >
        {props.children}
      </simpleContext.Provider>
    </div>
  );
};

export default GlobalState;
