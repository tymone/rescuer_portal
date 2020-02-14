import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Schedule from '../pages/Schedule/Schedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule/CreateSchedule';
import Table from '../pages/Schedule/EditSchedule/Table';
import Team from '../pages/Team/Team';
import AddUser from '../pages/Team/AddUser';
import EditUser from '../pages/Team/EditUser';
import UserInfo from '../pages/Team/UserInfo';
import Train from '../pages/Train/Train';
import Details from '../pages/Train/Details/Details';
import AddTrain from '../pages/Train/AddTrain/AddTrain';
import EditTrain from '../pages/Train/EditTrain/EditTrain';
import Tasks from '../pages/Tasks/Tasks';
import AddTask from '../pages/Tasks/AddTask';
import TaskDetails from '../pages/Tasks/TaskDetails';
import EditTask from '../pages/Tasks/EditTask';
import Contact from './Contact';
import PageNotFound from '../pages/PageNotFound';

const Page = () => (
  <section>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/harmonogram" exact component={Schedule} />
      <Route path="/harmonogram/dodaj" exact component={CreateSchedule} />
      <Route path="/harmonogram/edytuj/:id" component={Table} />
      <Route path="/druzyna" exact component={Team} />
      <Route path="/druzyna/dodaj" component={AddUser} />
      <Route path="/druzyna/edytuj/:id" component={EditUser} />
      <Route path="/druzyna/:id" component={UserInfo} />
      <Route path="/cwiczenia" exact component={Train} />
      <Route path="/cwiczenia/dodaj" component={AddTrain} />
      <Route path="/cwiczenia/:id" exact component={Details} />
      <Route path="/cwiczenia/edytuj/:id" component={EditTrain} />
      <Route path="/zadania" exact component={Tasks} />
      <Route path="/zadania/dodaj" component={AddTask} />
      <Route path="/zadania/:id" exact component={TaskDetails} />
      <Route path="/zadania/edytuj/:id" component={EditTask} />
      <Route path="/kontakt" component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </section>
);

export default Page;
