import React, { useState } from "react";
import { listenForOpening } from "../../../actions/listenAction";
import "./styles/AppCheck.css";

function AppCheck() {
  const [run, setRun] = useState(true);

  const appListen = async (event) => {
    event.preventDefault();

    if (run) setRun(false);
    else setRun(true);

    while (run) {
      await runListen();
      await new Promise((r) => setTimeout(r, 30000));
    }
  };

  const runListen = async () => {
    let result = await listenForOpening(run);
    alert(result);
  };

  return (
    <form className="app-check" onSubmit={appListen}>
      <h1>Looking for COVID-19 Appointment Openings?</h1>
      <button type="submit">{!run ? "Stop" : "Alert Me"}</button>
    </form>
  );
}

export default AppCheck;
