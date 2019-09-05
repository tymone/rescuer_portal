import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Team from '../pages/Team/Team';
import AddUser from '../pages/Team/AddUser';
import Train from '../pages/Train/Train';
import Contact from './Contact';
import LoginPage from '../pages/LoginPage';
import Tasks from '../pages/Tasks/Tasks.js';
import Schedule from '../pages/Schedule/Schedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule';
import EditSchedule from '../pages/Schedule/EditSchedule';
import PageNotFound from '../pages/PageNotFound';

const Page = () => {
  return (
    <section>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/druzyna' exact component={Team} />
        <Route path='/druzyna/dodaj' component={AddUser} />
        <Route path='/kontakt' component={Contact} />
        <Route path='/zadania' component={Tasks} />
        <Route path='/harmonogram' exact component={Schedule} />
        <Route path='/harmonogram/stworz' component={CreateSchedule} />
        <Route path='/harmonogram/edytuj/:id' component={EditSchedule} />
        <Route path='/cwiczenia' component={Train} />
        <Route component={PageNotFound} />
      </Switch>
    </section>
  );
};

export default Page;
