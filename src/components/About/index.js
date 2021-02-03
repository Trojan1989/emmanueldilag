import React, { useEffect } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { AboutSection, AboutTitle, AboutMe, AboutKnowledge } from './AboutElements';
import ProfileImage from '../img/me.png';
import Certificate from '../img/Cert_1.PNG';
import {Title} from '../Title';
import { GiGiftOfKnowledge } from 'react-icons/gi';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const About = () => {

    useEffect(() => {
        gsap.from('.Title', {
            duration: 1,
            y: -25,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutAnimation1',
                start: 'top bottom',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutAnimation1', {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutAnimation1',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutAnimation2', {
            duration: 1,
            x: 100,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutAnimation2',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutListKnowledge1', {
            duration: 1.3,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutListKnowledge1',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutListKnowledge2', {
            duration: 1.5,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutListKnowledge2',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutListKnowledge3', {
            duration: 1.7,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutListKnowledge3',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutListKnowledge4', {
            duration: 1.9,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutListKnowledge4',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.AboutListKnowledge5', {
            duration: 2.1,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.AboutListKnowledge5',
                start: 'top 70%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
    }, []);

    return(
        <AboutSection id="about">
            <Container className="text-center py-5">
                <AboutTitle className="py-5">
                    <Title className="Title">About Me</Title>
                </AboutTitle>
                <Row className="pt-5 AboutAnimationMain">
                    <Col xl={6} lg={6} md={6} sm={12} className="AboutAnimation1 pb-4">
                        <Image roundedCircle src={ProfileImage} className="me" fluid style={{height: 150, width: 150}} />
                        <AboutMe className="px-4"><b>Emmanuel M. Dilag Bachelor of Science in Computer Engeneering</b>. Coding <b>Morning</b> and <b>Evening</b> always explore to improve my coding skill and knowledge i use <b>youtube</b> and <b>main website</b> component to easily <b>understand my code</b> i want to, and about for my <b>question</b> in coding i <b>ask google</b> and my partner in coding is coffee and music.</AboutMe>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12} className="AboutAnimation2 pb-4">
                        <AboutKnowledge>
                            <h1>Knowledge</h1>
                            <ul>
                                <li><GiGiftOfKnowledge className="icon" />Computer proficiency</li>
                                <li><GiGiftOfKnowledge className="icon" />Knowledge in basic troubleshoot</li>
                                <li><GiGiftOfKnowledge className="icon" />Knowledge in Web Developer 
                                    <ul>
                                        <li className="AboutListKnowledge1">HTML</li>
                                        <li className="AboutListKnowledge2">CSS</li>
                                        <li className="AboutListKnowledge3">JavaScript</li>
                                        <li className="AboutListKnowledge4">JQuery</li>
                                        <li className="AboutListKnowledge5">Bootstrap</li>
                                    </ul>
                                </li>
                                <li><GiGiftOfKnowledge className="icon" />Hardworking</li>
                                <li><GiGiftOfKnowledge className="icon" />Team player</li>
                                <li><GiGiftOfKnowledge className="icon" />Multi-tasking ability</li>
                                <li><GiGiftOfKnowledge className="icon" />Quick learner</li>
                            </ul>
                        </AboutKnowledge>
                    </Col>
                    <Col className="pt-5 mt-5" xl={12} lg={12}>
                        <Image src={Certificate} fluid/>
                    </Col>
                </Row>
            </Container>
        </AboutSection>
    );
}

export default About;