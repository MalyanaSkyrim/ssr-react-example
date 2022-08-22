import React from "react";
import { Provider } from "react-redux";
import { Route, StaticRouter, Switch } from "react-router-dom";
import store from "./redux/store";
import ListReposContainer from "./components/ListReposContainer";
import RepoOwnerContainer from "./components/RepoOwnerContainer";

function App() {
  return (
    <Provider store={store}>
      <StaticRouter>
      <Switch>
        <Route exact path='/' component={ListReposContainer} />
        <Route exact path='/user/:username' component={RepoOwnerContainer} />
      </Switch>
      </StaticRouter>
    </Provider>
  );
}

export default App;
