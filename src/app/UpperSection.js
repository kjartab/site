import React from 'react';

const bgImage = require('./IMG_2669s.jpg');

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundPosition: "right 0",
  backgroundImage: "url(" + bgImage+ ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
};


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
            <p>test</p>

          </div>
        );
    }


}