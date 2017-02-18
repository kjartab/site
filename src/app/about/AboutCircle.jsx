import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  zIndex: 1000,
  display: 'inline-block',
};

const imgStyle = {
  borderRadius: 100,
  height: 150,
  width: 150,
  marginTop: 0
}

export default class AboutCircle extends React.Component {
    
    constructor(props) {
        super(props);        
    }

    render() {
        var about = this.props.about; 
        return (<div>
            <Paper style={style} zDepth={1} circle={true}>
            <img style={imgStyle} src={about.imgUrl}></img>
            </Paper>
            <div>
                <h4>{about.yearstart}-{about.yearend}</h4>
                <h3>{about.title}</h3>
                <p>{about.text}</p>
            </div>
        </div>)
    }

}

