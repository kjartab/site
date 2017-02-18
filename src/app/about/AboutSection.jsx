import React from 'react';
import Paper from 'material-ui/Paper';
import AboutCircle from './AboutCircle.jsx'

const containerStyle = {
    marginTop: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
}


const timelineStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 40,
    width: 2,
    marginLeft: -1.5,
    left: "50%",
    zIndex: 0,
    backgroundColor: '#111'
}

const timelineContainerStyle = {
    position: 'relative',
    padding: 0,
    listStyle: 'none'

}

export default class AboutSection extends React.Component {
  
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div style={containerStyle}>
            <h1>About me</h1>
            <p>A bit about my background</p>
            <div style={timelineContainerStyle}>
                <div style={timelineStyle}></div>
                {
                    this.props.abouts.map((about) => 
                        <AboutCircle  about={about} />
                    )
                }

            </div>
          </div>
        )
    }
}
