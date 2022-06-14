import React from "react";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./componets/Home/Home";
import Auth from "./componets/Auth/Auth";
import Navbar from "./componets/NavBar/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
