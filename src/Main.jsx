import React from 'react';
import AppBar from './AppBar.jsx';
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import UpperSection from './UpperSection';
import ProjectPage from './projects/ProjectPage.jsx';
import AboutSection from './about/AboutSection.jsx';
import ProjectSection from './projects/ProjectSection.jsx';
import ContactSection from './contact/ContactSection.jsx';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    // render() {
    //   return(
    // <Router history={browserHistory}>
    //   <Route path="/" component={AppBar} />
    //   <Route path="projects" component={UpperSection} />
    //   <Route path="about" component={AboutSection} />
    // </Router>
    //   )
    // }
    // render() {
    //     return(
    //       <Router history={browserHistory}>

    //         <Route path="/" component={UpperSection}>
    //         </Route>
    //         <Route path="projects" component={AboutSection}>
    //         </Route>
    //       </Router>
    //       );
    // }


              //   <UpperSection/>
              //   <ProjectSection projects = {this.props.projects} />
              //   <AboutSection abouts = {this.props.abouts} />
              // <Route path="projects" component={ProjectPage}/>
    render() {
        return (
          <div className="counter">
            <UpperSection/>
            <ProjectSection projects = {this.props.projects} />
            <AboutSection abouts = {this.props.abouts} />
            <ContactSection />
          </div>
        );
    }
}
