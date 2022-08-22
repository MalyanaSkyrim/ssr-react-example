import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Switch>
      {routes.map(({ path, exact, component }) => (
        <Route key={path} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  );
}

export default App;
