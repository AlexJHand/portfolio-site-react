import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="heading-primary">
                            <a href="/">Alex J Hand</a>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="header__navigation">
                            <ul className="header__list">
                                <li className="header__item"><a href="/projects" className="header__link">Projects</a></li>
                                <li className="header__item"><a href="/about" className="header__link">About</a></li>
                                <li className="header__item"><a href="#email" className="header__link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}