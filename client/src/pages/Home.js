import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="row">
                    <div className="col-1-of-2">
                        <img src={require ("../images/Alex_Hand.jpg")} className="home__img" />
                    </div>
                    <div className="col-1-of-2">
                        <div className="home__text">
                            <h3 className="heading-secondary">Software Developer</h3>
                            <div className="row">
                                <ul className="home__links">
                                    <li className="home__icon">
                                        <a href="https://github.com/AlexJHand">
                                            <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="home__icon">
                                        <a href="https://www.linkedin.com/in/alexjhand/">
                                            <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="home__icon">
                                        <a href="https://twitter.com/alexjhand">
                                            <i className="fa fa-twitter-square fa-5x" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="home__icon">
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