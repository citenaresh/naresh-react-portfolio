import React from 'react';
import AOS from '../../node_modules/aos/dist/aos';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function AboutPage(){
    return(
        <div className="main" data-aos="fade-up">
            <h2><span>About Me</span></h2>
            <div className="mainAbout">
            <Row>
                <Col xs={12} md={4} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                    <img className='bgImg' src="https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/img_bg.jpg" alt=""></img>
                </Col>

                <Col xs={12} md={4} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                        <h2><span>Naresh Raj Poudel</span></h2>
                        <p>
                            <h4>I am a Full Stack Developer,I like to think out of the box and build things.I have been studying IT for a long time and working as a free-lance programmer,
                            I have experience in web app developing in both front-end and back-end development with the knowledge of web techhnology such as 
                            HTML, CSS, Javascript, node, express, react, MySql, Mongodb and more..<br></br><br></br>
                            After Graduating in Economics and account in 2002, I studied diploma in software engineering and developed small software and programs for myself and for my clients.
                            To get refreshed I enrolled into the "Full Stack Web Development Bootcamp" program from University of Western Australia(November 2020-May 2021).<br></br><br></br>
                            Beside Web development, I like to read all sort of books, write short story and poem, Music, Movies and Travelling.</h4>
                            

                        </p>
                
                </Col>

                <Col xs={12} md={4} className='p-0 pr-5 pb-3' data-aos='fade-right'>
                    <img className='fordImg' src="https://raw.githubusercontent.com/citenaresh/ForRepPictures/master/images/Ford.jpg" alt=""></img>
                </Col>


         </Row>
            </div>
        </div>
        

    );
}
export default AboutPage;
AOS.init();