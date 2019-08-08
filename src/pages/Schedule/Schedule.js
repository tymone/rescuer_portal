import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

import Table from './Table.js';
import CreateSchedule from './CreateSchedule';
import EditSchedule from './EditSchedule';

class Schedule extends Component {
  state = {
    create: false,
    getEdit: false,
    editId: null,
    dateFrom: '',
    dateTo: '',
    outsideMultitude: ['poza zastępem1', 'poza zastępem2'],
    outsideTrain: ['Ćwiczenia1', 'Ćwiczenia2', 'Ćwiczenia3', 'Ćwiczenia4', 'Ćwiczenia5', 'Ćwiczenia6', 'Ćwiczenia7', 'Ćwiczenia8', 'Ćwiczenia9'],
    outsideSick: ['chory1', 'chory2', 'chory3', 'chory4', 'chory5', 'chory6'],
    outsideCourse: ['kursant1', 'kursant2', 'kursant3',],
    outsideLeave: ['urlop1', 'urlop2', 'urlop3', 'urlop4'],
    schedule: [
      {
        id: 1000,
        dateFrom: '16.6',
        dateTo: '22.6',
        Monday: {
          shift1: {
            multitude1: [
              'Pn. rano1 1',
              'Pn. rano1 2',
              'Pn rano1 3',
              'Pn rano1 4',
              'Pn rano1 5'
            ],
            multitude2: [
              'Pn. rano2 1',
              'Pn. rano2 2',
              'Pn. rano2 3',
              'Pn. rano2 4',
              'Pn. rano2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Pn. poł1 1',
              'Pn. poł1 2',
              'Pn. poł1 3',
              'Pn. poł1 4',
              'Pn. poł1 5'
            ],
            multitude2: [
              'Pn. poł2 1',
              'Pn poł2 2',
              'Pn. poł2 3',
              'Pn poł2 4',
              'Pn poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Pn noc 1 1',
              'Pn noc 1 2',
              'Pn noc 1 3',
              'Pn noc 1 4',
              'Pn noc 1 5'
            ],
            multitude2: [
              'Pn noc 2 1',
              'Pn noc 2 2',
              'Pn noc 2 3',
              'Pn noc 2 4',
              'Pn noc 2 5'
            ]
          }
        },
        Tuesday: {
          shift1: {
            multitude1: [
              'Wt ran1 1',
              'Wt ran1 2',
              'Wt ran1 3',
              'Wt rano1 4',
              'Wt ran1 5'
            ],
            multitude2: [
              'Wt ran2 1',
              'Wt rano2 2',
              'Wt rano2 3',
              'Wt ran2 4',
              'Wt rano2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Wt poł1 1',
              'Wt poł1 2',
              'Wt poł1 3',
              'Wt poł1 4',
              'Wt poł1 5'
            ],
            multitude2: [
              'Wt poł2 1',
              'Wt poł2 2',
              'Wt poł2 3',
              'Wt poł2 4',
              'Wt poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Wt noc1 1',
              'Wt noc1 2',
              'Wt noc1 3',
              'Wt noc1 4',
              'Wt noc1 5'
            ],
            multitude2: [
              'Wt noc2 1',
              'Wt noc2 2',
              'Wt noc2 3',
              'Wt noc2 4',
              'Wt noc2 5'
            ]
          }
        },
        Wednesday: {
          shift1: {
            multitude1: [
              'Śr ran1 1',
              'Śr ran1 2',
              'Śr ran1 3',
              'Śr ran1 4',
              'Śr ran1 5'
            ],
            multitude2: [
              'Śr ran2 1',
              'Śr ran2 2',
              'Śr ran2 3',
              'Śr ran2 4',
              'Śr ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Śr poł1 1',
              'Śr poł1 2',
              'Śr poł1 3',
              'śr poł1 4',
              'Śr poł1 5'
            ],
            multitude2: [
              'Śr poł2 1',
              'Śr poł2 2',
              'Śr poł2 3',
              'Śr poł2 4',
              'Śr poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Śr noc1 1',
              'Śr noc1 2',
              'Śr noc1 3',
              'Śr noc1 4',
              'Śr noc1 5'
            ],
            multitude2: [
              'Śr noc2 1',
              'Śr noc2 2',
              'Śr noc2 3',
              'Śr noc2 4',
              'Śr noc2 5'
            ]
          }
        },
        Thursday: {
          shift1: {
            multitude1: [
              'Czw ran1 1',
              'Czw ran1 2',
              'Czw ran1 3',
              'Czw ran1 4',
              'Czw ran1 5'
            ],
            multitude2: [
              'Czw ran2 1',
              'Czw ran2 2',
              'Czw ran2 3',
              'Czw ran2 4',
              'Czw ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Czw poł1 1',
              'Czw poł1 2',
              'Czw poł1 3',
              'Czw poł1 4',
              'Czw poł1 5'
            ],
            multitude2: [
              'Czw poł2 1',
              'Czw poł2 2',
              'Czw poł2 3',
              'Czw poł2 4',
              'Czw poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Czw noc1 1',
              'Czw noc1 2',
              'Czw noc1 3',
              'Czw noc1 4',
              'Czw noc1 5'
            ],
            multitude2: [
              'Czw noc2 1',
              'Czw noc2 2',
              'Czw noc2 3',
              'Czw noc2 4',
              'Czw noc2 5'
            ]
          }
        },
        Friday: {
          shift1: {
            multitude1: [
              'Pt ran1 1',
              'Pt ran1 2',
              'Pt ran1 3',
              'Pt ran1 4',
              'Pt ran1 5'
            ],
            multitude2: [
              'Pt ran2 1',
              'Pt ran2 2',
              'Pt ran2 3',
              'Pt ran2 4',
              'Pt ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Pt poł1 1',
              'Pt poł1 2',
              'Pt poł1 3',
              'Pt poł1 4',
              'Pt poł1 5'
            ],
            multitude2: [
              'Pt poł2 1',
              'Pt poł2 2',
              'Pt poł2 3',
              'Pt poł2 4',
              'Pt poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Pt noc1 1',
              'Pt noc1 2',
              'Pt noc1 3',
              'Pt noc1 4',
              'Pt noc1 5'
            ],
            multitude2: [
              'Pt noc2 1',
              'Pt noc2 2',
              'Pt noc2 3',
              'Pt noc2 4',
              'Pt noc2 5'
            ]
          }
        },
        Saturday: {
          shift1: {
            multitude1: [
              'Sb ran1 1',
              'Sb ran1 2',
              'Sb ran1 3',
              'Sb ran1 4',
              'Sb ran1 5'
            ],
            multitude2: [
              'Sb ran2 1',
              'Sb ran2 2',
              'Sb ran2 3',
              'Sb ran2 4',
              'Sb ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Sb poł1 1',
              'Sb poł1 2',
              'Sb poł1 3',
              'Sb poł1 4',
              'Sb poł1 5'
            ],
            multitude2: [
              'Sb poł2 1',
              'Sb poł2 2',
              'Sb poł2 3',
              'Sb poł2 4',
              'Sb poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Sb noc1 1',
              'Sb noc1 2',
              'Sb noc1 3',
              'Sb noc1 4',
              'Sb noc1 5'
            ],
            multitude2: [
              'Sb noc2 1',
              'Sb noc2 2',
              'Sb noc2 3',
              'Sb noc2 4',
              'Sb noc2 5'
            ]
          }
        },
        Sunday: {
          shift1: {
            multitude1: [
              'Nd ran1 1',
              'Nd ran1 2',
              'Nd ran1 3',
              'Nd ran1 4',
              'Nd ran1 5'
            ],
            multitude2: [
              'Nd ran2 1',
              'Nd ran2 2',
              'Nd ran2 3',
              'Nd ran2 4',
              'Nd ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Nd poł1 1',
              'Nd poł1 2',
              'Nd poł1 3',
              'Nd poł1 4',
              'Nd poł1 5'
            ],
            multitude2: [
              'Nd poł2 1',
              'Nd poł2 2',
              'Nd poł2 3',
              'Nd poł2 4',
              'Nd poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Nd noc1 1',
              'Nd noc1 2',
              'Nd noc1 3',
              'Nd noc1 4',
              'Nd noc1 5'
            ],
            multitude2: [
              'Nd noc2 1',
              'Nd noc2 2',
              'Nd noc2 3',
              'Nd noc2 4',
              'Nd noc2 5'
            ]
          }
        },
        train: ['Ćwiczenia1', 'Ćwiczenia2', 'Ćwiczenia3', 'Ćwiczenia4', 'Ćwiczenia5', 'Ćwiczenia6', 'Ćwiczenia7', 'Ćwiczenia8', 'Ćwiczenia9', 'Ćwiczenia10', 'Ćwiczenia11', 'Ćwiczenia12', 'Ćwiczenia13', 'Ćwiczenia14', 'Ćwiczenia 15', 'Ćwiczenia16', 'Ćwiczenia17', 'Ćwiczenia18', 'Ćwiczenia19', 'Ćwiczenia20'],
        outside: ['pracownik1', 'pracownik2', 'pracownik3', 'pracownik4'],
        sick: ['chory1', 'chory2', 'chory3', 'chory4', 'chory5', 'chory6'],
        course: ['kursant1', 'kursant2', 'kursant3', 'kursant4', 'kursant5', 'kursant6'],
        leave: ['urlopowicz1', 'urlopowicz2', 'urlopowicz3', 'urlopowicz4', 'urlopowicz5']
      },
      {
        id: 1,
        dateFrom: '24.7',
        dateTo: '31.7',
        Monday: {
          shift1: {
            multitude1: [
              'Pn. rano1 1',
              'Pn. rano1 2',
              'Pn rano1 3',
              'Pn rano1 4',
              'Pn rano1 5'
            ],
            multitude2: [
              'Pn. rano2 1',
              'Pn. rano2 2',
              'Pn. rano2 3',
              'Pn. rano2 4',
              'Pn. rano2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Pn. poł1 1',
              'Pn. poł1 2',
              'Pn. poł1 3',
              'Pn. poł1 4',
              'Pn. poł1 5'
            ],
            multitude2: [
              'Pn. poł2 1',
              'Pn poł2 2',
              'Pn. poł2 3',
              'Pn poł2 4',
              'Pn poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Pn noc 1 1',
              'Pn noc 1 2',
              'Pn noc 1 3',
              'Pn noc 1 4',
              'Pn noc 1 5'
            ],
            multitude2: [
              'Pn noc 2 1',
              'Pn noc 2 2',
              'Pn noc 2 3',
              'Pn noc 2 4',
              'Pn noc 2 5'
            ]
          }
        },
        Tuesday: {
          shift1: {
            multitude1: [
              'Wt ran1 1',
              'Wt ran1 2',
              'Wt ran1 3',
              'Wt rano1 4',
              'Wt ran1 5'
            ],
            multitude2: [
              'Wt ran2 1',
              'Wt rano2 2',
              'Wt rano2 3',
              'Wt ran2 4',
              'Wt rano2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Wt poł1 1',
              'Wt poł1 2',
              'Wt poł1 3',
              'Wt poł1 4',
              'Wt poł1 5'
            ],
            multitude2: [
              'Wt poł2 1',
              'Wt poł2 2',
              'Wt poł2 3',
              'Wt poł2 4',
              'Wt poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Wt noc1 1',
              'Wt noc1 2',
              'Wt noc1 3',
              'Wt noc1 4',
              'Wt noc1 5'
            ],
            multitude2: [
              'Wt noc2 1',
              'Wt noc2 2',
              'Wt noc2 3',
              'Wt noc2 4',
              'Wt noc2 5'
            ]
          }
        },
        Wednesday: {
          shift1: {
            multitude1: [
              'Śr ran1 1',
              'Śr ran1 2',
              'Śr ran1 3',
              'Śr ran1 4',
              'Śr ran1 5'
            ],
            multitude2: [
              'Śr ran2 1',
              'Śr ran2 2',
              'Śr ran2 3',
              'Śr ran2 4',
              'Śr ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Śr poł1 1',
              'Śr poł1 2',
              'Śr poł1 3',
              'śr poł1 4',
              'Śr poł1 5'
            ],
            multitude2: [
              'Śr poł2 1',
              'Śr poł2 2',
              'Śr poł2 3',
              'Śr poł2 4',
              'Śr poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Śr noc1 1',
              'Śr noc1 2',
              'Śr noc1 3',
              'Śr noc1 4',
              'Śr noc1 5'
            ],
            multitude2: [
              'Śr noc2 1',
              'Śr noc2 2',
              'Śr noc2 3',
              'Śr noc2 4',
              'Śr noc2 5'
            ]
          }
        },
        Thursday: {
          shift1: {
            multitude1: [
              'Czw ran1 1',
              'Czw ran1 2',
              'Czw ran1 3',
              'Czw ran1 4',
              'Czw ran1 5'
            ],
            multitude2: [
              'Czw ran2 1',
              'Czw ran2 2',
              'Czw ran2 3',
              'Czw ran2 4',
              'Czw ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Czw poł1 1',
              'Czw poł1 2',
              'Czw poł1 3',
              'Czw poł1 4',
              'Czw poł1 5'
            ],
            multitude2: [
              'Czw poł2 1',
              'Czw poł2 2',
              'Czw poł2 3',
              'Czw poł2 4',
              'Czw poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Czw noc1 1',
              'Czw noc1 2',
              'Czw noc1 3',
              'Czw noc1 4',
              'Czw noc1 5'
            ],
            multitude2: [
              'Czw noc2 1',
              'Czw noc2 2',
              'Czw noc2 3',
              'Czw noc2 4',
              'Czw noc2 5'
            ]
          }
        },
        Friday: {
          shift1: {
            multitude1: [
              'Pt ran1 1',
              'Pt ran1 2',
              'Pt ran1 3',
              'Pt ran1 4',
              'Pt ran1 5'
            ],
            multitude2: [
              'Pt ran2 1',
              'Pt ran2 2',
              'Pt ran2 3',
              'Pt ran2 4',
              'Pt ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Pt poł1 1',
              'Pt poł1 2',
              'Pt poł1 3',
              'Pt poł1 4',
              'Pt poł1 5'
            ],
            multitude2: [
              'Pt poł2 1',
              'Pt poł2 2',
              'Pt poł2 3',
              'Pt poł2 4',
              'Pt poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Pt noc1 1',
              'Pt noc1 2',
              'Pt noc1 3',
              'Pt noc1 4',
              'Pt noc1 5'
            ],
            multitude2: [
              'Pt noc2 1',
              'Pt noc2 2',
              'Pt noc2 3',
              'Pt noc2 4',
              'Pt noc2 5'
            ]
          }
        },
        Saturday: {
          shift1: {
            multitude1: [
              'Sb ran1 1',
              'Sb ran1 2',
              'Sb ran1 3',
              'Sb ran1 4',
              'Sb ran1 5'
            ],
            multitude2: [
              'Sb ran2 1',
              'Sb ran2 2',
              'Sb ran2 3',
              'Sb ran2 4',
              'Sb ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Sb poł1 1',
              'Sb poł1 2',
              'Sb poł1 3',
              'Sb poł1 4',
              'Sb poł1 5'
            ],
            multitude2: [
              'Sb poł2 1',
              'Sb poł2 2',
              'Sb poł2 3',
              'Sb poł2 4',
              'Sb poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Sb noc1 1',
              'Sb noc1 2',
              'Sb noc1 3',
              'Sb noc1 4',
              'Sb noc1 5'
            ],
            multitude2: [
              'Sb noc2 1',
              'Sb noc2 2',
              'Sb noc2 3',
              'Sb noc2 4',
              'Sb noc2 5'
            ]
          }
        },
        Sunday: {
          shift1: {
            multitude1: [
              'Nd ran1 1',
              'Nd ran1 2',
              'Nd ran1 3',
              'Nd ran1 4',
              'Nd ran1 5'
            ],
            multitude2: [
              'Nd ran2 1',
              'Nd ran2 2',
              'Nd ran2 3',
              'Nd ran2 4',
              'Nd ran2 5'
            ]
          },
          shift2: {
            multitude1: [
              'Nd poł1 1',
              'Nd poł1 2',
              'Nd poł1 3',
              'Nd poł1 4',
              'Nd poł1 5'
            ],
            multitude2: [
              'Nd poł2 1',
              'Nd poł2 2',
              'Nd poł2 3',
              'Nd poł2 4',
              'Nd poł2 5'
            ]
          },
          shift3: {
            multitude1: [
              'Nd noc1 1',
              'Nd noc1 2',
              'Nd noc1 3',
              'Nd noc1 4',
              'Nd noc1 5'
            ],
            multitude2: [
              'Nd noc2 1',
              'Nd noc2 2',
              'Nd noc2 3',
              'Nd noc2 4',
              'Nd noc2 5'
            ]
          }
        },
        train: ['Ćwiczenia1', 'Ćwiczenia2', 'Ćwiczenia3', 'Ćwiczenia4', 'Ćwiczenia5', 'Ćwiczenia6', 'Ćwiczenia7', 'Ćwiczenia8', 'Ćwiczenia9', 'Ćwiczenia10', 'Ćwiczenia11', 'Ćwiczenia12', 'Ćwiczenia13', 'Ćwiczenia14', 'Ćwiczenia 15', 'Ćwiczenia16', 'Ćwiczenia17', 'Ćwiczenia18', 'Ćwiczenia19', 'Ćwiczenia20'],
        outside: ['pracownik1', 'pracownik2', 'pracownik3', 'pracownik4'],
        sick: ['chory1', 'chory2', 'chory3', 'chory4', 'chory5', 'chory6'],
        course: ['kursant1', 'kursant2', 'kursant3', 'kursant4', 'kursant5', 'kursant6'],
        leave: ['urlopowicz1', 'urlopowicz2', 'urlopowicz3', 'urlopowicz4', 'urlopowicz5']
      }
    ]
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dateFrom, dateTo } = this.state
    let id = this.state.schedule.length

