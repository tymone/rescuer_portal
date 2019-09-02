import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './duck/actions'
import { Redirect } from 'react-router-dom';

class EditSchedule extends Component {

  state = {
    schedule: this.props.schedule.list,
    newEditSchedule: [],
    outsideMultitudeArr: this.props.schedule.list[this.props.match.params.id].outside.multitude,
    outsideTrainArr: this.props.schedule.list[this.props.match.params.id].outside.train,
    outsideSickArr: this.props.schedule.list[this.props.match.params.id].outside.sick,
    outsideCourseArr: this.props.schedule.list[this.props.match.params.id].outside.course,
    outsideLeaveArr: this.props.schedule.list[this.props.match.params.id].outside.leave,
    editId: this.props.match.params.id,
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let week = this.state.schedule[this.props.match.params.id]

    const newEditSchedule = {
      id: week.id,
      dateFrom: this.state.dateFrom ? this.state.dateFrom : week.dateFrom,
      dateTo: this.state.dateTo ? this.state.dateTo : week.dateTo,
      Monday: {
        shift1: {
          multitude1:
            [this.state.MondayShift1Multitude1User1 ? this.state.MondayShift1Multitude1User1 : week.Monday.shift1.multitude1[0],
            this.state.MondayShift1Multitude1User2 ? this.state.MondayShift1Multitude1User2 : week.Monday.shift1.multitude1[1],
            this.state.MondayShift1Multitude1User3 ? this.state.MondayShift1Multitude1User3 : week.Monday.shift1.multitude1[2],
            this.state.MondayShift1Multitude1User4 ? this.state.MondayShift1Multitude1User4 : week.Monday.shift1.multitude1[3],
            this.state.MondayShift1Multitude1User5 ? this.state.MondayShift1Multitude1User5 : week.Monday.shift1.multitude1[4]],
          multitude2:
            [this.state.MondayShift1Multitude2User1 ? this.state.MondayShift1Multitude2User1 : week.Monday.shift1.multitude2[0],
            this.state.MondayShift1Multitude2User2 ? this.state.MondayShift1Multitude2User2 : week.Monday.shift1.multitude2[1],
            this.state.MondayShift1Multitude2User3 ? this.state.MondayShift1Multitude2User3 : week.Monday.shift1.multitude2[2],
            this.state.MondayShift1Multitude2User4 ? this.state.MondayShift1Multitude2User4 : week.Monday.shift1.multitude2[3],
            this.state.MondayShift1Multitude2User5 ? this.state.MondayShift1Multitude2User5 : week.Monday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.MondayShift2Multitude1User1 ? this.state.MondayShift2Multitude1User1 : week.Monday.shift2.multitude1[0],
            this.state.MondayShift2Multitude1User2 ? this.state.MondayShift2Multitude1User2 : week.Monday.shift2.multitude1[1],
            this.state.MondayShift2Multitude1User3 ? this.state.MondayShift2Multitude1User3 : week.Monday.shift2.multitude1[2],
            this.state.MondayShift2Multitude1User4 ? this.state.MondayShift2Multitude1User4 : week.Monday.shift2.multitude1[3],
            this.state.MondayShift2Multitude1User5 ? this.state.MondayShift2Multitude1User5 : week.Monday.shift2.multitude1[4]],
          multitude2:
            [this.state.MondayShift2Multitude2User1 ? this.state.MondayShift2Multitude2User1 : week.Monday.shift2.multitude2[0],
            this.state.MondayShift2Multitude2User2 ? this.state.MondayShift2Multitude2User2 : week.Monday.shift2.multitude2[1],
            this.state.MondayShift2Multitude2User3 ? this.state.MondayShift2Multitude2User3 : week.Monday.shift2.multitude2[2],
            this.state.MondayShift2Multitude2User4 ? this.state.MondayShift2Multitude2User4 : week.Monday.shift2.multitude2[3],
            this.state.MondayShift2Multitude2User5 ? this.state.MondayShift2Multitude2User5 : week.Monday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.MondayShift3Multitude1User1 ? this.state.MondayShift3Multitude1User1 : week.Monday.shift3.multitude1[0],
            this.state.MondayShift3Multitude1User2 ? this.state.MondayShift3Multitude1User2 : week.Monday.shift3.multitude1[1],
            this.state.MondayShift3Multitude1User3 ? this.state.MondayShift3Multitude1User3 : week.Monday.shift3.multitude1[2],
            this.state.MondayShift3Multitude1User4 ? this.state.MondayShift3Multitude1User4 : week.Monday.shift3.multitude1[3],
            this.state.MondayShift3Multitude1User5 ? this.state.MondayShift3Multitude1User5 : week.Monday.shift3.multitude1[4]],
          multitude2:
            [this.state.MondayShift3Multitude2User1 ? this.state.MondayShift3Multitude2User1 : week.Monday.shift3.multitude2[0],
            this.state.MondayShift3Multitude2User2 ? this.state.MondayShift3Multitude2User2 : week.Monday.shift3.multitude2[1],
            this.state.MondayShift3Multitude2User3 ? this.state.MondayShift3Multitude2User3 : week.Monday.shift3.multitude2[2],
            this.state.MondayShift3Multitude2User4 ? this.state.MondayShift3Multitude2User4 : week.Monday.shift3.multitude2[3],
            this.state.MondayShift3Multitude2User5 ? this.state.MondayShift3Multitude2User5 : week.Monday.shift3.multitude2[4]]
        }
      },
      Tuesday: {
        shift1: {
          multitude1:
            [this.state.TuesdayShift1Multitude1User1 ? this.state.TuesdayShift1Multitude1User1 : week.Tuesday.shift1.multitude1[0],
            this.state.TuesdayShift1Multitude1User2 ? this.state.TuesdayShift1Multitude1User2 : week.Tuesday.shift1.multitude1[1],
            this.state.TuesdayShift1Multitude1User3 ? this.state.TuesdayShift1Multitude1User3 : week.Tuesday.shift1.multitude1[2],
            this.state.TuesdayShift1Multitude1User4 ? this.state.TuesdayShift1Multitude1User4 : week.Tuesday.shift1.multitude1[3],
            this.state.TuesdayShift1Multitude1User5 ? this.state.TuesdayShift1Multitude1User5 : week.Tuesday.shift1.multitude1[4]],
          multitude2:
            [this.state.TuesdayShift1Multitude2User1 ? this.state.TuesdayShift1Multitude2User1 : week.Tuesday.shift1.multitude2[0],
            this.state.TuesdayShift1Multitude2User2 ? this.state.TuesdayShift1Multitude2User2 : week.Tuesday.shift1.multitude2[1],
            this.state.TuesdayShift1Multitude2User3 ? this.state.TuesdayShift1Multitude2User3 : week.Tuesday.shift1.multitude2[2],
            this.state.TuesdayShift1Multitude2User4 ? this.state.TuesdayShift1Multitude2User4 : week.Tuesday.shift1.multitude2[3],
            this.state.TuesdayShift1Multitude2User5 ? this.state.TuesdayShift1Multitude2User5 : week.Tuesday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.TuesdayShift2Multitude1User1 ? this.state.TuesdayShift2Multitude1User1 : week.Tuesday.shift2.multitude1[0],
            this.state.TuesdayShift2Multitude1User2 ? this.state.TuesdayShift2Multitude1User2 : week.Tuesday.shift2.multitude1[1],
            this.state.TuesdayShift2Multitude1User3 ? this.state.TuesdayShift2Multitude1User3 : week.Tuesday.shift2.multitude1[2],
            this.state.TuesdayShift2Multitude1User4 ? this.state.TuesdayShift2Multitude1User4 : week.Tuesday.shift2.multitude1[3],
            this.state.TuesdayShift2Multitude1User5 ? this.state.TuesdayShift2Multitude1User5 : week.Tuesday.shift2.multitude1[4]],
          multitude2:
            [this.state.TuesdayShift2Multitude2User1 ? this.state.TuesdayShift2Multitude2User1 : week.Tuesday.shift2.multitude2[0],
            this.state.TuesdayShift2Multitude2User2 ? this.state.TuesdayShift2Multitude2User2 : week.Tuesday.shift2.multitude2[1],
            this.state.TuesdayShift2Multitude2User3 ? this.state.TuesdayShift2Multitude2User3 : week.Tuesday.shift2.multitude2[2],
            this.state.TuesdayShift2Multitude2User4 ? this.state.TuesdayShift2Multitude2User4 : week.Tuesday.shift2.multitude2[3],
            this.state.TuesdayShift2Multitude2User5 ? this.state.TuesdayShift2Multitude2User5 : week.Tuesday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.TuesdayShift3Multitude1User1 ? this.state.TuesdayShift3Multitude1User1 : week.Tuesday.shift3.multitude1[0],
            this.state.TuesdayShift3Multitude1User2 ? this.state.TuesdayShift3Multitude1User2 : week.Tuesday.shift3.multitude1[1],
            this.state.TuesdayShift3Multitude1User3 ? this.state.TuesdayShift3Multitude1User3 : week.Tuesday.shift3.multitude1[2],
            this.state.TuesdayShift3Multitude1User4 ? this.state.TuesdayShift3Multitude1User4 : week.Tuesday.shift3.multitude1[3],
            this.state.TuesdayShift3Multitude1User5 ? this.state.TuesdayShift3Multitude1User5 : week.Tuesday.shift3.multitude1[4]],
          multitude2:
            [this.state.TuesdayShift3Multitude2User1 ? this.state.TuesdayShift3Multitude2User1 : week.Tuesday.shift3.multitude2[0],
            this.state.TuesdayShift3Multitude2User2 ? this.state.TuesdayShift3Multitude2User2 : week.Tuesday.shift3.multitude2[1],
            this.state.TuesdayShift3Multitude2User3 ? this.state.TuesdayShift3Multitude2User3 : week.Tuesday.shift3.multitude2[2],
            this.state.TuesdayShift3Multitude2User4 ? this.state.TuesdayShift3Multitude2User4 : week.Tuesday.shift3.multitude2[3],
            this.state.TuesdayShift3Multitude2User5 ? this.state.TuesdayShift3Multitude2User5 : week.Tuesday.shift3.multitude2[4]]
        }
      },
      Wednesday: {
        shift1: {
          multitude1:
            [this.state.WednesdayShift1Multitude1User1 ? this.state.WednesdayShift1Multitude1User1 : week.Wednesday.shift1.multitude1[0],
            this.state.WednesdayShift1Multitude1User2 ? this.state.WednesdayShift1Multitude1User2 : week.Wednesday.shift1.multitude1[1],
            this.state.WednesdayShift1Multitude1User3 ? this.state.WednesdayShift1Multitude1User3 : week.Wednesday.shift1.multitude1[2],
            this.state.WednesdayShift1Multitude1User4 ? this.state.WednesdayShift1Multitude1User4 : week.Wednesday.shift1.multitude1[3],
            this.state.WednesdayShift1Multitude1User5 ? this.state.WednesdayShift1Multitude1User5 : week.Wednesday.shift1.multitude1[4]],
          multitude2:
            [this.state.WednesdayShift1Multitude2User1 ? this.state.WednesdayShift1Multitude2User1 : week.Wednesday.shift1.multitude2[0],
            this.state.WednesdayShift1Multitude2User2 ? this.state.WednesdayShift1Multitude2User2 : week.Wednesday.shift1.multitude2[1],
            this.state.WednesdayShift1Multitude2User3 ? this.state.WednesdayShift1Multitude2User3 : week.Wednesday.shift1.multitude2[2],
            this.state.WednesdayShift1Multitude2User4 ? this.state.WednesdayShift1Multitude2User4 : week.Wednesday.shift1.multitude2[3],
            this.state.WednesdayShift1Multitude2User5 ? this.state.WednesdayShift1Multitude2User5 : week.Wednesday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.WednesdayShift2Multitude1User1 ? this.state.WednesdayShift2Multitude1User1 : week.Wednesday.shift2.multitude1[0],
            this.state.WednesdayShift2Multitude1User2 ? this.state.WednesdayShift2Multitude1User2 : week.Wednesday.shift2.multitude1[1],
            this.state.WednesdayShift2Multitude1User3 ? this.state.WednesdayShift2Multitude1User3 : week.Wednesday.shift2.multitude1[2],
            this.state.WednesdayShift2Multitude1User4 ? this.state.WednesdayShift2Multitude1User4 : week.Wednesday.shift2.multitude1[3],
            this.state.WednesdayShift2Multitude1User5 ? this.state.WednesdayShift2Multitude1User5 : week.Wednesday.shift2.multitude1[4]],
          multitude2:
            [this.state.WednesdayShift2Multitude2User1 ? this.state.WednesdayShift2Multitude2User1 : week.Wednesday.shift2.multitude2[0],
            this.state.WednesdayShift2Multitude2User2 ? this.state.WednesdayShift2Multitude2User2 : week.Wednesday.shift2.multitude2[1],
            this.state.WednesdayShift2Multitude2User3 ? this.state.WednesdayShift2Multitude2User3 : week.Wednesday.shift2.multitude2[2],
            this.state.WednesdayShift2Multitude2User4 ? this.state.WednesdayShift2Multitude2User4 : week.Wednesday.shift2.multitude2[3],
            this.state.WednesdayShift2Multitude2User5 ? this.state.WednesdayShift2Multitude2User5 : week.Wednesday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.WednesdayShift3Multitude1User1 ? this.state.WednesdayShift3Multitude1User1 : week.Wednesday.shift3.multitude1[0],
            this.state.WednesdayShift3Multitude1User2 ? this.state.WednesdayShift3Multitude1User2 : week.Wednesday.shift3.multitude1[1],
            this.state.WednesdayShift3Multitude1User3 ? this.state.WednesdayShift3Multitude1User3 : week.Wednesday.shift3.multitude1[2],
            this.state.WednesdayShift3Multitude1User4 ? this.state.WednesdayShift3Multitude1User4 : week.Wednesday.shift3.multitude1[3],
            this.state.WednesdayShift3Multitude1User5 ? this.state.WednesdayShift3Multitude1User5 : week.Wednesday.shift3.multitude1[4]],
          multitude2:
            [this.state.WednesdayShift3Multitude2User1 ? this.state.WednesdayShift3Multitude2User1 : week.Wednesday.shift3.multitude2[0],
            this.state.WednesdayShift3Multitude2User2 ? this.state.WednesdayShift3Multitude2User2 : week.Wednesday.shift3.multitude2[1],
            this.state.WednesdayShift3Multitude2User3 ? this.state.WednesdayShift3Multitude2User3 : week.Wednesday.shift3.multitude2[2],
            this.state.WednesdayShift3Multitude2User4 ? this.state.WednesdayShift3Multitude2User4 : week.Wednesday.shift3.multitude2[3],
            this.state.WednesdayShift3Multitude2User5 ? this.state.WednesdayShift3Multitude2User5 : week.Wednesday.shift3.multitude2[4]]
        }
      },
      Thursday: {
        shift1: {
          multitude1:
            [this.state.ThursdayShift1Multitude1User1 ? this.state.ThursdayShift1Multitude1User1 : week.Thursday.shift1.multitude1[0],
            this.state.ThursdayShift1Multitude1User2 ? this.state.ThursdayShift1Multitude1User2 : week.Thursday.shift1.multitude1[1],
            this.state.ThursdayShift1Multitude1User3 ? this.state.ThursdayShift1Multitude1User3 : week.Thursday.shift1.multitude1[2],
            this.state.ThursdayShift1Multitude1User4 ? this.state.ThursdayShift1Multitude1User4 : week.Thursday.shift1.multitude1[3],
            this.state.ThursdayShift1Multitude1User5 ? this.state.ThursdayShift1Multitude1User5 : week.Thursday.shift1.multitude1[4]],
          multitude2:
            [this.state.ThursdayShift1Multitude2User1 ? this.state.ThursdayShift1Multitude2User1 : week.Thursday.shift1.multitude2[0],
            this.state.ThursdayShift1Multitude2User2 ? this.state.ThursdayShift1Multitude2User2 : week.Thursday.shift1.multitude2[1],
            this.state.ThursdayShift1Multitude2User3 ? this.state.ThursdayShift1Multitude2User3 : week.Thursday.shift1.multitude2[2],
            this.state.ThursdayShift1Multitude2User4 ? this.state.ThursdayShift1Multitude2User4 : week.Thursday.shift1.multitude2[3],
            this.state.ThursdayShift1Multitude2User5 ? this.state.ThursdayShift1Multitude2User5 : week.Thursday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.ThursdayShift2Multitude1User1 ? this.state.ThursdayShift2Multitude1User1 : week.Thursday.shift2.multitude1[0],
            this.state.ThursdayShift2Multitude1User2 ? this.state.ThursdayShift2Multitude1User2 : week.Thursday.shift2.multitude1[1],
            this.state.ThursdayShift2Multitude1User3 ? this.state.ThursdayShift2Multitude1User3 : week.Thursday.shift2.multitude1[2],
            this.state.ThursdayShift2Multitude1User4 ? this.state.ThursdayShift2Multitude1User4 : week.Thursday.shift2.multitude1[3],
            this.state.ThursdayShift2Multitude1User5 ? this.state.ThursdayShift2Multitude1User5 : week.Thursday.shift2.multitude1[4]],
          multitude2:
            [this.state.ThursdayShift2Multitude2User1 ? this.state.ThursdayShift2Multitude2User1 : week.Thursday.shift2.multitude2[0],
            this.state.ThursdayShift2Multitude2User2 ? this.state.ThursdayShift2Multitude2User2 : week.Thursday.shift2.multitude2[1],
            this.state.ThursdayShift2Multitude2User3 ? this.state.ThursdayShift2Multitude2User3 : week.Thursday.shift2.multitude2[2],
            this.state.ThursdayShift2Multitude2User4 ? this.state.ThursdayShift2Multitude2User4 : week.Thursday.shift2.multitude2[3],
            this.state.ThursdayShift2Multitude2User5 ? this.state.ThursdayShift2Multitude2User5 : week.Thursday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.ThursdayShift3Multitude1User1 ? this.state.ThursdayShift3Multitude1User1 : week.Thursday.shift3.multitude1[0],
            this.state.ThursdayShift3Multitude1User2 ? this.state.ThursdayShift3Multitude1User2 : week.Thursday.shift3.multitude1[1],
            this.state.ThursdayShift3Multitude1User3 ? this.state.ThursdayShift3Multitude1User3 : week.Thursday.shift3.multitude1[2],
            this.state.ThursdayShift3Multitude1User4 ? this.state.ThursdayShift3Multitude1User4 : week.Thursday.shift3.multitude1[3],
            this.state.ThursdayShift3Multitude1User5 ? this.state.ThursdayShift3Multitude1User5 : week.Thursday.shift3.multitude1[4]],
          multitude2:
            [this.state.ThursdayShift3Multitude2User1 ? this.state.ThursdayShift3Multitude2User1 : week.Thursday.shift3.multitude2[0],
            this.state.ThursdayShift3Multitude2User2 ? this.state.ThursdayShift3Multitude2User2 : week.Thursday.shift3.multitude2[1],
            this.state.ThursdayShift3Multitude2User3 ? this.state.ThursdayShift3Multitude2User3 : week.Thursday.shift3.multitude2[2],
            this.state.ThursdayShift3Multitude2User4 ? this.state.ThursdayShift3Multitude2User4 : week.Thursday.shift3.multitude2[3],
            this.state.ThursdayShift3Multitude2User5 ? this.state.ThursdayShift3Multitude2User5 : week.Thursday.shift3.multitude2[4]]
        }
      },
      Friday: {
        shift1: {
          multitude1:
            [this.state.FridayShift1Multitude1User1 ? this.state.FridayShift1Multitude1User1 : week.Friday.shift1.multitude1[0],
            this.state.FridayShift1Multitude1User2 ? this.state.FridayShift1Multitude1User2 : week.Friday.shift1.multitude1[1],
            this.state.FridayShift1Multitude1User3 ? this.state.FridayShift1Multitude1User3 : week.Friday.shift1.multitude1[2],
            this.state.FridayShift1Multitude1User4 ? this.state.FridayShift1Multitude1User4 : week.Friday.shift1.multitude1[3],
            this.state.FridayShift1Multitude1User5 ? this.state.FridayShift1Multitude1User5 : week.Friday.shift1.multitude1[4]],
          multitude2:
            [this.state.FridayShift1Multitude2User1 ? this.state.FridayShift1Multitude2User1 : week.Friday.shift1.multitude2[0],
            this.state.FridayShift1Multitude2User2 ? this.state.FridayShift1Multitude2User2 : week.Friday.shift1.multitude2[1],
            this.state.FridayShift1Multitude2User3 ? this.state.FridayShift1Multitude2User3 : week.Friday.shift1.multitude2[2],
            this.state.FridayShift1Multitude2User4 ? this.state.FridayShift1Multitude2User4 : week.Friday.shift1.multitude2[3],
            this.state.FridayShift1Multitude2User5 ? this.state.FridayShift1Multitude2User5 : week.Friday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.FridayShift2Multitude1User1 ? this.state.FridayShift2Multitude1User1 : week.Friday.shift2.multitude1[0],
            this.state.FridayShift2Multitude1User2 ? this.state.FridayShift2Multitude1User2 : week.Friday.shift2.multitude1[1],
            this.state.FridayShift2Multitude1User3 ? this.state.FridayShift2Multitude1User3 : week.Friday.shift2.multitude1[2],
            this.state.FridayShift2Multitude1User4 ? this.state.FridayShift2Multitude1User4 : week.Friday.shift2.multitude1[3],
            this.state.FridayShift2Multitude1User5 ? this.state.FridayShift2Multitude1User5 : week.Friday.shift2.multitude1[4]],
          multitude2:
            [this.state.FridayShift2Multitude2User1 ? this.state.FridayShift2Multitude2User1 : week.Friday.shift2.multitude2[0],
            this.state.FridayShift2Multitude2User2 ? this.state.FridayShift2Multitude2User2 : week.Friday.shift2.multitude2[1],
            this.state.FridayShift2Multitude2User3 ? this.state.FridayShift2Multitude2User3 : week.Friday.shift2.multitude2[2],
            this.state.FridayShift2Multitude2User4 ? this.state.FridayShift2Multitude2User4 : week.Friday.shift2.multitude2[3],
            this.state.FridayShift2Multitude2User5 ? this.state.FridayShift2Multitude2User5 : week.Friday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.FridayShift3Multitude1User1 ? this.state.FridayShift3Multitude1User1 : week.Friday.shift3.multitude1[0],
            this.state.FridayShift3Multitude1User2 ? this.state.FridayShift3Multitude1User2 : week.Friday.shift3.multitude1[1],
            this.state.FridayShift3Multitude1User3 ? this.state.FridayShift3Multitude1User3 : week.Friday.shift3.multitude1[2],
            this.state.FridayShift3Multitude1User4 ? this.state.FridayShift3Multitude1User4 : week.Friday.shift3.multitude1[3],
            this.state.FridayShift3Multitude1User5 ? this.state.FridayShift3Multitude1User5 : week.Friday.shift3.multitude1[4]],
          multitude2:
            [this.state.FridayShift3Multitude2User1 ? this.state.FridayShift3Multitude2User1 : week.Friday.shift3.multitude2[0],
            this.state.FridayShift3Multitude2User2 ? this.state.FridayShift3Multitude2User2 : week.Friday.shift3.multitude2[1],
            this.state.FridayShift3Multitude2User3 ? this.state.FridayShift3Multitude2User3 : week.Friday.shift3.multitude2[2],
            this.state.FridayShift3Multitude2User4 ? this.state.FridayShift3Multitude2User4 : week.Friday.shift3.multitude2[3],
            this.state.FridayShift3Multitude2User5 ? this.state.FridayShift3Multitude2User5 : week.Friday.shift3.multitude2[4]]
        }
      },
      Saturday: {
        shift1: {
          multitude1:
            [this.state.SaturdayShift1Multitude1User1 ? this.state.SaturdayShift1Multitude1User1 : week.Saturday.shift1.multitude1[0],
            this.state.SaturdayShift1Multitude1User2 ? this.state.SaturdayShift1Multitude1User2 : week.Saturday.shift1.multitude1[1],
            this.state.SaturdayShift1Multitude1User3 ? this.state.SaturdayShift1Multitude1User3 : week.Saturday.shift1.multitude1[2],
            this.state.SaturdayShift1Multitude1User4 ? this.state.SaturdayShift1Multitude1User4 : week.Saturday.shift1.multitude1[3],
            this.state.SaturdayShift1Multitude1User5 ? this.state.SaturdayShift1Multitude1User5 : week.Saturday.shift1.multitude1[4]],
          multitude2:
            [this.state.SaturdayShift1Multitude2User1 ? this.state.SaturdayShift1Multitude2User1 : week.Saturday.shift1.multitude2[0],
            this.state.SaturdayShift1Multitude2User2 ? this.state.SaturdayShift1Multitude2User2 : week.Saturday.shift1.multitude2[1],
            this.state.SaturdayShift1Multitude2User3 ? this.state.SaturdayShift1Multitude2User3 : week.Saturday.shift1.multitude2[2],
            this.state.SaturdayShift1Multitude2User4 ? this.state.SaturdayShift1Multitude2User4 : week.Saturday.shift1.multitude2[3],
            this.state.SaturdayShift1Multitude2User5 ? this.state.SaturdayShift1Multitude2User5 : week.Saturday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.SaturdayShift2Multitude1User1 ? this.state.SaturdayShift2Multitude1User1 : week.Saturday.shift2.multitude1[0],
            this.state.SaturdayShift2Multitude1User2 ? this.state.SaturdayShift2Multitude1User2 : week.Saturday.shift2.multitude1[1],
            this.state.SaturdayShift2Multitude1User3 ? this.state.SaturdayShift2Multitude1User3 : week.Saturday.shift2.multitude1[2],
            this.state.SaturdayShift2Multitude1User4 ? this.state.SaturdayShift2Multitude1User4 : week.Saturday.shift2.multitude1[3],
            this.state.SaturdayShift2Multitude1User5 ? this.state.SaturdayShift2Multitude1User5 : week.Saturday.shift2.multitude1[4]],
          multitude2:
            [this.state.SaturdayShift2Multitude2User1 ? this.state.SaturdayShift2Multitude2User1 : week.Saturday.shift2.multitude2[0],
            this.state.SaturdayShift2Multitude2User2 ? this.state.SaturdayShift2Multitude2User2 : week.Saturday.shift2.multitude2[1],
            this.state.SaturdayShift2Multitude2User3 ? this.state.SaturdayShift2Multitude2User3 : week.Saturday.shift2.multitude2[2],
            this.state.SaturdayShift2Multitude2User4 ? this.state.SaturdayShift2Multitude2User4 : week.Saturday.shift2.multitude2[3],
            this.state.SaturdayShift2Multitude2User5 ? this.state.SaturdayShift2Multitude2User5 : week.Saturday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.SaturdayShift3Multitude1User1 ? this.state.SaturdayShift3Multitude1User1 : week.Saturday.shift3.multitude1[0],
            this.state.SaturdayShift3Multitude1User2 ? this.state.SaturdayShift3Multitude1User2 : week.Saturday.shift3.multitude1[1],
            this.state.SaturdayShift3Multitude1User3 ? this.state.SaturdayShift3Multitude1User3 : week.Saturday.shift3.multitude1[2],
            this.state.SaturdayShift3Multitude1User4 ? this.state.SaturdayShift3Multitude1User4 : week.Saturday.shift3.multitude1[3],
            this.state.SaturdayShift3Multitude1User5 ? this.state.SaturdayShift3Multitude1User5 : week.Saturday.shift3.multitude1[4]],
          multitude2:
            [this.state.SaturdayShift3Multitude2User1 ? this.state.SaturdayShift3Multitude2User1 : week.Saturday.shift3.multitude2[0],
            this.state.SaturdayShift3Multitude2User2 ? this.state.SaturdayShift3Multitude2User2 : week.Saturday.shift3.multitude2[1],
            this.state.SaturdayShift3Multitude2User3 ? this.state.SaturdayShift3Multitude2User3 : week.Saturday.shift3.multitude2[2],
            this.state.SaturdayShift3Multitude2User4 ? this.state.SaturdayShift3Multitude2User4 : week.Saturday.shift3.multitude2[3],
            this.state.SaturdayShift3Multitude2User5 ? this.state.SaturdayShift3Multitude2User5 : week.Saturday.shift3.multitude2[4]]
        }
      },
      Sunday: {
        shift1: {
          multitude1:
            [this.state.SundayShift1Multitude1User1 ? this.state.SundayShift1Multitude1User1 : week.Sunday.shift1.multitude1[0],
            this.state.SundayShift1Multitude1User2 ? this.state.SundayShift1Multitude1User2 : week.Sunday.shift1.multitude1[1],
            this.state.SundayShift1Multitude1User3 ? this.state.SundayShift1Multitude1User3 : week.Sunday.shift1.multitude1[2],
            this.state.SundayShift1Multitude1User4 ? this.state.SundayShift1Multitude1User4 : week.Sunday.shift1.multitude1[3],
            this.state.SundayShift1Multitude1User5 ? this.state.SundayShift1Multitude1User5 : week.Sunday.shift1.multitude1[4]],
          multitude2:
            [this.state.SundayShift1Multitude2User1 ? this.state.SundayShift1Multitude2User1 : week.Sunday.shift1.multitude2[0],
            this.state.SundayShift1Multitude2User2 ? this.state.SundayShift1Multitude2User2 : week.Sunday.shift1.multitude2[1],
            this.state.SundayShift1Multitude2User3 ? this.state.SundayShift1Multitude2User3 : week.Sunday.shift1.multitude2[2],
            this.state.SundayShift1Multitude2User4 ? this.state.SundayShift1Multitude2User4 : week.Sunday.shift1.multitude2[3],
            this.state.SundayShift1Multitude2User5 ? this.state.SundayShift1Multitude2User5 : week.Sunday.shift1.multitude2[4]]
        },
        shift2: {
          multitude1:
            [this.state.SundayShift2Multitude1User1 ? this.state.SundayShift2Multitude1User1 : week.Sunday.shift2.multitude1[0],
            this.state.SundayShift2Multitude1User2 ? this.state.SundayShift2Multitude1User2 : week.Sunday.shift2.multitude1[1],
            this.state.SundayShift2Multitude1User3 ? this.state.SundayShift2Multitude1User3 : week.Sunday.shift2.multitude1[2],
            this.state.SundayShift2Multitude1User4 ? this.state.SundayShift2Multitude1User4 : week.Sunday.shift2.multitude1[3],
            this.state.SundayShift2Multitude1User5 ? this.state.SundayShift2Multitude1User5 : week.Sunday.shift2.multitude1[4]],
          multitude2:
            [this.state.SundayShift2Multitude2User1 ? this.state.SundayShift2Multitude2User1 : week.Sunday.shift2.multitude2[0],
            this.state.SundayShift2Multitude2User2 ? this.state.SundayShift2Multitude2User2 : week.Sunday.shift2.multitude2[1],
            this.state.SundayShift2Multitude2User3 ? this.state.SundayShift2Multitude2User3 : week.Sunday.shift2.multitude2[2],
            this.state.SundayShift2Multitude2User4 ? this.state.SundayShift2Multitude2User4 : week.Sunday.shift2.multitude2[3],
            this.state.SundayShift2Multitude2User5 ? this.state.SundayShift2Multitude2User5 : week.Sunday.shift2.multitude2[4]]
        },
        shift3: {
          multitude1:
            [this.state.SundayShift3Multitude1User1 ? this.state.SundayShift3Multitude1User1 : week.Sunday.shift3.multitude1[0],
            this.state.SundayShift3Multitude1User2 ? this.state.SundayShift3Multitude1User2 : week.Sunday.shift3.multitude1[1],
            this.state.SundayShift3Multitude1User3 ? this.state.SundayShift3Multitude1User3 : week.Sunday.shift3.multitude1[2],
            this.state.SundayShift3Multitude1User4 ? this.state.SundayShift3Multitude1User4 : week.Sunday.shift3.multitude1[3],
            this.state.SundayShift3Multitude1User5 ? this.state.SundayShift3Multitude1User5 : week.Sunday.shift3.multitude1[4]],
          multitude2:
            [this.state.SundayShift3Multitude2User1 ? this.state.SundayShift3Multitude2User1 : week.Sunday.shift3.multitude2[0],
            this.state.SundayShift3Multitude2User2 ? this.state.SundayShift3Multitude2User2 : week.Sunday.shift3.multitude2[1],
            this.state.SundayShift3Multitude2User3 ? this.state.SundayShift3Multitude2User3 : week.Sunday.shift3.multitude2[2],
            this.state.SundayShift3Multitude2User4 ? this.state.SundayShift3Multitude2User4 : week.Sunday.shift3.multitude2[3],
            this.state.SundayShift3Multitude2User5 ? this.state.SundayShift3Multitude2User5 : week.Sunday.shift3.multitude2[4]]
        }
      },
      outside: {
        multitude: [...this.state.outsideMultitudeArr],
        train: [...this.state.outsideTrainArr],
        sick: [...this.state.outsideSickArr],
        course: [...this.state.outsideCourseArr],
        leave: [...this.state.outsideLeaveArr]
      }
    }
    let schedule = this.props.schedule.list
    let index = this.state.editId
    schedule.splice(index, 1, newEditSchedule)
    this.setState({
      redirect: true
    })
    this.props.dispatch(actions.edit(schedule));
  }

