import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about__heading">
                    <h3 className="heading-secondary">My name is Alex Hand, and I'm a software developer.</h3>
                </div>
                <div className="about__text">
                    <p className="about__item">I'm a full-stack developer based in the Twin Cities. 
                        Currently I'm working on learning Java, as well as working on various IoT and web application projects.
                    </p>
                    <p className="about__item">I'm also passionate about craft beer, European soccer, and heavy metal. 
                        If you'd like to talk to me about any of those things, or see what I'm working on currently, 
                        feel free to contact me by using my links on my home page.
                    </p>
                </div>
            </div>
        )
    }
}