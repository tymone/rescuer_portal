import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Team from '../pages/Team/Team';
import Contact from './Contact';
import LoginPage from '../pages/LoginPage';
import Tasks from '../pages/Tasks/Tasks.js';
import Schedule from '../pages/Schedule/Schedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule';

const Page = () => {
  return (
    <section>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/druzyna' component={Team} />
        {/* <Route path='/druzyna/edytuj/:id' component={Edit} /> */}
        <Route path='/kontakt' component={Contact} />
        <Route path='/zadania' component={Tasks} />
        <Route path='/harmonogram' exact component={Schedule} />
        <Route path='/harmonogram/stworz' component={CreateSchedule} />
      </Switch>
    </section>
  );
};

export default Page;
