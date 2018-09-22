import React from 'react';
import HomeIcon from '../components/HomeIcon';

export default class Home extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="row">
                    <div className="col-1-of-2">
                        <img src={require ("../images/Alex_Hand.jpg")} className="user__img" />
                    </div>
                    <div className="col-1-of-2">
                        <div className="user__text">
                            <h3 className="heading-secondary">Software Developer</h3>
                            <div className="row">
                                <ul className="user__links">
                                    {/* <li className="home__icon">
                                        <a href="https://github.com/AlexJHand">
                                            <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li> */}
                                    <HomeIcon 
                                        className="home__icon" 
                                        href="https://github.com/AlexJHand"
                                        iClassName="fa fa-github fa-5x"
                                    />
                                    <li className="user__icon">
                                        <a href="https://www.linkedin.com/in/alexjhand/">
                                            <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="user__icon">
                                        <a href="https://twitter.com/alexjhand">
                                            <i className="fa fa-twitter-square fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="user__icon">
                                        <a href="#email">
                                            <i className="fa fa-envelope fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}