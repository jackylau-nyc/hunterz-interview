import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import LinkedInPreview from "./views/LinkedInPreview/LinkedInPreview";
import AppointmentChecker from "./views/AppointmentChecker/AppointmentChecker";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LI_PREVIEW} exact>
          <LinkedInPreview />
        </Route>
        <Route path={ROUTES.APP_CHECKER} exact>
          <AppointmentChecker />
        </Route>
      </Switch>
    </Router>
  );
}
