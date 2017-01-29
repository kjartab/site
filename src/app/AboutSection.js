import React from 'react';
import Paper from 'material-ui/Paper';

export default class UpperSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            divStyle: {
                'marginLeft': '0',
                'marginRight': 'auto',
                color: "blue"
            }
        };
    }

    render() {
        return (
          <div style={ sectionStyle }>
                
            <Paper style={style} zDepth={zDepth} ><p>Langeland Skisenter</p></Paper>

            <Paper style={style} zDepth={zDepth} ><p>Langeland Skisenter</p></Paper>
            
            <Paper style={style} zDepth={zDepth} ><p>Langeland Skisenter</p></Paper>
          </div>
        );
    }

}