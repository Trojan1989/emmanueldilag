import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    HeroSection,
    HeroIntro,
    HeroName,
    HeroWord
} from './HeroElements';
import { TimelineLite, Power3 } from 'gsap';

export const Hero = () => {
    let t1 = new TimelineLite({delay: 0.5});

    useEffect(() => {
        t1.from('.HeroIntro',{
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.5
        }, 'Start');
        t1.staggerFrom('.HeroName', 1,{
            x: 30,
            ease: Power3.easeOut,
            opacity: 0,
        }, 0.15, 'Start');
        t1.from('.HeroWord',{
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            delay: 0.5
        }, 'Start');
    });



    return(
        <HeroSection id="home" className="d-flex align-items-center justify-content-center text-center">
            <Container>
                <Row>
                    <Col>
                        <HeroIntro className="HeroIntro">Hello, I'm</HeroIntro>
                        <HeroName className="HeroName">Emmanuel M. Dilag</HeroName>
                        <HeroWord className="HeroWord">And i want to be a Web Developer</HeroWord>
                    </Col>
                </Row>
            </Container>
        </HeroSection>
    );
}

export default Hero;