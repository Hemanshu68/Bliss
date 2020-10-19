import React, { Component } from "react";
import "./jobcard.css";
import img from "../assets/blissMinilogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCogs,
    faMapMarker,
    faCoins,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class JobCards extends Component {
    componentDidMount() {
        axios
            .get("http://localhost:3000/jobs/")
            .then((response) => {
                this.setState({ jobs: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
        // window.location = "/";
    }
    render() {
        const {
            company,
            jobtitle,
            experience,
            joblocation_address,
            skills,
            payrate,
            uniqId,
        } = this.props;
        console.log("THiSJBCKJ", uniqId);
        return (
            <div className='outer-divv'>
                <div className='imgg-div'>
                    <img src={img} className='job-img' />
                    <div className='imgg-txt'>
                        <h3 style={{ padding: "2px" }}>{jobtitle}</h3>
                        <h5 style={{ padding: "2px" }}>{company}</h5>
                    </div>
                </div>
                <div className='content-div'>
                    <span>
                        <span className='span-block'>
                            <FontAwesomeIcon icon={faBriefcase} />
                            &nbsp;Experience
                            <br />
                            {experience}
                        </span>
                    </span>
                    <span>
                        <span className='span-block'>
                            <FontAwesomeIcon icon={faMapMarker} />
                            &nbsp; JobLocation <br />
                            {joblocation_address}
                        </span>
                    </span>
                    <span>
                        <span className='span-block'>
                            <FontAwesomeIcon icon={faCogs} />
                            &nbsp; Skills <br />
                            {skills}
                        </span>
                    </span>
                    <span>
                        <span className='span-block'>
                            <FontAwesomeIcon icon={faCoins} />
                            &nbsp; Salary <br />
                            {payrate}
                        </span>
                    </span>
                </div>
                <Link to={`/jobseeker/${uniqId}`} className='view-btn'>
                    &nbsp; View details
                </Link>
            </div>
        );
    }
}

export default JobCards;