  multitude = (multitude, className, day, classNameShift) => {
    return (
      <div className={className} >
        {
          multitude.map((user, i) => (
            <input
              key={`Dzień:${day}, Zmiana:${classNameShift}, Ratownik${i + 1}`}
              type='text'
              placeholder={user}
              name={`${day}${classNameShift}${className}${`User${i + 1}`}`}
              onChange={this.handleChange} />
          ))
        }
      </div >
    )
  };

  shift = (classNameShift, hours, multitude1, multitude2, day, multitude, classNameMultitude1 = 'Multitude1', classNameMultitude2 = 'Multitude2') => {
    return (
      <div className={classNameShift}>
        <p>{hours}</p>
        {this.multitude(multitude1, classNameMultitude1, day, classNameShift)}
        {this.multitude(multitude2, classNameMultitude2, day, classNameShift)}
      </div>
    )
  }

  day = (day, dayPL, multitude1Shift1, multitude2Shift1, multitude1Shift2, multitude2Shift2, multitude1Shift3, multitude2Shift3, multitude, shift1 = 'Shift1', shift2 = 'Shift2', shift3 = 'Shift3', hours1 = '6:30', hours2 = '14:00', hours3 = '21:30', ) => {
    return (
      <div className={`day ${day}`}>
        {dayPL}
        {this.shift(shift1, hours1, multitude1Shift1, multitude2Shift1, day, multitude)}
        {this.shift(shift2, hours2, multitude1Shift2, multitude2Shift2, day, multitude)}
        {this.shift(shift3, hours3, multitude1Shift3, multitude2Shift3, day, multitude)}
      </div>
    )
  }

