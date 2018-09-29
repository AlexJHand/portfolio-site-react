import React from 'react';

export default class EmailSuccess extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showHideClassName: this.props.show ? "email__success email__success-show" : "email__success"
        }
    }
    
    render() {
        if (this.props.show) {
            return (
                <div className="email__success email__success-show" id="success">
                    <div className="email__success-text">Your message was sent!</div>
                    <a href="#" className="btn email__success-button" onClick={this.props.closeModal}>Close</a>
                </div>
            )
        } else {
            return <div></div>
        }
        
    }
}