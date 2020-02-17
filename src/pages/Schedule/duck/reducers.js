import types from './types';

const INITIAL_STATE = {
  counter: 2,
  list: [
    {
      id: 0,
      date: {
        from: '2019-09-09',
        to: '2019-09-16'
      },
      week: [
        {
          Monday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Pn. rano1 1', 'Pn. rano1 2', 'Pn. rano1 3', 'Pn. rano1 4', 'Pn. rano1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Pn. rano2 1', 'Pn. rano2 2', 'Pn. rano2 3', 'Pn. rano2 4', 'Pn. rano2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Pn. poł1 1', 'Pn. poł1 2', 'Pn. poł1 3', 'Pn. poł1 4', 'Pn. poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Pn. poł2 1', 'Pn poł2 2', 'Pn. poł2 3', 'Pn poł2 4', 'Pn poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Pn noc 1 1', 'Pn noc 1 2', 'Pn noc 1 3', 'Pn noc 1 4', 'Pn noc 1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Pn noc 2 1', 'Pn noc 2 2', 'Pn noc 2 3', 'Pn noc 2 4', 'Pn noc 2 5']
              }
            }
          ]
        },
        {
          Tuesday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Wt ran1 1', 'Wt ran1 2', 'Wt ran1 3', 'Wt rano1 4', 'Wt ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Wt ran2 1', 'Wt rano2 2', 'Wt rano2 3', 'Wt ran2 4', 'Wt rano2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Wt poł1 1', 'Wt poł1 2', 'Wt poł1 3', 'Wt poł1 4', 'Wt poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Wt poł2 1', 'Wt poł2 2', 'Wt poł2 3', 'Wt poł2 4', 'Wt poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Wt noc1 1', 'Wt noc1 2', 'Wt noc1 3', 'Wt noc1 4', 'Wt noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Wt noc2 1', 'Wt noc2 2', 'Wt noc2 3', 'Wt noc2 4', 'Wt noc2 5']
              }
            }
          ]
        },
        {
          Wednesday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Śr ran1 1', 'Śr ran1 2', 'Śr ran1 3', 'Śr ran1 4', 'Śr ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Śr ran2 1', 'Śr ran2 2', 'Śr ran2 3', 'Śr ran2 4', 'Śr ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Śr poł1 1', 'Śr poł1 2', 'Śr poł1 3', 'śr poł1 4', 'Śr poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Śr poł2 1', 'Śr poł2 2', 'Śr poł2 3', 'Śr poł2 4', 'Śr poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Śr noc1 1', 'Śr noc1 2', 'Śr noc1 3', 'Śr noc1 4', 'Śr noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Śr noc2 1', 'Śr noc2 2', 'Śr noc2 3', 'Śr noc2 4', 'Śr noc2 5']
              }
            }
          ]
        },
        {
          Thursday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Czw ran1 1', 'Czw ran1 2', 'Czw ran1 3', 'Czw ran1 4', 'Czw ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Czw ran2 1', 'Czw ran2 2', 'Czw ran2 3', 'Czw ran2 4', 'Czw ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Czw poł1 1', 'Czw poł1 2', 'Czw poł1 3', 'Czw poł1 4', 'Czw poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Czw poł2 1', 'Czw poł2 2', 'Czw poł2 3', 'Czw poł2 4', 'Czw poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Czw noc1 1', 'Czw noc1 2', 'Czw noc1 3', 'Czw noc1 4', 'Czw noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Czw noc2 1', 'Czw noc2 2', 'Czw noc2 3', 'Czw noc2 4', 'Czw noc2 5']
              }
            }
          ]
        },
        {
          Friday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Pt ran1 1', 'Pt ran1 2', 'Pt ran1 3', 'Pt ran1 4', 'Pt ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Pt ran2 1', 'Pt ran2 2', 'Pt ran2 3', 'Pt ran2 4', 'Pt ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Pt poł1 1', 'Pt poł1 2', 'Pt poł1 3', 'Pt poł1 4', 'Pt poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Pt poł2 1', 'Pt poł2 2', 'Pt poł2 3', 'Pt poł2 4', 'Pt poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Pt noc1 1', 'Pt noc1 2', 'Pt noc1 3', 'Pt noc1 4', 'Pt noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Pt noc2 1', 'Pt noc2 2', 'Pt noc2 3', 'Pt noc2 4', 'Pt noc2 5']
              }
            }
          ]
        },
        {
          Saturday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Sb ran1 1', 'Sb ran1 2', 'Sb ran1 3', 'Sb ran1 4', 'Sb ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Sb ran2 1', 'Sb ran2 2', 'Sb ran2 3', 'Sb ran2 4', 'Sb ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Sb poł1 1', 'Sb poł1 2', 'Sb poł1 3', 'Sb poł1 4', 'Sb poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Sb poł2 1', 'Sb poł2 2', 'Sb poł2 3', 'Sb poł2 4', 'Sb poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Sb noc1 1', 'Sb noc1 2', 'Sb noc1 3', 'Sb noc1 4', 'Sb noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Sb noc2 1', 'Sb noc2 2', 'Sb noc2 3', 'Sb noc2 4', 'Sb noc2 5']
              }
            }
          ]
        },
        {
          Sunday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Nd ran1 1', 'Nd ran1 2', 'Nd ran1 3', 'Nd ran1 4', 'Nd ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Nd ran2 1', 'Nd ran2 2', 'Nd ran2 3', 'Nd ran2 4', 'Nd ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Nd poł1 1', 'Nd poł1 2', 'Nd poł1 3', 'Nd poł1 4', 'Nd poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Nd poł2 1', 'Nd poł2 2', 'Nd poł2 3', 'Nd poł2 4', 'Nd poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Nd noc1 1', 'Nd noc1 2', 'Nd noc1 3', 'Nd noc1 4', 'Nd noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Nd noc2 1', 'Nd noc2 2', 'Nd noc2 3', 'Nd noc2 4', 'Nd noc2 5']
              }
            }
          ]
        }
      ],
      outOfWeek: [
        {
          train: [
            'Ćwiczenia1',
            'Ćwiczenia2',
            'Ćwiczenia3',
            'Ćwiczenia4',
            'Ćwiczenia5',
            'Ćwiczenia6',
            'Ćwiczenia7',
            'Ćwiczenia8',
            'Ćwiczenia9'
          ]
        },
        { sick: ['chory1', 'chory2', 'chory3', 'chory4', 'chory5', 'chory6'] },
        { course: ['kursant1', 'kursant2', 'kursant3'] },
        { leave: ['urlop1', 'urlop2', 'urlop3', 'urlop4'] }
      ]
    },
    {
      id: 1,
      date: { from: '2019-09-17', to: '2019-09-24' },
      week: [
        {
          Monday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Pn. rano1 1', 'Pn. rano1 2', 'Pn rano1 3', 'Pn rano1 4', 'Pn rano1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Pn. rano2 1', 'Pn. rano2 2', 'Pn. rano2 3', 'Pn. rano2 4', 'Pn. rano2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Pn. poł1 1', 'Pn. poł1 2', 'Pn. poł1 3', 'Pn. poł1 4', 'Pn. poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Pn. poł2 1', 'Pn poł2 2', 'Pn. poł2 3', 'Pn poł2 4', 'Pn poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Pn noc 1 1', 'Pn noc 1 2', 'Pn noc 1 3', 'Pn noc 1 4', 'Pn noc 1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Pn noc 2 1', 'Pn noc 2 2', 'Pn noc 2 3', 'Pn noc 2 4', 'Pn noc 2 5']
              }
            }
          ]
        },
        {
          Tuesday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Wt ran1 1', 'Wt ran1 2', 'Wt ran1 3', 'Wt rano1 4', 'Wt ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Wt ran2 1', 'Wt rano2 2', 'Wt rano2 3', 'Wt ran2 4', 'Wt rano2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Wt poł1 1', 'Wt poł1 2', 'Wt poł1 3', 'Wt poł1 4', 'Wt poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Wt poł2 1', 'Wt poł2 2', 'Wt poł2 3', 'Wt poł2 4', 'Wt poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Wt noc1 1', 'Wt noc1 2', 'Wt noc1 3', 'Wt noc1 4', 'Wt noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Wt noc2 1', 'Wt noc2 2', 'Wt noc2 3', 'Wt noc2 4', 'Wt noc2 5']
              }
            }
          ]
        },
        {
          Wednesday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Śr ran1 1', 'Śr ran1 2', 'Śr ran1 3', 'Śr ran1 4', 'Śr ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Śr ran2 1', 'Śr ran2 2', 'Śr ran2 3', 'Śr ran2 4', 'Śr ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Śr poł1 1', 'Śr poł1 2', 'Śr poł1 3', 'śr poł1 4', 'Śr poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Śr poł2 1', 'Śr poł2 2', 'Śr poł2 3', 'Śr poł2 4', 'Śr poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Śr noc1 1', 'Śr noc1 2', 'Śr noc1 3', 'Śr noc1 4', 'Śr noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Śr noc2 1', 'Śr noc2 2', 'Śr noc2 3', 'Śr noc2 4', 'Śr noc2 5']
              }
            }
          ]
        },
        {
          Thursday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Czw ran1 1', 'Czw ran1 2', 'Czw ran1 3', 'Czw ran1 4', 'Czw ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Czw ran2 1', 'Czw ran2 2', 'Czw ran2 3', 'Czw ran2 4', 'Czw ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Czw poł1 1', 'Czw poł1 2', 'Czw poł1 3', 'Czw poł1 4', 'Czw poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Czw poł2 1', 'Czw poł2 2', 'Czw poł2 3', 'Czw poł2 4', 'Czw poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Czw noc1 1', 'Czw noc1 2', 'Czw noc1 3', 'Czw noc1 4', 'Czw noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Czw noc2 1', 'Czw noc2 2', 'Czw noc2 3', 'Czw noc2 4', 'Czw noc2 5']
              }
            }
          ]
        },
        {
          Friday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Pt ran1 1', 'Pt ran1 2', 'Pt ran1 3', 'Pt ran1 4', 'Pt ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Pt ran2 1', 'Pt ran2 2', 'Pt ran2 3', 'Pt ran2 4', 'Pt ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Pt poł1 1', 'Pt poł1 2', 'Pt poł1 3', 'Pt poł1 4', 'Pt poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Pt poł2 1', 'Pt poł2 2', 'Pt poł2 3', 'Pt poł2 4', 'Pt poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Pt noc1 1', 'Pt noc1 2', 'Pt noc1 3', 'Pt noc1 4', 'Pt noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Pt noc2 1', 'Pt noc2 2', 'Pt noc2 3', 'Pt noc2 4', 'Pt noc2 5']
              }
            }
          ]
        },
        {
          Saturday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Sb ran1 1', 'Sb ran1 2', 'Sb ran1 3', 'Sb ran1 4', 'Sb ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Sb ran2 1', 'Sb ran2 2', 'Sb ran2 3', 'Sb ran2 4', 'Sb ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Sb poł1 1', 'Sb poł1 2', 'Sb poł1 3', 'Sb poł1 4', 'Sb poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Sb poł2 1', 'Sb poł2 2', 'Sb poł2 3', 'Sb poł2 4', 'Sb poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Sb noc1 1', 'Sb noc1 2', 'Sb noc1 3', 'Sb noc1 4', 'Sb noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Sb noc2 1', 'Sb noc2 2', 'Sb noc2 3', 'Sb noc2 4', 'Sb noc2 5']
              }
            }
          ]
        },
        {
          Sunday: [
            {
              multitude1: {
                time: '06:30',
                multitude: ['Nd ran1 1', 'Nd ran1 2', 'Nd ran1 3', 'Nd ran1 4', 'Nd ran1 5']
              }
            },
            {
              multitude2: {
                time: '06:30',
                multitude: ['Nd ran2 1', 'Nd ran2 2', 'Nd ran2 3', 'Nd ran2 4', 'Nd ran2 5']
              }
            },
            {
              multitude3: {
                time: '14:00',
                multitude: ['Nd poł1 1', 'Nd poł1 2', 'Nd poł1 3', 'Nd poł1 4', 'Nd poł1 5']
              }
            },
            {
              multitude4: {
                time: '14:00',
                multitude: ['Nd poł2 1', 'Nd poł2 2', 'Nd poł2 3', 'Nd poł2 4', 'Nd poł2 5']
              }
            },
            {
              multitude5: {
                time: '21:30',
                multitude: ['Nd noc1 1', 'Nd noc1 2', 'Nd noc1 3', 'Nd noc1 4', 'Nd noc1 5']
              }
            },
            {
              multitude6: {
                time: '21:30',
                multitude: ['Nd noc2 1', 'Nd noc2 2', 'Nd noc2 3', 'Nd noc2 4', 'Nd noc2 5']
              }
            }
          ]
        }
      ],
      outOfWeek: [
        {
          train: [
            'Ćwiczenia1',
            'Ćwiczenia2',
            'Ćwiczenia3',
            'Ćwiczenia4',
            'Ćwiczenia5',
            'Ćwiczenia6',
            'Ćwiczenia7',
            'Ćwiczenia8',
            'Ćwiczenia9'
          ]
        },
        { sick: ['chory1', 'chory2', 'chory3', 'chory4', 'chory5', 'chory6'] },
        { course: ['kursant1', 'kursant2', 'kursant3'] },
        { leave: ['urlop1', 'urlop2', 'urlop3', 'urlop4'] }
      ]
    }
  ]
};

const scheduleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_SCHEDULE:
      return {
        ...state,
        counter: action.item.id,
        list: [action.item, ...state.list]
      };
    case types.EDIT_SCHEDULE:
      const id = state.list.findIndex((item) => item.id === action.item.id);
      state.list.splice(id, 1, action.item);
      return {
        ...state,
        list: [...state.list]
      };
    default:
      return state;
  }
};

export default scheduleReducer;