  showAddPerson = (className) => {

    let div = document.querySelector(`.underTable div div.${className} `)
    div.classList.toggle('show')
  }

  addPerson = (className) => {
    let outsideMultitudeValue = this.state.outsideMultitude
    let outsideTrainValue = this.state.outsideTrain
    let outsideSickValue = this.state.outsideSick
    let outsideCourseValue = this.state.outsideCourse
    let outsideLeaveValue = this.state.outsideLeave

    switch (className) {
      case 'outsideMultitude':
        (outsideMultitudeValue ?
          this.setState({
            outsideMultitudeArr: [...this.state.outsideMultitudeArr, outsideMultitudeValue],
          })
          :
          alert('Nie podano nazwiska.')
        )
        break;
      case 'outsideTrain':
        (outsideTrainValue ?
          this.setState({
            outsideTrainArr: [...this.state.outsideTrainArr, outsideTrainValue]
          })
          :
          alert('Nie podano nazwiska.')
        )
        break;
      case 'outsideSick':
        (outsideSickValue ?
          this.setState({
            outsideSickArr: [...this.state.outsideSickArr, outsideSickValue]
          })
          :
          alert('Nie podano nazwiska.')
        )
        break;
      case 'outsideCourse':
        (outsideCourseValue ?
          this.setState({
            outsideCourseArr: [...this.state.outsideCourseArr, outsideCourseValue]
          })
          :
          alert('Nie podano nazwiska.')
        )
        break;
      case 'outsideLeave':
        (outsideLeaveValue ?
          this.setState({
            outsideLeaveArr: [...this.state.outsideLeaveArr, outsideLeaveValue]
          })
          :
          alert('Nie podano nazwiska.')
        )
        break;
      default: console.log('')
    }

  }

