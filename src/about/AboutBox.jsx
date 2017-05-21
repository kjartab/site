import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: 150,
  margin: 20,
  textAlign: 'center',
  zIndex: 1000,
  display: 'inline-block',
  position: 'relative'
};

const imgStyle = {
  borderRadius: 100,
  height: 150,
  width: 150,
  marginTop: 0
}

const aboutContentStyle = {
  width: '45%',
  marginLeft: '38%'
}

const textContentStyle = {  
  display: 'inline-block',
  width: '45%'
}

const imageContentStyle =  {
  display: 'inline-block' 
}

export default class AboutBox extends React.Component {
    
    constructor(props) {
        super(props);        
    }

    render() {
        var about = this.props.about; 
        return (
          <div style={aboutContentStyle}>
            <div style={textContentStyle}>
              <Paper style={style} zDepth={1} circle={true}>
                <img style={imgStyle} src={about.imgUrl}></img>
              </Paper>
            </div>
            <div style={textContentStyle}>
                <h4>{about.yearstart}-{about.yearend}</h4>
                <h3>{about.title}</h3>
                <p>{about.text}</p>
            </div>
          </div>
        )
    }

}

