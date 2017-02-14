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

const zDepth = 1;


export default class ProjectSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
          <h2>My projects</h2>

          {
            this.props.projects.map((project) => 
            <ProjectBox 
             name={project.name}
             url={project.url}
             key={project.id}
            />)
          }
        </div>)

    }
}