    const newSchedule = {
      id: id,
      dateFrom: dateFrom,
      dateTo: dateTo,
      Monday: {
        shift1: {
          multitude1:
            [this.state.MondayShift1Multitude1User1, this.state.MondayShift1Multitude1User2, this.state.MondayShift1Multitude1User3, this.state.MondayShift1Multitude1User4, this.state.MondayShift1Multitude1User5],
          multitude2:
            [this.state.MondayShift1Multitude2User1, this.state.MondayShift1Multitude2User2, this.state.MondayShift1Multitude2User3, this.state.MondayShift1Multitude2User4, this.state.MondayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.MondayShift2Multitude1User1, this.state.MondayShift2Multitude1User2, this.state.MondayShift2Multitude1User3, this.state.MondayShift2Multitude1User4, this.state.MondayShift2Multitude1User5],
          multitude2:
            [this.state.MondayShift2Multitude2User1, this.state.MondayShift2Multitude2User2, this.state.MondayShift2Multitude2User3, this.state.MondayShift2Multitude2User4, this.state.MondayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.MondayShift3Multitude1User1, this.state.MondayShift3Multitude1User2, this.state.MondayShift3Multitude1User3, this.state.MondayShift3Multitude1User4, this.state.MondayShift3Multitude1User5],
          multitude2:
            [this.state.MondayShift3Multitude2User1, this.state.MondayShift3Multitude2User2, this.state.MondayShift3Multitude2User3, this.state.MondayShift3Multitude2User4, this.state.MondayShift3Multitude2User5],
        }
      },
      Tuesday: {
        shift1: {
          multitude1:
            [this.state.TuesdayShift1Multitude1User1, this.state.TuesdayShift1Multitude1User2, this.state.TuesdayShift1Multitude1User3, this.state.TuesdayShift1Multitude1User4, this.state.TuesdayShift1Multitude1User5],
          multitude2:
            [this.state.TuesdayShift1Multitude2User1, this.state.TuesdayShift1Multitude2User2, this.state.TuesdayShift1Multitude2User3, this.state.TuesdayShift1Multitude2User4, this.state.TuesdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.TuesdayShift2Multitude1User1, this.state.TuesdayShift2Multitude1User2, this.state.TuesdayShift2Multitude1User3, this.state.TuesdayShift2Multitude1User4, this.state.TuesdayShift2Multitude1User5],
          multitude2:
            [this.state.TuesdayShift2Multitude2User1, this.state.TuesdayShift2Multitude2User2, this.state.TuesdayShift2Multitude2User3, this.state.TuesdayShift2Multitude2User4, this.state.TuesdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.TuesdayShift3Multitude1User1, this.state.TuesdayShift3Multitude1User2, this.state.TuesdayShift3Multitude1User3, this.state.TuesdayShift3Multitude1User4, this.state.TuesdayShift3Multitude1User5],
          multitude2:
            [this.state.TuesdayShift3Multitude2User1, this.state.TuesdayShift3Multitude2User2, this.state.TuesdayShift3Multitude2User3, this.state.TuesdayShift3Multitude2User4, this.state.TuesdayShift3Multitude2User5],
        }
      },
      Wednesday: {
        shift1: {
          multitude1:
            [this.state.WednesdayShift1Multitude1User1, this.state.WednesdayShift1Multitude1User2, this.state.WednesdayShift1Multitude1User3, this.state.WednesdayShift1Multitude1User4, this.state.WednesdayShift1Multitude1User5],
          multitude2:
            [this.state.WednesdayShift1Multitude2User1, this.state.WednesdayShift1Multitude2User2, this.state.WednesdayShift1Multitude2User3, this.state.WednesdayShift1Multitude2User4, this.state.WednesdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.WednesdayShift2Multitude1User1, this.state.WednesdayShift2Multitude1User2, this.state.WednesdayShift2Multitude1User3, this.state.WednesdayShift2Multitude1User4, this.state.WednesdayShift2Multitude1User5],
          multitude2:
            [this.state.WednesdayShift2Multitude2User1, this.state.WednesdayShift2Multitude2User2, this.state.WednesdayShift2Multitude2User3, this.state.WednesdayShift2Multitude2User4, this.state.WednesdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.WednesdayShift3Multitude1User1, this.state.WednesdayShift3Multitude1User2, this.state.WednesdayShift3Multitude1User3, this.state.WednesdayShift3Multitude1User4, this.state.WednesdayShift3Multitude1User5],
          multitude2:
            [this.state.WednesdayShift3Multitude2User1, this.state.WednesdayShift3Multitude2User2, this.state.WednesdayShift3Multitude2User3, this.state.WednesdayShift3Multitude2User4, this.state.WednesdayShift3Multitude2User5],
        }
      },
      Thursday: {
        shift1: {
          multitude1:
            [this.state.ThursdayShift1Multitude1User1, this.state.ThursdayShift1Multitude1User2, this.state.ThursdayShift1Multitude1User3, this.state.ThursdayShift1Multitude1User4, this.state.ThursdayShift1Multitude1User5],
          multitude2:
            [this.state.ThursdayShift1Multitude2User1, this.state.ThursdayShift1Multitude2User2, this.state.ThursdayShift1Multitude2User3, this.state.ThursdayShift1Multitude2User4, this.state.ThursdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.ThursdayShift2Multitude1User1, this.state.ThursdayShift2Multitude1User2, this.state.ThursdayShift2Multitude1User3, this.state.ThursdayShift2Multitude1User4, this.state.ThursdayShift2Multitude1User5],
          multitude2:
            [this.state.ThursdayShift2Multitude2User1, this.state.ThursdayShift2Multitude2User2, this.state.ThursdayShift2Multitude2User3, this.state.ThursdayShift2Multitude2User4, this.state.ThursdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.ThursdayShift3Multitude1User1, this.state.ThursdayShift3Multitude1User2, this.state.ThursdayShift3Multitude1User3, this.state.ThursdayShift3Multitude1User4, this.state.ThursdayShift3Multitude1User5],
          multitude2:
            [this.state.ThursdayShift3Multitude2User1, this.state.ThursdayShift3Multitude2User2, this.state.ThursdayShift3Multitude2User3, this.state.ThursdayShift3Multitude2User4, this.state.ThursdayShift3Multitude2User5],
        }
      },
      Friday: {
        shift1: {
          multitude1:
            [this.state.FridayShift1Multitude1User1, this.state.FridayShift1Multitude1User2, this.state.FridayShift1Multitude1User3, this.state.FridayShift1Multitude1User4, this.state.FridayShift1Multitude1User5],
          multitude2:
            [this.state.FridayShift1Multitude2User1, this.state.FridayShift1Multitude2User2, this.state.FridayShift1Multitude2User3, this.state.FridayShift1Multitude2User4, this.state.FridayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.FridayShift2Multitude1User1, this.state.FridayShift2Multitude1User2, this.state.FridayShift2Multitude1User3, this.state.FridayShift2Multitude1User4, this.state.FridayShift2Multitude1User5],
          multitude2:
            [this.state.FridayShift2Multitude2User1, this.state.FridayShift2Multitude2User2, this.state.FridayShift2Multitude2User3, this.state.FridayShift2Multitude2User4, this.state.FridayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.FridayShift3Multitude1User1, this.state.FridayShift3Multitude1User2, this.state.FridayShift3Multitude1User3, this.state.FridayShift3Multitude1User4, this.state.FridayShift3Multitude1User5],
          multitude2:
            [this.state.FridayShift3Multitude2User1, this.state.FridayShift3Multitude2User2, this.state.FridayShift3Multitude2User3, this.state.FridayShift3Multitude2User4, this.state.FridayShift3Multitude2User5],
        }
      },
      Saturday: {
        shift1: {
          multitude1:
            [this.state.SaturdayShift1Multitude1User1, this.state.SaturdayShift1Multitude1User2, this.state.SaturdayShift1Multitude1User3, this.state.SaturdayShift1Multitude1User4, this.state.SaturdayShift1Multitude1User5],
          multitude2:
            [this.state.SaturdayShift1Multitude2User1, this.state.SaturdayShift1Multitude2User2, this.state.SaturdayShift1Multitude2User3, this.state.SaturdayShift1Multitude2User4, this.state.SaturdayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.SaturdayShift2Multitude1User1, this.state.SaturdayShift2Multitude1User2, this.state.SaturdayShift2Multitude1User3, this.state.SaturdayShift2Multitude1User4, this.state.SaturdayShift2Multitude1User5],
          multitude2:
            [this.state.SaturdayShift2Multitude2User1, this.state.SaturdayShift2Multitude2User2, this.state.SaturdayShift2Multitude2User3, this.state.SaturdayShift2Multitude2User4, this.state.SaturdayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.SaturdayShift3Multitude1User1, this.state.SaturdayShift3Multitude1User2, this.state.SaturdayShift3Multitude1User3, this.state.SaturdayShift3Multitude1User4, this.state.SaturdayShift3Multitude1User5],
          multitude2:
            [this.state.SaturdayShift3Multitude2User1, this.state.SaturdayShift3Multitude2User2, this.state.SaturdayShift3Multitude2User3, this.state.SaturdayShift3Multitude2User4, this.state.SaturdayShift3Multitude2User5],
        }
      },
      Sunday: {
        shift1: {
          multitude1:
            [this.state.SundayShift1Multitude1User1, this.state.SundayShift1Multitude1User2, this.state.SundayShift1Multitude1User3, this.state.SundayShift1Multitude1User4, this.state.SundayShift1Multitude1User5],
          multitude2:
            [this.state.SundayShift1Multitude2User1, this.state.SundayShift1Multitude2User2, this.state.SundayShift1Multitude2User3, this.state.SundayShift1Multitude2User4, this.state.SundayShift1Multitude2User5],
        },
        shift2: {
          multitude1:
            [this.state.SundayShift2Multitude1User1, this.state.SundayShift2Multitude1User2, this.state.SundayShift2Multitude1User3, this.state.SundayShift2Multitude1User4, this.state.SundayShift2Multitude1User5],
          multitude2:
            [this.state.SundayShift2Multitude2User1, this.state.SundayShift2Multitude2User2, this.state.SundayShift2Multitude2User3, this.state.SundayShift2Multitude2User4, this.state.SundayShift2Multitude2User5],
        },
        shift3: {
          multitude1:
            [this.state.SundayShift3Multitude1User1, this.state.SundayShift3Multitude1User2, this.state.SundayShift3Multitude1User3, this.state.SundayShift3Multitude1User4, this.state.SundayShift3Multitude1User5],
          multitude2:
            [this.state.SundayShift3Multitude2User1, this.state.SundayShift3Multitude2User2, this.state.SundayShift3Multitude2User3, this.state.SundayShift3Multitude2User4, this.state.SundayShift3Multitude2User5],
        }
      },
    }
    this.setState({
      schedule: [newSchedule, ...this.state.schedule],
      create: !this.state.create
    })
  }

  toggleDisplay = () => {
    let create = this.state.create
    this.setState({
      create: !create
    })
  }

  getEditSchedule = (id) => {
    this.setState({
      getEdit: true,
      editId: id,
    })
  }



  render() {
    const { create, outsideMultitude, outsideTrain, outsideSick, outsideCourse, outsideLeave, schedule, dateFrom, dateTo, getEdit, editId } = this.state
    return (
      <div className='schedule'>
        {create ? null : <button className={getEdit ? 'hide' : null} onClick={this.toggleDisplay}>Dodaj</button>}
        {create ?
          <CreateSchedule
            schedule={schedule}
            dateFrom={dateFrom}
            dateTo={dateTo}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            outsideMultitude={outsideMultitude}
            outsideTrain={outsideTrain}
            outsideSick={outsideSick}
            outsideCourse={outsideCourse}
            outsideLeave={outsideLeave} /> : null}
        {getEdit ?
          <EditSchedule editId={editId} schedule={schedule} handleChange={this.handleChange} />
          :
          <Table
            schedule={schedule}
            getEdit={this.getEditSchedule}
            getId={this.getId} />
        }
        <Prompt
          when={create}
          message={'Masz niezapisany formularz. Czy na pewno chcesz opuścić stronę?'} />
      </div>
    );
  }
}

export default Schedule;
