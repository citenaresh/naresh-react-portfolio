import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
//import Card from 'react-bootstrap/Card';
import Cards from '../components/Cards';

import AOS from 'aos/dist/aos';

class Projects extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    title: "BurgerAce",
                    imageLink: "https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/burgerace.png",
                    description: "Burger Race (Burger logger app) Utilizing Node Express Handlebars",
                    link: "https://github.com/citenaresh/burgerace",
                    updated: "June 17, 2019"
                },
                {
                    title: "Weather-Dashboard",
                    imageLink:"https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/weather-dashboard.png",
                    description: "web app to find weather condition of a certain city",
                    link: "https://github.com/citenaresh/Weather-Dashboard",
                    updated: "February 26, 2019"
                },
                {
                    title: "Note-Taker",
                    imageLink:"https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/note-taker.png",
                    description: "This is a web application which is used for writing and saving notes.",
                    link: "https://github.com/citenaresh/note-taker",
                    updated: "January 20, 2019"
                },
                {
                    title: "Workout-Tracker",
                    imageLink:"https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/workout.png",
                    description: "Workout Tracking app",
                    link: "https://naresh-workout.herokuapp.com/",
                    updated: "February 26, 2019"
                },
                {
                    title: "Reci-Bits",
                    imageLink:"https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/recibits.png",
                    description: "web app to search for recipe and nutrition information from ingredient or food (or drink) items provided",
                    link: "https://github.com/willygodwin/reci-bits",
                    updated: "January 20, 2019"
                },
                {
                    title: "Budget-Tracker",
                    imageLink:"https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/budget.png",
                    description: "This Budget Tracker app allows user to track their budget online or offline",
                    link: "https://track-d-budget.herokuapp.com/",
                    updated: "March 19, 2018"
                }
            ]
        }
    }

    render(){

        let projectList = this.state.projects.map(project => {
            return (
                <Cards project={project}/>
            )
        })

        return(
            
            <CardDeck>
                
                {projectList}

            </CardDeck>
        )
    }
}
export default Projects;
AOS.init();