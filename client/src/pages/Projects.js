import React from 'react';
import ProjectsItem from '../components/ProjectsItem';

import home_Screenshot from '../images/lfc_scheduler/home_Screenshot.png';
import table_Screenshot from '../images/lfc_scheduler/table_Screenshot.png';
import goals_Screenshot from '../images/lfc_scheduler/goals_Screenshot.png';

export default class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lfcImages: [
                home_Screenshot,
                table_Screenshot,
                goals_Screenshot
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
                />
            </div>
        )
    }
}