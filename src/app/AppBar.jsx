import React from 'react';
import AppBar from 'material-ui/AppBar';
import Main from './Main.jsx'; // Our custom react component
import {  Link  } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'; // Our custom react component

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
export default class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleMyProjects() {
        // handleToggle();

        this.setState({open : false})
    }

    handleSignOut() {
        console.log("signed out")
        console.log(this);
    }


    render() {
        return (
            <div>
                <AppBar onLeftIconButtonTouchTap={this.handleToggle}
                    title="Kartan"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                /> 
                <Drawer
                    ref="Drawer"
                    docked={false}
                    handleMyProjects={this.handleMyProjects}
                    handleSignOut={this.handleSignOut}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                >   
                    <MenuItem onTouchTap={this.handleMyProjects}>My Projects</MenuItem>
                    <MenuItem onTouchTap={this.handleSignOut}>Sign Out</MenuItem>
                </Drawer>
                <Link to="projects">t</Link>
            </div>
        )
    }
    
}


