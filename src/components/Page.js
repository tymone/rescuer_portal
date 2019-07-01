import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Team from "../pages/Team";
import Contact from "./Contact";
import LoginPage from "../pages/LoginPage";
import Tasks from "../pages/Tasks.js";

const Page = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/druzyna" component={Team} />
        {/* <Route path='/druzyna/edytuj/:id' component={Edit} /> */}
        <Route path="/kontakt" component={Contact} />
        <Route path="/zadania" component={Tasks} />
      </Switch>
    </section>
  );
};

export default Page;
