
import {
    pink, purple, teal, amber, deepOrange,
  } from '@mui/material/colors';
  
  export const appointments = [
    {
      id: 0,
      title: 'COA Exam',
      roomId: 1,
      members: [0],
      startDate: new Date(2023, 4, 1, 9, 30),
      endDate: new Date(2023, 4, 1, 11),
      
    }, {
      id: 1,
      title: 'Data Structures Exam',
      roomId: 218,
      members: [1],
      startDate: new Date(2023, 3, 17, 9, 30),
      endDate: new Date(2023, 3, 17, 11),
  
    }, {
      id: 2,
      title: 'Oops Exam',
      roomId: 3,
      members: [2],
      startDate: new Date(2023, 3, 19,9 ,30),
      endDate: new Date(2023, 3, 19, 11),
      // rRule: 'FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2',
    }, {
      id: 3,
      title: 'Sports Exam',
      roomId: 4,
      members: [3],
      startDate: new Date(2023, 3, 21, 9, 30),
      endDate: new Date(2023, 3, 21,11),
      // rRule: 'FREQ=DAILY;BYDAY=WE;UNTIL=20170601',
    }, {
      id: 4,
      title: 'Web Dev Exam',
      roomId: 5,
      members: [4],
      startDate: new Date(2023, 3, 23, 9, 30),
      endDate: new Date(2023, 3, 23, 11),
      // rRule: 'FREQ=YEARLY;BYWEEKNO=23',
      // exDate: '20170611T100000',
    }
     
   
  ];
  
  export const resourcesData = [
    {
      text: 'Room 118',
      id: 1,
      color: amber,
    }, {
      text: 'Room 117',
      id: 2,
      color: pink,
    }, {
      text: 'Room 120',
      id: 3,
      color: purple,
    }, {
      text: 'Room 218',
      id: 4,
      color: deepOrange,
    }, {
      text: 'Room 220',
      id: 0,
      color: teal,
    }
  
  ];
  