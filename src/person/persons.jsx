import React, { useContext } from "react";
import simpleContext from "../simpleContext/simpleContext";
import Person from "./person";
const Persons = () => {
  const context = useContext(simpleContext);
  return (
    <div>
      <div>
        {context.getPersons.map((person) => (
          <Person
            name={person.name}
            lastname={person.lastname}
            phone={person.number}
            handleDeletePerson={() => context.handleDeletePerson(person.id)}
            handleEditPerson={(e) => context.handleEditPerson(e, person.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Persons;
