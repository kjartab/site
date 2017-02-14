import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let projects = [
        { 
            "id" : "af89may9",
            "url" : "url",
            "name": "LangelandSkisenter",
            "description" : "Live monitoring ski tracks"
        },
        { 
            "id" : "af89ssmay9",
            "url" : "url",
            "name": "Langeland",
            "description" : "Storing, visualizing and 3D printing the DEM of Norway"
        },
        { 
            "id" : "af894may9",
            "url" : "url",
            "name": "Cloudy",
            "description" : "PostGIS PC testing"
        }


    ]

const App = (obj) => (
  <MuiThemeProvider>
    <Main projects = {projects}/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


