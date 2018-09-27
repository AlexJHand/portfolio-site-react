import React from 'react';
import ProjectsItem from '../components/ProjectsItem';

// LFC-Scheduler images
import home_Screenshot from '../images/lfc_scheduler/home_Screenshot.png';
import table_Screenshot from '../images/lfc_scheduler/table_Screenshot.png';
import goals_Screenshot from '../images/lfc_scheduler/goals_Screenshot.png';

// Social Drinker images
import sd_login from '../images/social_drinker/login.png';
import sd_social from '../images/social_drinker/social_drinker.png';
import sd_furious from '../images/social_drinker/furious.png';
import sd_search from '../images/social_drinker/search_page.png';

// MCM images
import mcm_landing from '../images/mcm/MCMLanding.png'
import mcm_intake from '../images/mcm/MCMIntake.png';
import mcm_edit from '../images/mcm/MCMEdit.png';
import mcm_global from '../images/mcm/MCMGlobal.png';
import mcm_annual from '../images/mcm/MCMAnnual.png';

// Blog image
import blog_img from '../images/blog.png';


export default class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lfcImages: [
                home_Screenshot,
                table_Screenshot,
                goals_Screenshot
            ],
            socialImages: [
                sd_login,
                sd_social,
                sd_furious,
                sd_search
            ],
            mcmImages: [
                mcm_landing,
                mcm_intake,
                mcm_edit,
                mcm_global,
                mcm_annual
            ],
            blogImages: [
                blog_img
            ]
        }
    }

    render() {
        return (
            <div className="projects">
                <ProjectsItem 
                    imgArray={this.state.lfcImages}
                    projectName="LFC-Scheduler"   
                    githubLink="https://github.com/AlexJHand/LFCSchedule"
                    hostedLink="https://lfc-scheduler.herokuapp.com/" 
                    projectDescription="This application scrapes the web for Liverpool Football Club game times and then converts and displays those
                            times in Eastern, Central, Mountain, and Pacific time zones, as well as various other data about the current Premier
                            League season."
                    techUsed="React, Node, Express, Request, Cheerio, HTML5, and CSS3."
                />
                <ProjectsItem
                    imgArray={this.state.socialImages}
                    projectName="Social Drinker"
                    githubLink="https://github.com/AlexJHand/SocialDrinker"
                    hostedLink="http://socialdrinker.herokuapp.com/"
                    projectDescription="Prime Solo Project] An application to help users remember and track which beers they have consumed, as well as their
                    opinions about them. Social Drinker allows them to search by beer name or brewery, and then lets them input a
                    rating as well as a comment."
                    techUsed="HTML5, CSS3, AngularJS, NodeJS, Express, Passport, PostgreSQL, BreweryDB api, Sweet Alerts, Google Fonts."
                />
                <ProjectsItem
                    imgArray={this.state.mcmImages}
                    projectName="Minnesota Missing Children"
                    githubLink="https://github.com/mcmdevproject/mcmreporting"
                    projectDescription="[Prime Group Project] An application built for Missing Children Minnesota, to allow case workers to fill out an intake
                    form for a new case, which will then be able to be printed to a pdf. In addition to this, a portion of the data
                    from the form will be stored in a database for reporting purposes."
                    techUsed="HTML5, CSS3, AngularJS, NodeJS, Express, Passport, PostgreSQL, Bootstrap, Angular Materials, Sweet Alerts, and ChartsJS."
                />
                <ProjectsItem 
                    imgArray={this.state.blogImages}
                    projectName="Blog"
                    githubLink="https://github.com/AlexJHand/Blog"
                    projectDescription="A simple MEAN stack blog."
                    techUsed="HTML5, CSS3, AngularJS, NodeJS, Express, and MongoDB."
                />
            </div>
        )
    }
}