import React from 'react';
import Inquiry from '../Contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardGroup } from 'react-bootstrap'

const Productbanner = () => {
    return <div>
        <div className='container'
            style={{
                marginBottom: "30px",
                textAlign: "center",
                marginLeft: "80px",
                color: "#171c3f",
            }}>
            <h1 className='h1'
                style=
                {{
                    fontSize: "40px",
                    fontWeight: '700'
                }}>
                Software Product Development Services</h1>
        </div>

        <CardGroup>
            <Card border="danger" className='shadow p-3 mb-5 bg-white rounded'
                style={{
                    width: '18rem',
                    marginTop: '20px',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <img
                    src='/expertise-ico1.png'
                    alt='icon'
                    width={48}
                    style={{
                        transition: "all 0.5s ease 0s",
                        Top: "0px",
                        position: "relative",
                        marginBottom: "25px",
                        marginLeft: "25px",
                        marginTop: "25px"
                    }}>
                </img>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Product Discovery & Design Services</Card.Title>
                    <Card.Text>
                        Replace guesswork with product discovery and proven processes. We create a strategic canvas and work with you to understand user flows and jobs to be done.
                    </Card.Text>
                </Card.Body>
            </Card>

            <CardGroup>
                <Card border="info" className='shadow p-3 mb-5 bg-white rounded'
                    style={{
                        width: '18rem',
                        marginTop: '20px',
                        marginLeft: '15px',
                        marginRight: '15px'
                    }}>
                    <img
                        src='/icon1.png'
                        alt='icon'
                        width={48}
                        style={{
                            transition: "all 0.5s ease 0s",
                            Top: "0px",
                            position: "relative",
                            marginBottom: "25px",
                            marginLeft: "25px",
                            marginTop: "25px"
                        }}>
                    </img>
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#171c3f"
                            }}>
                            UX Design & UI Development Services</Card.Title>
                        <Card.Text>
                        Use data to understand what customers do and why they do it. Intuitive user flows are created that make users jobs easier. Our creative developers build interactions to bring the vision to life.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <Card border="warning" className='shadow p-3 mb-5 bg-white rounded'
                style={{
                    width: '18rem',
                    marginTop: '20px',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <img
                    src='/expertise-ico3.png'
                    width={48}
                    alt='icon'
                    style={{
                        transition: "all 0.5s ease 0s",
                        Top: "0px",
                        position: "relative",
                        marginBottom: "25px",
                        marginLeft: "25px",
                        marginTop: "25px"
                    }}>
                </img>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Rapid Prototype Building Services</Card.Title>
                    <Card.Text>
                    We are obsessed with getting it right. We build prototypes from research insights and bring users into the process early to validate, iterate, and optimize towards your vision.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        <CardGroup>
            <Card border="warning" className='shadow p-3 mb-5 bg-white rounded'
                style={{
                    width: '18rem',
                    marginTop: '30px',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <img
                    src='/expertise-ico4.png'
                    alt='icon'
                    width={48}
                    style={{
                        transition: "all 0.5s ease 0s",
                        Top: "0px",
                        position: "relative",
                        marginBottom: "25px",
                        marginLeft: "25px",
                        marginTop: "25px"
                    }}>
                </img>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Apps Development Services</Card.Title>
                    <Card.Text>
                        Bringing product designs to life is a challenge for many companies. We have a track record of architecting for scale and building products through the iterative development process.
                    </Card.Text>
                </Card.Body>
            </Card>

            <CardGroup>
                <Card border="primary" className='shadow p-3 mb-5 bg-white rounded'
                    style={{
                        width: '18rem',
                        marginTop: '30px',
                        marginLeft: '15px',
                        marginRight: '15px'
                    }}>
                    <img
                        src='/expertise-ico5.png'
                        alt='icon'
                        width={48}
                        style={{
                            transition: "all 0.5s ease 0s",
                            Top: "0px",
                            position: "relative",
                            marginBottom: "25px",
                            marginLeft: "25px",
                            marginTop: "25px"
                        }}>
                    </img>
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontSize: "20px",
                                fontWeight: "700",
                                color: "#171c3f"
                            }}>
                            Product Transformation & Re-engineering
                            </Card.Title>
                        <Card.Text>
                        Upgrade your product to richer UX or new architecture enabling SaaS delivery. We offer hassle-free product transformation services ensuring minimal impact on existing users.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <Card border="danger" className='shadow p-3 mb-5 bg-white rounded'
                style={{
                    width: '18rem',
                    marginTop: '30px',
                    marginLeft: '15px',
                    marginRight: '15px'
                }}>
                <img
                    src='/expertise-ico6.png'
                    alt='icon'
                    width={48}
                    style={{
                        transition: "all 0.5s ease 0s",
                        Top: "0px",
                        position: "relative",
                        marginBottom: "25px",
                        marginLeft: "25px",
                        marginTop: "25px"
                    }}>
                </img>
                <Card.Body>
                    <Card.Title
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Usability Testing Services</Card.Title>
                    <Card.Text>
                    Learn more about your existing product or your competition’s with usability testing. Our team of expert researchers will help you plan, manage, and moderate tests.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </div>;
};

export default Productbanner;