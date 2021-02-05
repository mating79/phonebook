import { createContext } from "react";
const simpleContext = createContext({
  setname: () => {},
  setLasname: () => {},
  setNumber: () => {},
  getNumber: "",
  getName: "",
  getLastname: "",
  getPersons: [],
  headerr: "",
  handleAddPerson: () => {},
  handleDeletePerson: () => {},
  handleEditPerson: () => {},
});
export default simpleContext;
