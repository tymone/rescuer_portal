import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Schedule from "../pages/Schedule/Schedule";
import CreateSchedule from "../pages/Schedule/CreateSchedule/Form";
import Table from "../pages/Schedule/EditSchedule/Table";
import EditScheduleList from "../pages/Schedule/EditSchedule/EditScheduleList";
import Team from "../pages/Team/Table";
import AddUser from "../pages/Team/AddUser";
import EditUser from "../pages/Team/EditUser";
import UserInfo from "../pages/Team/UserInfo";
import Train from "../pages/Train/Train";
import EditTrain from "../pages/Train/EditTrain";
import Tasks from "../pages/Tasks/Tasks";
import AddTask from "../pages/Tasks/AddTask";
import EditTasksList from "../pages/Tasks/EditTasksList";
import EditTask from "../pages/Tasks/EditTask";
import Contact from "./Contact";
import PageNotFound from "../pages/PageNotFound";

const Page = () => (
  <section>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/harmonogram" exact component={Schedule} />
      <Route path="/harmonogram/stworz" component={CreateSchedule} />
      <Route path="/harmonogram/edytuj/:id" component={Table} />
      <Route path="/harmonogram/edytuj" exact component={EditScheduleList} />
      <Route path="/druzyna" exact component={Team} />
      <Route path="/druzyna/dodaj" component={AddUser} />
      <Route path="/druzyna/edytuj" component={EditUser} />
      <Route path="/druzyna/:id" component={UserInfo} />
      <Route path="/cwiczenia" exact component={Train} />
      <Route path="/cwiczenia/edytuj" component={EditTrain} />
      <Route path="/zadania" exact component={Tasks} />
      <Route path="/zadania/dodaj" component={AddTask} />
      <Route path="/zadania/edytuj" exact component={EditTasksList} />
      <Route path="/zadania/edytuj/:id" component={EditTask} />
      <Route path="/kontakt" component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </section>
);

export default Page;
