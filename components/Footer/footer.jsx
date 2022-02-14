import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';

export const Footer = () => {
    return <div style={{ marginTop: "25px" }}>
        <Container>
            <Row>
                <Col>
                    <h4 style=
                        {{
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#171c3f",
                            marginBottom: "15px",
                        }}>Services</h4>
                    <ul>
                    <a href='api-integration'><li>API Integration & Development</li></a>
                    <a href='app-development'><li>Application Development</li></a>
                    <a href='custom-software'><li>Custom Software Development</li></a>
                    <a href='dedicated'><li>Dedicated software Development Team</li></a>
                    <a href='ecommece-development'><li>Ecommerce</li></a>
                        <li><a href='enterpriseapp'>Enterprise Application Development</a></li>
                        <li><a href="hirededicated">Hire Dedicated Developers</a></li>
                        <a href='mobile-development'><li>Mobile Application Development</li></a>
                        <li><a href='software-product'>Software Product Development</a></li>
                        <a href='softwaretesting'> <li>Software Testing</li></a>
                        <a href='ui-uxdesign'><li>UI / UX Design</li></a>
                        <a href=''><li>Web Application Development</li></a>
                    </ul>
                </Col>

                <Col>
                    <h4 style=
                        {{
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#171c3f",
                            marginBottom: "15px"
                        }}>Front-End</h4>
                    <ul>
                    <a href="angular"><li>Angular</li></a>
                        <a href='android'><li>Android</li></a>
                        <a href='backbone'><li>Backbone.js</li></a>
                        <a href='ember'><li>Ember.js</li></a>
                        <li>Flutter</li>
                        <li>Ionic</li>
                        <li>IOS</li>
                        <li>JavaScript</li>
                        <li>Magneto</li>
                        <a href='react'><li>React JS</li></a>
                        <li>React Native</li>
                        <li>Spree</li>
                        <li>Vue.js</li>
                        <li>Wordpress</li>
                    </ul>
                </Col>

                <Col>
                    <h4 style=
                        {{
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#171c3f",
                            marginBottom: "15px"
                        }}>Back-End</h4>
                    <ul>
                        <li>Django</li>
                        <li>Drupal</li>
                        <li>Go-Lang</li>
                        <li>JAVA</li>
                        <li>Kotlin</li>
                        <li>Laravel</li>
                        <li>Mongo DB</li>
                        <a href="node"><li>Node JS</li></a>
                        <li>.NET</li>
                        <a href='php'><li>PHP</li></a>
                        <li>Python</li>
                        <li>Ruby on Rails</li>
                        <li>Umbraco</li>
                    </ul>
                </Col>

                <Col>
                    <h4 style=
                        {{
                            fontSize: "17px",
                            fontWeight: "700",
                            color: "#171c3f",
                            marginBottom: "15px"
                        }}
                    >Hire</h4>
                    <ul>
                    <a href="node"><li>Hire Nodejs Developers</li></a>
                    <a href='react'><li>Hire ReactJS Developers</li></a>
                    <a href='hirededicated'><li>Hire Dedicated Developers</li></a>
                    <a href='reactnative'><li>Hire React Native Developers</li></a>
                    <a href='hiremobile'><li>Hire Mobile App Developers</li></a>
                    <a href='php'><li>Hire PHP Developers</li></a>
                    </ul>
                </Col>
            </Row>

            <Row
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "50px",
                    marginBottom: "20px",
                    marginRight: "-15px",
                    marginLeft: "-15px"
                }}>
                <Col sm={4}>
                    <img
                        src='/logo.png'
                        alt="logo"
                        width={160}
                        height={50}
                    />
                    <address>
                    <b>Address:</b><br/> 
C-11, Kadamb Flats, Near Government Tubewell,
Bopal, Ahmedabad - 380058 Gujarat, India
</address>

                </Col>

                <Col sm={5}
                    style={{
                        fontSize: "20px",
                        lineHeight: "26px",
                        fontWeight: "700",
                        color: "#171c3f",
                        whiteSpace: "nowrap"
                    }}>
                    Skype:<a href='prydansoftware'> prydansoftware</a> <br />
                    Email:<a href='mailto:hello@prydan.com'> hello@prydan.com</a>
                </Col>

                <Col sm={3}>
                    <img
                        src='/facebook.jpg'
                        alt='logo'
                        width={55}
                        height={55}
                    />
                    <img
                        src='/instagram.jpg'
                        alt='logo'
                        width={60}
                        height={60}
                    />
                    <img
                        src='/twitter.jpg'
                        alt='logo'
                        width={60}
                        height={60}
                    />
                </Col>
            </Row>
        </Container>

        <div className='footer-copyright'
            style={{
                padding: "30px 0",
                fontSize: "13px",
                color: "#6a6a6a",
                fontWeight: "500",
                background: "#f0f1f8",
                padding: "40px 0",
                textAlign: "center"
            }}>  Copyright © 2021 Prydan. All Rights Reserved.</div>
    </div>;
};

export default Footer;
