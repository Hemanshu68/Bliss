import React, { Component } from "react";
import "./UserProfile.css";

class UserProfile extends Component {
    render() {
        return (
            <div className='profile-main'>
                <div className='profile-header'>
                    <div className='user-detail'>
                        <div className='user-image'>
                            <img src='https://source.unsplash.com/1600x900/?nature'></img>
                        </div>
                        <div className='user-data'>
                            <h2>Tony Stark</h2>
                            <p>
                                Founder of<strong>Stark Industry</strong>
                                <i
                                    class='fa fa-map-marker'
                                    aria-hidden='true'
                                ></i>
                                 New York{" "}
                            </p>
                            <span className='post-label'>skill1</span>
                            <span className='post-label'>skill2</span>
                            <span className='post-label'>skill3</span>
                            <a href='#' type='button' className='msg-btn'>
                                <i
                                    className='fa fa-edit-o'
                                    aria-hidden='true'
                                ></i>
                                Edit resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
