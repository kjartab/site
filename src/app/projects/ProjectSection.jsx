import React from 'react';
import ProjectBox from './ProjectBox.jsx';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const styleProjectSection = {
    marginTop: 50,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const containerStyle = {
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
}


const zDepth = 1;


export default class ProjectSection extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
          <div style={containerStyle}>
            <div style={ { width:"50%", marginLeft: 'auto', marginRight: 'auto'}}>
            <h1>Projects</h1>
            <p>I'm always creating new projects on github without really finishing what I started because something more fun came to mind. My hope is that by using continuous integration and keeping them out here in the open I will be able to prevent myself from forgetting about projects and breaking them.</p>
            </div>
            {
              this.props.projects.map((project) => 
              <ProjectBox 
                project={project}
              />)
            }
          </div>
        )
    }
}