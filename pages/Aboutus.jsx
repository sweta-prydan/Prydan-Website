import React from 'react'
import Header from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Careerimage from '../components/Image/careerimage';
import 'bootstrap/dist/css/bootstrap.css';

import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import Inquiry from '../components/Contact/contact';

const Aboutus = () => {
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
                    Your own Software Development Company</h2>

                <p>Prydan Software is a Web and Mobile App development company founded in the year 2016. <br />
                    We are a team of passionate engineers and designers building awesome mobile and web<br />
                    applications for startups and enterprises worldwide.Our teams have mastered <br/>
                    remote collaboration and have built strong community ties around remote <br/> 
                    locations in the U.S., Australia, UK and Canada.
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
<Inquiry />
        <Footer />

    </div>;
};
export default Aboutus;