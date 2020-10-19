import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Team from "./pages/Team";
import Jobs from "./pages/Jobs";
import Jobseeker from "./pages/Jobseeker";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/signup";

class MainRouter extends Component {
    state = {
        user: {},
        error: null,
        authenticated: false,
    };
    componentDidMount() {
        fetch("http://localhost:5000/", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.session);
                    return response.session.user;
                }
            })
            .then((responseJson) => {
                this.setState({
                    authenticated: true,
                    user: responseJson.user,
                });
            })
            .catch((error) => {
                this.setState({
                    authenticated: false,
                    error: "Failed to authenticate user",
                });
            });
    }
    render() {
        return (
            <>
                <NavBar />
                {/* //     authenticated={this.state.authenticated}
                //     handleNotAuthenticated={this._handleNotAuthenticated}
                // /> */}
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/jobs' component={Jobs} />
                    <Route exact path='/jobseeker/:id' component={Jobseeker} />
                    <Route exact path='/team' component={Team} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
                <Footer />
            </>
        );
    }

    _handleNotAuthenticated = () => {
        this.setState({ authenticated: false });
    };
}

export default MainRouter;
