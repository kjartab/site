import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  cursor: 'pointer'
};

const zDepth = 2;

export default class ProjectBox extends React.Component {
    state = {  
      hover: false,
      zDepth: 2
    };

    constructor(props) {
        super(props);
        this.toggleHover = this.toggleHover.bind(this);
    }

    handleClick(e) {
      console.log("click", e)
    }

    toggleHover() {
      console.log("hover");
      this.setState({'hover': !this.state.hover});
    }

    render() {

        return (
            <Paper 
              style={style} 
              zDepth={2} 
              onMouseEnter={this.toggleHover} 
              onMouseLeave={this.toggleHover}
              onClick={this.handleClick}
            >
              <img></img>
              <h4>{this.props.name}</h4>
              <p>Storing, visualizing and 3D printing the DEM of Norway</p>
            </Paper>
        );
    }

}