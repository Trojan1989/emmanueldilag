import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Title } from '../Title';
import { ProjectSection, ProjectTitle, SubHeader } from './ProjectElements';
import { BsListTask } from "react-icons/bs";
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Project = () => {

    useEffect(() => {

        gsap.from('.ListLeft1', {
            duration: 1.3,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft1',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.ListLeft2', {
            duration: 1.6,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft2',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.ListLeft3', {
            duration: 1.9,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft3',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.ListLeft4', {
            duration: 2.2,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft4',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.ListLeft5', {
            duration: 2.5,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft5',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
        gsap.from('.ListLeft6', {
            duration: 2.8,
            x: -15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListLeft6',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });

        gsap.from('.ListRight1', {
            duration: 1.3,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListRight1',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });

        gsap.from('.ListRight2', {
            duration: 1.6,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListRight2',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });

        gsap.from('.ListRight3', {
            duration: 1.9,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListRight3',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });

        gsap.from('.ListRight4', {
            duration: 2.2,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListRight4',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });

        gsap.from('.ListRight5', {
            duration: 2.5,
            x: 15,
            opacity: 0,
            ease: Power3.easeOut,
            scrollTrigger: {
                trigger: '.ListRight5',
                start: 'top 90%',
                end: 'bottom 120%',
                toggleActions: 'restart complete reverse'
            }
        });
    },[]);

    return(
        <ProjectSection id="project">
            <Container className="text-center py-5">
                <ProjectTitle className="py-5 ProjectTitle">
                    <Title className="Title">Feature Projects</Title>
                </ProjectTitle>
                <Row>
                    <Col className="pt-5" xl={6} lg={6} md={6} sm={12}>
                        <SubHeader>Front End Developer Projects</SubHeader>
                        <ul class="ListLeft">
                            <li className="ListLeft1"><BsListTask className="icon" />Use JavaScript to Build a Quiz Game</li>
                            <li className="ListLeft2"><BsListTask className="icon" />Use Giphy’s API to recreate Giphy</li>
                            <li className="ListLeft3"><BsListTask className="icon" />Use Bootstrap to Create a Landing Page</li>
                            <li className="ListLeft4"><BsListTask className="icon" />Use Svelte to Build a List App</li>
                            <li className="ListLeft5"><BsListTask className="icon" />Create a Chatting App by Using Vue</li>
                            <li className="ListLeft6"><BsListTask className="icon" />Build an Audio Player App with the Quasar Framework</li>
                        </ul>
                    </Col>
                    <Col className="pt-5" xl={6} lg={6} md={6} sm={12}>
                    <SubHeader>React Website Projects</SubHeader>
                        <ul class="ListRight">
                            <li class="ListRight1"><BsListTask className="icon" />Social Media App</li>
                            <li class="ListRight2"><BsListTask className="icon" />E-Commerce App</li>
                            <li class="ListRight3"><BsListTask className="icon" />Entertainment App</li>
                            <li class="ListRight4"><BsListTask className="icon" />Messaging App</li>
                            <li class="ListRight5"><BsListTask className="icon" />Productivity App</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </ProjectSection>
    );
}

export default Project;