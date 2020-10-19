import React, { Component } from "react";
import "./home.css";
import backgroundimage from "../assets/bliss_bg.png";
import { Card, Button, CardText } from "reactstrap";

class Home extends Component {
    render() {
        return (
            <div
                style={{
                    background: `url(${backgroundimage})`,
                    backgroundSize: "100%",
                    width: "100%",
                    minHeight: "270px",
                }}
            >
                {/* <img src={logo} className='homelogo' /> */}

                <Card className='homekacard'>
                    <CardText className='carding'>
                        <h1>
                            <p>Hello,</p>
                            <p>
                                {" "}
                                Want to find an amazing Job that suits your
                                skill?
                            </p>
                        </h1>
                    </CardText>

                    <CardText className='carding'>
                        <h2>Jobify will help you!</h2>
                    </CardText>

                    <Button href='/jobs' color='secondary'>
                        Search Here
                    </Button>
                </Card>
            </div>
        );
    }
}

export default Home;
