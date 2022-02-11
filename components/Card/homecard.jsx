import React from 'react';

import { CardGroup, Card } from 'react-bootstrap';

const Banner = () => {
    return <div>
        <div className='container'
            style={{
                marginBottom: "30px",
                textAlign: "center",
                fontSize: "25px",
                color: "#171c3f",
            }}>
            <h1
                style=
                {{
                    fontSize: "40px",
                    fontWeight: '700'
                }}>Expertise</h1>
        </div>
        <div>
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
                            Consulting & Ideation</Card.Title>
                        <Card.Text>
                            We prioritize credibility with unique solutions for your original ideas.
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
                                Dedicated Team</Card.Title>
                            <Card.Text>
                                Our teams are dedicated to fulfilling your necessity with undivided attention.
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
                            UI/UX Design</Card.Title>
                        <Card.Text>
                            Our sleek and irresistible User Experience and Interaction manners will amaze your clients for sure.
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
                            Web Development</Card.Title>
                        <Card.Text>
                            Make sure that your business reaches out to people across the globe with the assistance of our Web Application Development Service.
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
                                Mobile Development</Card.Title>
                            <Card.Text>
                                We deliver smoothly functioning mobile applications that are user-friendly and engaging.
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
                            E-commerce Solution</Card.Title>
                        <Card.Text>
                            You can assuredly rely on our solutions that promise a profitable environment for your E-commerce arena.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <div>
            </div>
        </div>
    </div>;
};

export default Banner;
