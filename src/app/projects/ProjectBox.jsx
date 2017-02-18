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

const imgStyle = {
  height: 200,
  width: 380,
  marginTop: 10,
  WebkitFilter: 'grayscale(100%)'
}

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
        var project = this.props.project;
        return (
            <Paper 
              style={style} 
              zDepth={1} 
              onMouseEnter={this.toggleHover} 
              onMouseLeave={this.toggleHover}
              onClick={this.handleClick}
            >
              <img style={imgStyle} src={project.imgUrl}></img>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
            </Paper>
        );
    }

}