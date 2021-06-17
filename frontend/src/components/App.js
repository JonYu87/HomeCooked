import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/RouteUtil";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "./nav/NavbarContainer";
import MapBox from "./map/map_container";
import BusinessContainer from "./business/BusinessContainer";
import MainPageContainer from "./main/MainPageContainer";
import Modal from "../components/modal/Modal";
import BusinessesContainer from "./business/BusinessesContainer";

const App = () => (
  <div>
    <Modal />
        <nav>
          <NavBarContainer />
        </nav>
        <Switch>
					<Route exact path="/homecooks" component={BusinessesContainer} />
					<Route exact path="/homecook/:id" component={BusinessContainer} />
          <Route exact path="/" component={MainPageContainer} />
					<Redirect to="/" />
        </Switch>
  </div>
);

export default App;
