import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AddUser from '../pages/Team/AddUser';
import EditUser from '../pages/Team/EditUser'
import Train from '../pages/Train/Train';
import EditTrain from '../pages/Train/EditTrain';
import Contact from './Contact';
import LoginPage from '../pages/LoginPage';
import Tasks from '../pages/Tasks/Tasks.js';
import AddTask from '../pages/Tasks/AddTask';
import EditTasksList from '../pages/Tasks/EditTasksList';
import EditTask from '../pages/Tasks/EditTask';
import Schedule from '../pages/Schedule/Schedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule/Form.js';
import EditScheduleList from '../pages/Schedule/EditSchedule/EditScheduleList.js';
import Table from '../pages/Schedule/EditSchedule/Table.js';
import Team from '../pages/Team/Table';
import UserInfo from '../pages/Team/UserInfo';
import PageNotFound from '../pages/PageNotFound';

const Page = () => {
  return (
    <section>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/druzyna' exact component={Team} />
        <Route path='/druzyna/dodaj' component={AddUser} />
        <Route path='/druzyna/edytuj' component={EditUser} />
        <Route path='/druzyna/:id' component={UserInfo} />
        <Route path='/kontakt' component={Contact} />
        <Route path='/zadania' exact component={Tasks} />
        <Route path='/zadania/dodaj' component={AddTask} />
        <Route path='/zadania/edytuj' exact component={EditTasksList} />
        <Route path='/zadania/edytuj/:id' component={EditTask} />
        <Route path='/harmonogram' exact component={Schedule} />
        <Route path='/harmonogram/stworz' component={CreateSchedule} />
        <Route path='/harmonogram/edytuj' exact component={EditScheduleList} />
        <Route path='/harmonogram/edytuj/:id' component={Table} />
        <Route path='/cwiczenia' exact component={Train} />
        <Route path='/cwiczenia/edytuj' component={EditTrain} />
        <Route component={PageNotFound} />
      </Switch>
    </section>
  );
};

export default Page;
