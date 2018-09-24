import React from 'react';

export default class ProjectsItem extends React.Component {
    render() {
        return(
            <div className="projects__item">
                <div className="card">
                    <div className="projects__item-display">
                        <input checked type="radio" className="projects__radio-input" id="lfcOne" name="lfc" />
                        <div className="projects__item-group" id="lfcHome">
                            <img className="projects__item-slide" src={require ("../images/lfc_scheduler/home_Screenshot.png")} alt="LFC-Scheduler Home"/>
                            <label for="lfcThree" className="projects__radio-label projects__item-left">
                                <div className="projects__item-cursor">&#10094;</div>
                            </label>
                            <label for="lfcTwo" className="projects__radio-label projects__item-right">
                                <div className="projects__item-cursor">&#10095;</div>
                            </label>
                        </div>
                        <input type="radio" className="projects__radio-input" id="lfcTwo" name="lfc" />
                        <div className="projects__item-group" id="lfcTable">
                            <img className="projects__item-slide" src={require ("../images/lfc_scheduler/table_Screenshot.png")} alt="Premier League Table"/>
                            <label for="lfcOne" className="projects__radio-label projects__item-left">
                                <div className="projects__item-cursor">&#10094;</div>
                            </label>
                            <label for="lfcThree" className="projects__radio-label projects__item-right">
                                <div className="projects__item-cursor">&#10095;</div>
                            </label>
                        </div>
                        <input type="radio" className="projects__radio-input" id="lfcThree" name="lfc" />
                        <div className="projects__item-group" id="lfcGoals">
                            <img className="projects__item-slide" src={require ("../images/lfc_scheduler/goals_Screenshot.png")} alt="Premier League Goal Leaders Table" />
                                <label for="lfcTwo" className="projects__radio-label projects__item-left">
                                    <div className="projects__item-cursor">&#10094;</div>
                                </label>
                                <label for="lfcOne" className="projects__radio-label projects__item-right">
                                    <div className="projects__item-cursor">&#10095;</div>
                                </label>
                        </div>
                    </div>

                    <div className="cardContainer">
                        <h4>
                            <b>LFC-Scheduler</b>
                        </h4>
                        <span> - </span>
                        <a className="projects__links" href="https://lfc-scheduler.herokuapp.com/">Link</a>
                        <span> - </span>
                        <a className="projects__links" href="https://github.com/AlexJHand/LFCSchedule">GitHub Link</a>
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