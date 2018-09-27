import React from 'react';
import HomeIcon from '../components/HomeIcon';

export default class Home extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="row">
                    <div className="col-1-of-2">
                        <img src={require ("../images/Alex_Hand.jpg")} className="user__img" alt="Alex J Hand"/>
                    </div>
                    <div className="col-1-of-2">
                        <div className="user__text">
                            <h3 className="heading-secondary">Software Developer</h3>
                            <div className="row">
                                <ul className="user__links">
                                    <HomeIcon 
                                        className="user__icon" 
                                        href="https://github.com/AlexJHand"
                                        iClassName="fa fa-github fa-5x"
                                    />
                                    <HomeIcon
                                        className="user__icon"
                                        href="https://www.linkedin.com/in/alexjhand/"
                                        iClassName="fa fa-linkedin-square fa-5x"
                                    />
                                    <HomeIcon
                                        className="user__icon"
                                        href="https://twitter.com/alexjhand"
                                        iClassName="fa fa-twitter-square fa-5x"
                                    />
                                    <HomeIcon
                                        className="user__icon"
                                        href="#email"
                                        iClassName="fa fa-envelope fa-5x"
                                    />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}