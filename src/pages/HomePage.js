import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AOS from '../../node_modules/aos/dist/aos';
import ControlledCarousel from '../components/Carousel';
import Projects from '../components/Projects';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Card from 'react-bootstrap/Card';
//import { Image } from "react-bootstrap";

function HomePage(){
    return(
        <div>
            <div className='main' data-aos="fade-up">
                <p><h2>Hello There,</h2></p>
                    <div className='potraitSmall'>
                        <Row>
                            <Col xs={12} md={4} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                            <img className='potraitImg' src="https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/potrait_280_343.jpg" alt=""></img>
                            </Col>

                            <Col xs={12} md={8} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                                        <h1><span>Naresh</span> here</h1>
                                <p>I am a web developper with the knowledge of web techhnology such as HTML, CSS, Javascript, node, express, react, MySql, Mongodb and more..I love coding and helping others on coding
                                    and my interests outside IT are: music, movies, Reading + writing and travelling </p>
                                <ButtonToolbar fluid={true} ml-2>
                                    <Button variant="outline-success" href='https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/Naresh-Resume.pdf' target='_blank'>Resume</Button>                   
                                    <Button variant="outline-success" href='https://github.com/citenaresh' target='_blank'>Github</Button>
                                </ButtonToolbar>
                                <br></br>
                               <p><h3><span>Scroll Down </span>to know about some of my web projects</h3></p>
                            </Col>
                        </Row>


                        

            </div>
           
            </div>
            
          <div className='portfolio' fluid={true}><Projects/>
          </div>
          <ControlledCarousel />

        </div>
    );
}
export default HomePage;
AOS.init();