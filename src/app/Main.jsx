import React from 'react';
import AppBar from './AppBar.jsx';
import UpperSection from './UpperSection';
import AboutSection from './about/AboutSection.jsx';
import ProjectSection from './projects/ProjectSection.jsx';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
    }

    render() {
        return (
          <div className="counter">
            <AppBar/>
            <UpperSection/>
            <ProjectSection projects = {this.state.projects} />
            <AboutSection/>
          </div>
        );
    }
}
