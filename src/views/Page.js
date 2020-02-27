import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import LoginPage from '../components/LoginPage';
import Schedule from '../components/Schedule/Schedule';
import CreateSchedule from '../components/Schedule/CreateSchedule/CreateSchedule';
import EditSchedule from '../components/Schedule/EditSchedule/EditSchedule';
import Team from '../components/Team/Team';
import AddUser from '../components/Team/AddUser';
import EditUser from '../components/Team/EditUser';
import UserInfo from '../components/Team/UserInfo';
import Train from '../components/Train/Train';
import Details from '../components/Train/Details/Details';
import AddTrain from '../components/Train/AddTrain/AddTrain';
import EditTrain from '../components/Train/EditTrain/EditTrain';
import Tasks from '../components/Tasks/Tasks';
import AddTask from '../components/Tasks/AddTask';
import TaskDetails from '../components/Tasks/TaskDetails';
import EditTask from '../components/Tasks/EditTask';
import Contact from './Contact';
import PageNotFound from '../components/PageNotFound';

const Page = () => (
  <section>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/harmonogram" exact component={Schedule} />
      <Route path="/harmonogram/dodaj" exact component={CreateSchedule} />
      <Route path="/harmonogram/edytuj/:id" component={EditSchedule} />
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
