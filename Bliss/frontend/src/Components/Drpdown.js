import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Userprofile from "./UserProfile";

class Drpdown extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        return (
            <div>
                <Button
                    aria-controls='simple-menu'
                    aria-haspopup='true'
                    onClick={this.handleClick}
                >
                    <Avatar>{this.props.inital}</Avatar>
                </Button>
                <Menu
                    id='simple-menu'
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={Userprofile}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default Drpdown;
