import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Title } from '../Title';
import { ContactSection, ContactTitle, Footer } from './ContactElements';
import { BsDownload } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaGooglePlus, FaMobileAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return(
        <ContactSection id="contact">
            <Container className="text-center py-5">
                <ContactTitle className="py-5">
                    <Title>Contact Us</Title>
                </ContactTitle>
                <Row className="pt-5 align-items-center mb-5">
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <Button className="resume mb-5" href="https://mega.nz/file/OB8VUCpa#i_Cd-U4ZQl3YFp38nIBiz_zAWY4o8KZjO_zWH6Tuics" target="_blank">Download CV <BsDownload /></Button>
                    </Col>
                    <Col xl={6} lg={6} md={6} sm={12}>
                        <Form className="py-5">
                            <Form.Group controlId="formBasicFirstName">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="First Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicE-mail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="E-mail" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="dark" type="submit" className="submit w-100">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer className="p-5">
                <Container className="text-center">
                    <Row>
                        <Col xl={4} lg={4} md={4} sm={12} className="pt-5 my-5">
                           <h3>Address</h3>
                           <hr />
                           <p>Emmanuel Dilag</p>
                           <p>100 Almoro Compound Dela Paz</p>
                           <p>Biñan, Laguna 4024</p>
                           <p>Philippines</p>
                           <hr />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} className="pt-5 my-5">
                            <h3>Accounts</h3>
                            <hr />
                            <div className="social" >
                                <a href="https://web.facebook.com/emmamJ4U/" ><FaFacebook className="fb" /></a>
                                <a href="https://m.me/emmanJ4U"><FaFacebookMessenger className="ms" /></a>
                                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=emmanueldilag@gmail.com&tf=1"><FaGooglePlus className="go" /></a>
                            </div>
                            <hr />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} className="pt-5 my-5">
                            <h3>Telephone</h3>
                            <hr />
                            <p><FaMobileAlt className="info" />+63 956 570 5537</p>
                            <p><FaPhoneAlt className="info"/>(049) 3083 598</p>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </Footer>
        </ContactSection>
    );
}

export default Contact;