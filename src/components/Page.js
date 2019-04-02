import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Team from '../pages/Team';
import Contact from './Contact';
import Timetable from '../pages/Timetable';
import CreateSchedule from '../pages/CreateSchedule';


const Page = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/harmonogram' component={Timetable} />
        <Route path='/druzyna' component={Team} />
        <Route path='/kontakt' component={Contact} />
        <Route path='/stworz_harmonogram' component={CreateSchedule} />
      </Switch>
    </div>
  )
}

export default Page;