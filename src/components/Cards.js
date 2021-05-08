import React from 'react';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";

import AOS from 'aos/dist/aos';

class Cards extends React.Component {
    render(){
        return (
            <Card data-aos="fade-up" className='bg shadow' text='white'>
                <Card.Img as={Image} src={this.props.project.imageLink} fluid={true} alt="Card image" />
                <Card.Body>                                  
                    <Card.Title>{this.props.project.title}</Card.Title>
                    <Card.Text>{this.props.project.description}</Card.Text>
                    <Card.Link href={this.props.project.link} target='_blank'>View</Card.Link>
                </Card.Body>
                
            </Card>
        )
    }
}

export default Cards;
AOS.init();