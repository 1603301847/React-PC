import React, { Component } from 'react'
// import * as React from 'react'
// import ReactGantt from 'gantt-for-react';
// import Gantt from './components/Gantt';
// import Gantt from 'react-jsgantt'
// import { gantt } from 'dhtmlx-gantt';
// import '.././public/gantt/codebase/dhtmlxgantt.css';
import JSGantt from 'react-jsgantt'

class GanttHtml extends Component {

    constructor(props){
        super(props);
        this.data = [{
          'pID': 1,
          'pName': 'Define Chart API v2',
          'pStart': '',
          'pEnd': '',
          'pClass': 'ggroupblack',
          'pLink': '',
          'pMile': 0,
          'pRes': 'Brian',
          'pComp': 0,
          'pGroup': 1,
          'pParent': 0,
          'pOpen': 1,
          'pDepend': '',
          'pCaption': '',
          'pNotes': 'Some Notes text'
        },{
            'pID': 2,
            'pName': 'Define Chart API v2',
            'pStart': '',
            'pEnd': '',
            'pClass': 'ggroupblack',
            'pLink': '',
            'pMile': 0,
            'pRes': 'Brian',
            'pComp': 0,
            'pGroup': 1,
            'pParent': 0,
            'pOpen': 1,
            'pDepend': '',
            'pCaption': '',
            'pNotes': 'Some Notes text'
          },{
            'pID': 3,
            'pName': 'Define Chart API v2',
            'pStart': '',
            'pEnd': '',
            'pClass': 'ggroupblack',
            'pLink': '',
            'pMile': 0,
            'pRes': 'Brian',
            'pComp': 0,
            'pGroup': 1,
            'pParent': 0,
            'pOpen': 1,
            'pDepend': '',
            'pCaption': '',
            'pNotes': 'Some Notes text'
          },{
            'pID': 4,
            'pName': 'Define Chart API v2',
            'pStart': '',
            'pEnd': '',
            'pClass': 'ggroupblack',
            'pLink': '',
            'pMile': 0,
            'pRes': 'Brian',
            'pComp': 0,
            'pGroup': 1,
            'pParent': 0,
            'pOpen': 1,
            'pDepend': '',
            'pCaption': '',
            'pNotes': 'Some Notes text'
          },{
            'pID': 5,
            'pName': 'Define Chart API v2',
            'pStart': '',
            'pEnd': '',
            'pClass': 'ggroupblack',
            'pLink': '',
            'pMile': 0,
            'pRes': 'Brian',
            'pComp': 0,
            'pGroup': 1,
            'pParent': 0,
            'pOpen': 1,
            'pDepend': '',
            'pCaption': '',
            'pNotes': 'Some Notes text'
          }];
    
        this.editorOptions = {
          vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
          vQuarterColWidth: 36,
          vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
          vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
          vWeekMinorDateDisplayFormat: 'dd mon'
        }
      }
          
    
    
      render () {
  
        return (
           <JSGantt data={this.data} options={this.editorOptions} />
        )
      }
}

export default GanttHtml;