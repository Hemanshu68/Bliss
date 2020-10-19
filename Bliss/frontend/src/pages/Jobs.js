import React, { Component } from "react";
import Filter from "../Components/Filter";
import JobCards from "../Components/JobCards";
import data from "../assets/data.json";
import "./jobs.css";

const dat = data.slice(1, 35);

class Jobs extends Component {
    render() {
        return (
            <div className='job-cont'>
                <div className='filter-div'>
                    <Filter></Filter>
                </div>
                <div className='jobs-div'>
                    {dat.map((item, i) => {
                        console.log(item);
                        return (
                            <JobCards
                                company={item.company}
                                jobtitle={item.jobtitle}
                                experience={item.experience}
                                joblocation_address={item.joblocation_address}
                                skills={item.skills}
                                payrate={item.payrate}
                                uniqId={item.uniq_id}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Jobs;
