import React from 'react';

export default class HomeIcon extends React.Component {
    render() {
        return(
            <li className={this.props.className}>
                <a href={this.props.href}>
                    <i className={this.props.iClassName} aria-hidden="true"></i>
                </a>
            </li>
        )
    }
}