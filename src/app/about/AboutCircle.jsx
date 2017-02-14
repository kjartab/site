import React from 'react';
import Paper from 'material-ui/Paper';


const style = {
  // position:ab
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};



export default class AboutCircle extends React.Component {
    state = {  


    }

    render() {
        return <div>
            <Paper style={style} zDepth={1} circle={true} />
            <div>
                <h4>{this.props.yearstart}-{this.props.yearend}</h4>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </div>
        </div>
    }

}

