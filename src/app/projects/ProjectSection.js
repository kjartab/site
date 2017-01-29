import React from 'react';
import ProjectBox from './ProjectBox';

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

const ProjectSection= () => (
  <div style={styleProjectSection}>
    <Paper style={style} zDepth={zDepth} ><p>Langeland Skisenter</p></Paper>
    <Paper style={style} zDepth={zDepth} ><p>Toptour</p></Paper>
    <Paper style={style} zDepth={zDepth} ><p>Qmesh</p></Paper>
    <Paper style={style} zDepth={zDepth} ><p>PointClouds</p></Paper>
    <Paper style={style} zDepth={zDepth} ><p>Server project</p></Paper>
  </div>
);

export default ProjectSection;