  removePerson = (className, i) => {
    switch (className) {
      case 'outsideMultitude':
        let outsideMultitudeArr = this.state.outsideMultitudeArr
        outsideMultitudeArr.splice((i), 1)
        this.setState({
          outsideMultitudeArr,
        })
        break;
      case 'outsideTrain':
        let outsideTrainArr = this.state.outsideTrainArr
        outsideTrainArr.splice((i), 1)
        this.setState({
          outsideTrainArr,
        })
        break;
      case 'outsideSick':
        let outsideSickArr = this.state.outsideSickArr
        outsideSickArr.splice((i), 1)
        this.setState({
          outsideSickArr,
        })
        break;
      case 'outsideCourse':
        let outsideCourseArr = this.state.outsideCourseArr
        outsideCourseArr.splice((i), 1)
        this.setState({
          outsideCourseArr,
        })
        break;
      case 'outsideLeave':
        let outsideLeaveArr = this.state.outsideLeaveArr
        outsideLeaveArr.splice((i), 1)
        this.setState({
          outsideLeaveArr,
        })
        break;
      default: console.log('')
    }
  }


  outsidePeople = (title, people, className) => {
    return (
      <div><b><u>{title}</u></b>
        <i
          className={"fas fa-user-plus"}
          onClick={() => this.showAddPerson(className)}>
        </i>
        :
        <div className={className}>
          <input
            type="text"
            name={`${className}`}
            onChange={this.handleChange} />
          <i className="fas fa-user-check" onClick={() => this.addPerson(className)}></i>
        </div>

        <ul>{people.length ? people.map((person, i) => <li key={`${className}${i}`}>{`${person}`} < i className="fas fa-user-minus" onClick={() => this.removePerson(className, i)} ></i>, </li>) : null} </ul>
      </div>)

  }
  changeDate = (from) => {
    console.log('change date')
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/harmonogram' />
    }
  }

  render() {
    let week = this.state.schedule[this.props.match.params.id]
    return (
      <div className='schedule'>
        {this.renderRedirect()}
        <h1>
          <u>Tryb </u> <u>edycji</u>
          {` `}harmonogramu na okres
          <input type='date' defaultValue={week.dateFrom} name={'dateFrom'} onChange={this.handleChange} />
          -
          <input type='date' defaultValue={week.dateTo} name={'dateTo'} onChange={this.handleChange} />
        </h1>
        <div className="table">
          {this.day(
            'Monday', 'Poniedziałek',
            week.Monday.shift1.multitude1, week.Monday.shift1.multitude2,
            week.Monday.shift2.multitude1, week.Monday.shift2.multitude2,
            week.Monday.shift3.multitude1, week.Monday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Tuesday', 'Wtorek',
            week.Tuesday.shift1.multitude1, week.Tuesday.shift1.multitude2,
            week.Tuesday.shift2.multitude1, week.Tuesday.shift2.multitude2,
            week.Tuesday.shift3.multitude1, week.Tuesday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Wednesday', 'Środa',
            week.Wednesday.shift1.multitude1, week.Wednesday.shift1.multitude2,
            week.Wednesday.shift2.multitude1, week.Wednesday.shift2.multitude2,
            week.Wednesday.shift3.multitude1, week.Wednesday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Thursday', 'Czwartek',
            week.Thursday.shift1.multitude1, week.Thursday.shift1.multitude2,
            week.Thursday.shift2.multitude1, week.Thursday.shift2.multitude2,
            week.Thursday.shift3.multitude1, week.Thursday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Friday', 'Piątek',
            week.Friday.shift1.multitude1, week.Friday.shift1.multitude2,
            week.Friday.shift2.multitude1, week.Friday.shift2.multitude2,
            week.Friday.shift3.multitude1, week.Friday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Saturday', 'Sobota',
            week.Saturday.shift1.multitude1, week.Saturday.shift1.multitude2,
            week.Saturday.shift2.multitude1, week.Saturday.shift2.multitude2,
            week.Saturday.shift3.multitude1, week.Saturday.shift3.multitude2,
            this.multitude)}
          {this.day(
            'Sunday', 'Niedziela',
            week.Sunday.shift1.multitude1, week.Sunday.shift1.multitude2,
            week.Sunday.shift2.multitude1, week.Sunday.shift2.multitude2,
            week.Sunday.shift3.multitude1, week.Sunday.shift3.multitude2,
            this.multitude)}
          <div className='underTable'>
            {this.outsidePeople('Poza zastępem', this.state.outsideMultitudeArr, 'outsideMultitude')}
            {this.outsidePeople('Ćwiczenia', this.state.outsideTrainArr, 'outsideTrain')}
            {this.outsidePeople('L4', this.state.outsideSickArr, 'outsideSick')}
            {this.outsidePeople('Kurs', this.state.outsideCourseArr, 'outsideCourse')}
            {this.outsidePeople('Urlop', this.state.outsideLeaveArr, 'outsideLeave')}
          </div>
        </div>
        <button onClick={this.handleSubmit}> Zapisz</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schedule: state.schedule
})


export default connect(mapStateToProps)(EditSchedule);