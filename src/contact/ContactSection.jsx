import React from 'react';
import ProjectBox from './ContactElement.jsx';
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
    height: 100,
    backgroundColor: '#343434',
    color: '#efefef',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
}


const zDepth = 1;


export default class ContactSection extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
          <div style={containerStyle}>
            <h3>Contact me</h3>            
          </div>
        )
    }
}