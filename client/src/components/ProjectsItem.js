import React from 'react';

export default class ProjectsItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImg: 0
        }
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    nextImage() {
        this.setState({currentImg: this.state.currentImg === this.props.imgArray.length - 1 ? 0 : this.state.currentImg + 1});
    }

    previousImage() {
        this.setState({currentImg: this.state.currentImg === 0 ? this.props.imgArray.length - 1 : this.state.currentImg - 1});
    }
    
    render() {
        let hostedLink;
        if(this.props.hostedLink) {
            hostedLink = <span><span> - </span><a className="projects__links" href={this.props.hostedLink}>Link</a></span>
        } else {
            hostedLink = <span></span>
        }

        return(
            <div className="projects__item">
                <div className="card">
                    <div className="projects__item-display">
                        
                        <div className="projects__item-group" id="lfcHome">
                            <div className="projects__radio-label projects__item-left" onClick={this.previousImage}>
                                <div className="projects__item-cursor">&#10094;</div>
                            </div>
                            <img className="projects__item-slide" src={this.props.imgArray[this.state.currentImg]} alt="Project Screenshot" />
                            
                            <div className="projects__radio-label projects__item-right" onClick={this.nextImage}>
                                <div className="projects__item-cursor">&#10095;</div>
                            </div>
                        </div>
                    </div>

                    <div className="cardContainer">
                        <h4>
                            <b>{this.props.projectName}</b>
                        </h4>
                        <span> - </span>
                        <a className="projects__links" href={this.props.githubLink}>GitHub Link</a>
                        {hostedLink}
                        <p>This application scrapes the web for Liverpool Football Club game times and then converts and displays those
                            times in Eastern, Central, Mountain, and Pacific time zones, as well as various other data about the current Premier
                            League season.
                        </p>
                        <h4>
                            <b>Technologies Used</b>
                        </h4>
                        <p>React, Node, Express, Request, Cheerio, HTML5, and CSS3.</p>
                    </div>
                </div>
            </div>
        )
    }
}