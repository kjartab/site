import React from 'react';
import AppBar from './AppBar';
import UpperSection from './UpperSection';
import AboutSection from './AboutSection';
import ProjectSection from './projects/ProjectSection';

export default class Main extends React.Component {


    render() {
        return (
          <div>
            <AppBar/>
            <UpperSection/>
            <ProjectSection/>
            <AboutSection/>
          </div>
        );
    }


}
