import React from 'react';
import LFCProjectsItem from '../components/LFCProjectsItem';

export default class Projects extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            lfcImages: [
                "../images/lfc_scheduler/home_Screenshot.png",
                "../images/lfc_scheduler/table_Screenshot.png",
                "../images/lfc_scheduler/goals_Screenshot.png"
            ]
        }
    }

    render() {
        return (
            <div className="projects">
                <LFCProjectsItem imgArray={this.state.lfcImages}/>
            </div>
        )
    }
}