import React, { useContext, useState } from "react";
import simpleContext from "../simpleContext/simpleContext";
const Header = () => {
  const [getClock, setClock] = useState();
  const myclock = () => {
    const d = new Date();
    const t = d.toLocaleTimeString();
    setClock(t);
  };
  setInterval(myclock, 1000);
  const context = useContext(simpleContext);
  return (
    <div className="alert alert-primary card-header d-flex align-items-center flex-column ">
      <h1 className="card-title ">{context.headerr}</h1>
      <br />
      <h6>{getClock}</h6>
    </div>
  );
};

export default Header;
