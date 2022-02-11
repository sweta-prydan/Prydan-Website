import React from 'react';
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Careerimage from '../components/Image/careerimage';

import { Card, CardGroup, Row, Col } from 'react-bootstrap';

const Career = () => {
    return <div>

        <Header />

        <div className='container'
            style={{
                marginTop: "150px",
                marginBottom: "180px",
                marginLeft: "120px"
            }}>

            <h1 className='h1'
                style={{
                    fontSize: "59px",
                    fontWeight: "700",
                    color: "#171c3f",
                    marginBottom: "40px"
                }}>
                Be a part of our
                <br /> Team</h1>

            <p className='lead text-muted'>
                We are always on the lookout for bright,enthusiastic people
                <br />with an entrepreneurial spirit to join our team.
            </p>
        </div>

        <Careerimage />

        <div>
            <div style={{ textAlign: "center" }}>

                <h2 style=
                    {{
                        fontSize: '35px',
                        marginBottom: '20px',
                        color: '#171c3f',
                        fontWeight: '700'
                    }}>
                    Do you need custom software?</h2>

                <p>Most likely yes becuase every business is unique and need to innovate the unique way to solve business problems. <br />
                    Custom software help you to solve your business problem more effectively and give you edge on competition.<br />
                    Obviously,off-the-self software may not fit with your way to doing business many times, no worries let's<br />
                    develope a custom software for you that exactly solve your own unique business problem perfectly. <br />
                    Leverage our decades of experience in crafting bespoke software solution for businesses. Which <br />
                    is user friendly, save you operational cost, scale with your business and secure. As Custom <br />
                    Software.
                </p>
            </div>
        </div>

        <div>
            <CardGroup>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="danger"
                            style=
                            {{
                                width: '35rem',
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico1.png'
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
                                    style=
                                    {{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#ff017d",
                                        minHeight: "40px"
                                    }}>
                                    Fast-paced Learning</Card.Title>
                                <Card.Text>
                                    Learning is the only constant at Prydan.All roles continuously evolve and so do the skills with them.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="info"
                            style=
                            {{
                                width: '35rem',
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico2.png'
                                alt='icon'
                                width={48}
                                style=
                                {{
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
                                    style=
                                    {{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#00d7fc",
                                        minHeight: "40px"
                                    }}>
                                    Open Culture</Card.Title>
                                <Card.Text>
                                    Each and every voice is heared, every contribution is valued and open dialogues are encouraged.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="warning"
                            style={{
                                width: '35rem',
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico3.png'
                                width={48}
                                alt='icon'
                                style=
                                {{
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
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#ffbc00",
                                        minHeight: "40px"
                                    }}>
                                    Appreciations</Card.Title>
                                <Card.Text>
                                    We are only good as our team and we love to take note of the same through awards and recognitions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="primary"
                            style={{
                                width: '35rem',
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico4.png'
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
                                    style=
                                    {{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#4b68c1",
                                        minHeight: "40px"
                                    }}>
                                    Mentoring</Card.Title>
                                <Card.Text>
                                    We provide one-on-one mentoring and even sponsor paid trainings for our team members when needed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </div>

        <Footer />

    </div>;
};
export default Career;