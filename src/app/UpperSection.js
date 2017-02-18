import React from 'react';

const bgImage = require('./IMG_2669bwr.jpg');

var sectionStyle = {
    marginTop: -22,
    width: "100%",
    height: "700px",
    backgroundPosition: "right 0",
    backgroundImage: "url(" + bgImage+ ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};

var topRow = {
    display:"inline-block"


}
var leftTopRow = {
    position: "absolute",
    top: 30,
    left: 150
}

var rightTopRow = {
    position: "absolute",
    top: 30,
    right: 150

}

var topRowElement = {
    display: "inline-block",
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontWeight: 400,
    letterSpacing: 1,
    color: '#B4000F'

}

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
          <div className="uppersection" style={ sectionStyle }>

            <div style={topRow}>
                <div style={leftTopRow}>
                <h1 style={topRowElement}>kartan</h1>
                </div>
                <div style={rightTopRow}>
                    <h2 style={topRowElement}>projects</h2>
                    <h2 style={topRowElement}>about</h2>
                    <h2 style={topRowElement}>contact</h2>
                </div>
            </div>

          </div>
        );
    }


}