import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let projects = [
        { 
            "id" : "af8ay9",
            "url" : "url",
            "name": "Toptour",
            "description" : "Finding the perfect ski trip",
            "imgUrl" : "img/projects/langelands.jpg"
        },
        { 
            "id" : "af89may9",
            "url" : "url",
            "name": "LangelandSkisenter",
            "description" : "Live monitoring ski tracks",
            "imgUrl" : "img/projects/langelands.jpg"
        },
        { 
            "id" : "af89ssmay9",
            "url" : "url",
            "name": "3D printing Norway",
            "description" : "Storing, visualizing and 3D printing the DEM of Norway",
            "imgUrl" : "img/projects/sunnfjord.png"
        },
        { 
            "id" : "af894may9",
            "url" : "url",
            "name": "Cloudy",
            "description" : "PostGIS PC testing",
            "imgUrl" : "img/projects/pointcloud.png"
        },
        { 
            "id" : "amay9",
            "url" : "url",
            "name": "Qmesh",
            "description" : "Looking closer at the structure of 3D tiles",
            "imgUrl" : "img/projects/langelands.jpg"
        },
        { 
            "id" : "amaysss",
            "url" : "url",
            "name": "Snoskrape",
            "description" : "Python application for automating download",
            "imgUrl" : "img/projects/langelands.jpg"
        }
    ]

var abouts = [
    {
        "id" : 1, 
        "yearstart": "2008",
        "yearend": "2013",
        "title" : "Student at NTNU",
        "text" : "I studied Engineering & ICT at the Norwegian University of Technology and Science, specializing in Geomatics.",
        "imgUrl" : "img/about/1.jpg"
    },  
       
    {
        "id" : 2, 
        "yearstart" : "2013",
        "yearend" : "2014",
        "title" : "Offshore surveyor",
        "text" : "I started off working in the offshore industry, for a company called iSurvey. Being offshore most of the time, I carried out navigation and surveying tasks on vessels and rigs in the North Sea.",
        "imgUrl" : "img/about/surveydenmark.jpg"
       
    },
    {
        "id" : 3, 
        "yearstart" : "2013",
        "yearend" : "today",
        "title" : "Software Developer",
        "text" : "Fall 2014 I stared working at Norkart, where I get to work as a software developer, doing things I really enjoy: Organizing, visualizing and mining geospatial data.",
        "imgUrl" : "img/logos/norkart.png"
       
    }
]



const App = (obj) => (
  <MuiThemeProvider>
    <Main projects={projects} abouts={abouts}/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


