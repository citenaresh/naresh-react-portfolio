  
import React from 'react';
import Container from 'react-bootstrap/Container';
import github from '../assets/icons/github.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';

function Footer() {

    return(
        <footer className="mt-5 border-top">
            <Container fluid={true}>
                <div className='mt-3 d-flex justify-content-center' >
                    <a className='mr-2' rel="noopener noreferrer" href="https://twitter.com/AgyaatVismay" target='_blank'><img alt="Twitter" className='media' src={twitter} /></a>             
                    <a className='mr-2' rel="noopener noreferrer" href="https://github.com/citenaresh" target='_blank'><img alt="Github"  className='media' src={github} /></a>
                    <a className='mr-2' rel="noopener noreferrer" href="https://www.linkedin.com/in/naresh-raj-poudel-94bb89203/" target='_blank'><img alt="Linkedin" className='media' src={linkedin} /></a>
                </div>
                <small className="p-2 d-flex justify-content-center text-center">
                    Website created by Naresh Raj Poudel
                </small>
            </Container>
        </footer>
    );

}

export default Footer;