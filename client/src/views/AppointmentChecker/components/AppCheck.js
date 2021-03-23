import React, { useState } from "react";
import { listenForOpening } from "../../../actions/listenAction";
import "./styles/AppCheck.css";

function AppCheck() {
  const [run, setRun] = useState(false);
  let count = 1;

  const toggle = () => {
    setRun(!run);
    console.log("toggle");
  };

  const appListen = async (event) => {
    event.preventDefault();

    while (run) {
      await runListen();
      console.log(run);
      await new Promise((r) => setTimeout(r, 30000));
    }
  };

  const runListen = async () => {
    await listenForOpening(run, setRun);
    console.log(count++);
  };

  return (
    <form className="app-check" onSubmit={appListen}>
      <h1>Looking for COVID-19 Appointment Openings?</h1>
      <button onClick={toggle} type="submit">
        {run ? "Stop" : "Alert Me"}
      </button>
    </form>
  );
}

export default AppCheck;
