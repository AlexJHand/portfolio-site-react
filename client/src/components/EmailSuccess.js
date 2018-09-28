import React from 'react';

export default class EmailSuccess extends React.Component {
    render() {
        return (
            <div className="email__success" id="success">
                <div className="email__success-text">Your message was sent!</div>
                <a href="#" className="btn email__success-button">Close</a>
            </div>
        )
    }
}