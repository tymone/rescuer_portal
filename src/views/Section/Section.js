import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'components/HomePage';
import { ScheduleRead, ScheduleCreate, ScheduleUpdateList, ScheduleUpdate } from 'components/Schedule';
import { AddRescuer, ReadTeam, UpdateTeam, RescuerDetails } from 'components/Team';
import { ReadTrain, Details, CreateGroup, EditTrainList, EditTrain } from 'components/Train';
import Tasks from 'components/Tasks/Tasks';
import AddTask from 'components/Tasks/Create/AddTask';
import TaskDetails from 'components/Tasks/Read/TaskDetails';
import EditTask from 'components/Tasks/Update/EditTask';
import PageNotFound from 'components/PageNotFound';
import { StyledSection } from './StyledSection';

const Section = () => (
  <StyledSection>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/harmonogram" exact component={ScheduleRead} />
      <Route path="/harmonogram/dodaj" component={ScheduleCreate} />
      <Route path="/harmonogram/edytuj" component={ScheduleUpdateList} />
      <Route path="/harmonogram/:id" component={ScheduleUpdate} />
      <Route path="/druzyna" exact component={ReadTeam} />
      <Route path="/druzyna/dodaj" component={AddRescuer} />
      <Route path="/druzyna/edytuj/:id" component={UpdateTeam} />
      <Route path="/druzyna/:id" component={RescuerDetails} />
      <Route path="/cwiczenia" exact component={ReadTrain} />
      <Route path="/cwiczenia/dodaj" component={CreateGroup} />
      <Route path="/cwiczenia/szczegoly/:year/:id" exact component={Details} />
      <Route path="/cwiczenia/edytuj/" exact component={EditTrainList} />
      <Route path="/cwiczenia/edytuj/:id" component={EditTrain} />
      <Route path="/zadania" exact component={Tasks} />
      <Route path="/zadania/dodaj" component={AddTask} />
      <Route path="/zadania/:id" exact component={TaskDetails} />
      <Route path="/zadania/edytuj/:id" component={EditTask} />
      <Route component={PageNotFound} />
    </Switch>
  </StyledSection>
);

export default Section;
