import React from 'react';
import axios from 'axios';

import EmailSuccess from './EmailSuccess';

export default class Email extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            email: "",
            subject: "",
            message: "",
            showSuccessModal: false,
            modalMessage: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.modalDisplay = this.modalDisplay.bind(this);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("In handleFormSubmit");
        
        if(this.state.email && this.state.subject && this.state.message) {
            const messageObj = {
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }
            
            axios.post(`/mail`, messageObj)
                .then(response => this.modalDisplay("Your message was sent!"))
                .catch(error => this.modalDisplay("Something went wrong, please try again shortly."))
        }
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    modalDisplay = (message) => {
        this.setState({
            showSuccessModal: !this.state.showSuccessModal,
            modalMessage: message
        });
    }

    render() {
        const {showSuccessModal} = this.state.showSuccessModal;
        return(
            <div className="email" id="email">
                <div className="email__content">
                    <h3 className="heading-secondary">Send A Message</h3>
                    <a href="#" className="email__close">&times;</a>
                    <div className="email__form">
                        <form className="form" action="#success">
                            <div className="form__group">
                                <label 
                                    htmlFor="guestEmail" 
                                    className="form__label"
                                >
                                Your Email Address
                                </label>
                                <input 
                                    type="email" 
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    autoFocus 
                                    required 
                                    id="guestEmail" 
                                    placeholder="email" 
                                    className="form__input" 
                                    name="email"
                                    />
                            </div>
                            <div className="form__group">
                                <label 
                                    htmlFor="emailSubject" 
                                    className="form__label"
                                >
                                Subject
                                </label>
                                <input 
                                    type="text"   
                                    value={this.state.subject} 
                                    onChange={this.handleInputChange}
                                    required 
                                    id="emailSubject" 
                                    placeholder="subject" 
                                    className="form__input" 
                                    name="subject"
                                />
                            </div>
                            <div className="form__group">
                                <label 
                                    htmlFor="emailBody" 
                                    className="form__label"
                                >
                                Message
                                </label>
                                <textarea 
                                    required 
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    id="emailBody" 
                                    placeholder="message" 
                                    className="form__input" 
                                    rows="10" 
                                    name="message"
                                >
                                </textarea>
                            </div>
                            <button type="submit" className="btn" onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    {<EmailSuccess 
                        show={this.state.showSuccessModal} 
                        closeModal={this.modalDisplay} 
                        message={this.state.modalMessage}
                    />}
                </div>
               
            </div>

                    
        )
    }
}