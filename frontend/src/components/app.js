import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import MainPageContainer from "./main/main_page_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div>
		<nav>
   		<NavBarContainer />
		</nav>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/" component={MainPageContainer} />
    </Switch>
  </div>
);

export default App;
