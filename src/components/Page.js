import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Team from '../pages/Team';
import Contact from './Contact';
import AddUser from '../pages/AddUser';
import Harmonogram from '../pages/Harmonogram';

const Page = () => {
  return (
    <div>

      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/harmonogram' component={Harmonogram} />
        <Route path='/druzyna' component={Team} />
        <Route path='/kontakt' component={Contact} />
        <Route path='/dodaj_ratownika' component={AddUser} />
      </Switch>
    </div>
  )
}

export default Page;