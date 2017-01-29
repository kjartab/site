import React from 'react';
import Paper from 'material-ui/Paper';

export default class ProjectBox extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={style} zDepth={zDepth} ><p>Langeland Skisenter</p></Paper>
        );
    }

}