import React from "react";
import Persons from "./person/persons";
import { ToastContainer } from "react-toastify";
import Header from "./header/Header";
import PersonCount from "./header/personCount";
import NewPerson from "./person/newPerson";

const App = () => {
  return (
    <div className="card container p-2 mt-2 w-75">
      <Header />
      <PersonCount />
      <NewPerson />
      <Persons />
      <ToastContainer />
    </div>
  );
};

export default App;
