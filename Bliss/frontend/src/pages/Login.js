import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

class Login extends Component {
    render() {
        return (
            <Container
                component='main'
                maxWidth='xs'
                authenticated={this.authenticated}
                handleNotAuthenticated={this._handleNotAuthenticated}
            >
                <div className='paper'>
                    <Avatar className='avatar'></Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        className='submit'
                        onClick={this._handleSignInClick}
                    >
                        <FontAwesomeIcon icon={faGoogle} /> &nbsp;Login with
                        Google
                    </Button>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <hr />
                        OR
                        <br />
                    </div>
                    <form className='form' noValidate>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value='remember' color='primary' />
                            }
                            label='Remember me'
                        />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className='submit'
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href='/signup' variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }

    _handleSignInClick = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };
    _handleLogoutClick = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
        this.props._handleNotAuthenticated();
    };
}
export default Login;
