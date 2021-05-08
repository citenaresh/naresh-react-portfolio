import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import one from '../assets/images/paintings/one.png';
import two from '../assets/images/paintings/two.png';
import three from '../assets/images/paintings/three.png';
import four from '../assets/images/paintings/four.png';
import five from '../assets/images/paintings/five.png';
import six from '../assets/images/paintings/six.png';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';


function ControlledCarousel() {
  
    return (
        <div className='main mt-100'>
            <Container fluid={true}>
                <Row>
                    <Col xs={12} md={12} className='p-0 shadow bg-white' data-aos='fade-up'>

                        <Carousel id='car2' className='w-100'>
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={one}
                                alt="First slide"
                            />
                           
                            </Carousel.Item>
                            
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={two}
                                alt="Third slide"
                            />
                            </Carousel.Item>
                            
                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={three}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={four}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={five}
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="w-100"
                                src={six}
                                alt="Third slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
      </div>
    );
}

export default ControlledCarousel;