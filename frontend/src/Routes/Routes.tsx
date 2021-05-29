import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Learning from "../Pages/LearningPage";

export default function Routes() {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/" exact>
        <button
          onClick={() => {
            history.push("/learning");
          }}
        >
          Go to Learning
        </button>
      </Route>

      <Route path="/learning">
        <Learning />
      </Route>
    </Switch>
  );
}
