import React, { Component } from "react";
import "./jobcard.css";
import img from "../assets/blissMinilogo.png";
import dat from "../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCogs,
    faMapMarker,
    faCoins,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class JobSeeker extends Component {
    componentDidMount() {
        axios
            .get("http://localhost:3000/jobseeker/")
            .then((response) => {
                this.setState({ jobseeker: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const da = dat.find((item, index) => {
            if (item.uniq_id == this.props.match.params.id) {
                return true;
            }
        });
        const data = [];
        data.push(da);
        return (
            <>
                {data.map((item, index) => {
                    return (
                        <div className='outer-divv' key={index}>
                            <div className='imgg-div'>
                                <img src={img} className='job-img' />
                                <div className='imgg-txt'>
                                    <span>
                                        <h3>{item.company}</h3>
                                    </span>
                                    <br />
                                    <span>
                                        <h3>{item.jobtitle}</h3>
                                    </span>
                                </div>
                            </div>
                            <div className='content-div'>
                                <span>
                                    <span className='span-block'>
                                        <FontAwesomeIcon icon={faBriefcase} />
                                        &nbsp;Experience
                                        {("\n", item.experience)}
                                    </span>
                                </span>
                                <span>
                                    <span className='span-block'>
                                        <FontAwesomeIcon icon={faMapMarker} />
                                        &nbsp; JobLocation
                                        {("\n", item.joblocation_address)}
                                    </span>
                                </span>
                                <span>
                                    <span className='span-block'>
                                        <FontAwesomeIcon icon={faCogs} />
                                        &nbsp; Skills{("\n", item.skills)}
                                    </span>
                                </span>
                                <span>
                                    <span className='span-block'>
                                        <FontAwesomeIcon icon={faCoins} />
                                        &nbsp; Salary{("\n", item.payrate)}
                                    </span>
                                </span>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
}

export default JobSeeker;
