import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from '../components/Card/homecard'
import Feedback from '../components/Layout/carousel'
import Image from '../components/Image/image';
import Trend from './Technologies/cards'
import Inquiry from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
import Blog from '../components/Blog/blog'
import Poster from '../components/Poster/poster';

import { Button, CardGroup, Row, Col, Card } from 'react-bootstrap';

const Landing = () => {
    return <div>
        <div
            style=
            {{
                marginBottom: "50px",
                fontSize: "25px",
                height: "600px",
                fontWeight: "700",
                background: "#171c3f",
            }}>
            <div className='container'>
                <h1 className='h1'
                    style=
                    {{
                        fontSize: "59px",
                        fontWeight: "700",
                        color: "#fff",
                        marginBottom: "40px"
                    }}>
                    Stay in Talk<br />
                    with Optimal Business <br />
                    Performance</h1>

                <p className='lead'
                    style=
                    {{
                        color: "#fff",
                        fontWeight: "500",
                        lineHeight: "25px",
                        fontSize: "14px"
                    }}>
                    Your partner for incredible mobile and web products. <br />
                    Finally delivered in great quality and on time.
                </p>

                <Button Button variant="outline-danger" className='rounded-pill'>Know More</Button>
            </div>
        </div>

        <div>
            <h2
                style=
                {{
                    color: "#171c3f",
                    fontWeight: "700",
                    textAlign: "center",
                    fontSize: "35px"
                }}>Digitize your business<br />
                help</h2>

            <p style={{
                textAlign: "center",
                color: "#1c2040"
            }}>
                We are widely renowned for providing cutting-edge solutions to every problem that arises<br />
                with our reliable Web and Mobile application development services. You can rely on our <br />
                valuable technical assistance and count on our product designing and quality assurance<br />
                methods.</p>
        </div>

        <Poster />

        <Banner />

        <div
            style=
            {{
                padding: "20px 0"
            }}>

            <Row
                style={{
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#171c3f",
                    fontSize: "30px",
                    marginBottom: "5px"
                }}>
                <Col>
                    20+<br />
                    Web App designed
                </Col>

                <Col>
                    50+<br />
                    Mobile App designed
                </Col>

                <Col>
                    10+<br />
                    software Designed
                </Col>
                <Col>
                    50+<br />
                    Live Project
                </Col>
            </Row>
            <div
                style={{ textAlign: "center" }}>
                <Button
                    style=
                    {{
                        marginTop: "60px",
                        marginBottom: "40px"
                    }}
                    variant="outline-danger"
                    className='rounded-pill'
                > View All Case Studies </Button>
            </div>
        </div>

        <div>

            <Image />

        </div>
        <div>
            <div style={{ textAlign: "center" }}>
                <h2
                    style=
                    {{
                        fontSize: "35px",
                        fontWeight: "700",
                        color: "#171c3f",
                        marginBottom: "20px"
                    }}>
                    Designer and Developers<br />
                    come together to deliver great products</h2>
                <p
                    style=
                    {{
                        color: "#1c2040",
                        lineHeight: "25px"
                    }}>
                    We believe in brainstorming at more frequent intervals of time and developing your software<br />
                    solution after having received the valuable input of our sharply skilled designers and<br />
                    developers.</p>
            </div>
            <CardGroup>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card border="danger" className='shadow p-3 mb-5 bg-white rounded'
                            style=
                            {{
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico1.png'
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
                                        color: "#ff017d",
                                        minHeight: "40px"
                                    }}
                                >UX Driven Engineering</Card.Title>
                                <Card.Text>
                                    We never compromise when it comes to ensuring that your users have a great experience using the application.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="info" className='shadow p-3 mb-5 bg-white rounded'
                            style=
                            {{
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
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#00d7fc",
                                        minHeight: "40px"
                                    }}
                                >Developing Shared Understanding</Card.Title>
                                <Card.Text>
                                    We maintain an environment where shared understanding is prioritized for the sake of precision and accuracy.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="warning" className='shadow p-3 mb-5 bg-white rounded'
                            style=
                            {{
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
                                    style=
                                    {{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#ffbc00",
                                        minHeight: "40px"
                                    }}
                                >Proven Experience and Expertise</Card.Title>
                                <Card.Text>
                                    Our journey towards being leading software service providers has been incredibly fruitful, allowing us to embark upon challenges.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="primary" className='shadow p-3 mb-5 bg-white rounded'
                            style=
                            {{
                                marginTop: '20px',
                                marginLeft: '15px',
                                marginRight: '15px'
                            }}>
                            <img
                                src='/design-dev-ico4.png'
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
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                        color: "#4b68c1",
                                        minHeight: "40px"
                                    }}
                                >Security & Intellectual Property (IP)</Card.Title>
                                <Card.Text>
                                    The security and IP of your solution will be taken care of by our extremely reliable methods.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </div>

        <div>
            <h2 style={{
                fontSize: "40px",
                marginBottom: "50px",

                fontWeight: "700",

                color: "#171c3f"
            }}>Get an edge <br />
                over your competition</h2>
        </div>
        <div>
        <Row xs={1} md={2} className="g-4">
                <Col
                    style={{
                        backgroundColor: "#f0f1f8",
                        padding: "20px 0"
                    }}>
                    <Card.Img variant="top"  src="/getanedge-img1.png"
                        style=
                        {{
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "block",
                            float: "left",
                            width: "250.333px",
                            marginLeft: "30px",
                            marginRight:"20px"
                        }}>

                    </Card.Img>

                    <h3 
                    style=
                    {{  
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#171c3f"
                    }}>
                        Right talent that suits <br />
                        your needs
                    </h3>

                    <p 
                    style=
                    {{
                            margin:"12px",
                            lineHeight: "25px"
                    }}>
                        Our diverse work culture invites the leading technology experts on board. We are always here to help you own a software solution that is developed and looked after by experts that are sharply skilled in their domains.
                    </p>

                </Col>

                <Col
                    style={{ backgroundColor: "#f0f1f8", padding: "20px 0" }}
                    >
                    <Card.Img variant="top" src="/getanedge-img2.png"
                    style=
                        {{
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "block",
                            float: "left",
                            width: "250.333px",
                            marginRight: "20px"
                        }} />
                        <h3 style=
                    {{  
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#171c3f"
                    }}>
                        Quick Time to Market Gives You an Edge</h3>
                        <p 
                        style=
                        {{
                            margin: "10px 0",
                            lineHeight: "25px"
                        }}>
                        We will ensure that your product is developed within a convenient amount of time and is ready to be launched in the market. It will assist you in holding a dominating stance that is essential for rising above the competition and separating yourself from the herd.                
                        </p>
                        </Col>
            </Row>
        </div>
        <div>   

            <Trend />

        </div>



        <div>
            <div className='container'
                style=
                {{
                    marginBottom: "40px",
                    marginRight: "20px",
                    textAlign: "center"
                }}>
                <img src='/hiredev-img1.png' style={{ margin: "0 5px" }} />
                <img src='/hiredev-img2.png' style={{ margin: "0 5px" }} />
                <img src='/hiredev-img3.png' style={{ margin: "0 5px" }} />
                <div>

                    <h2
                        style=
                        {{
                            fontSize: "25px",
                            color: "#171c3f",
                            fontWeight: "700",
                            letterSpacing: "-1px",
                            marginBottom: "20px"
                        }}
                    > Hire the best developers and designers around! </h2>
                    <div style=
                        {{
                            color: "#1c2040",
                            marginTop: "0"
                        }}>
                        If you need to hire highly qualified and skillful developers and designers, you can always <br />
                        count on our team that promises to help you overcome your challenges.
                    </div>

                    <Button Button variant="outline-warning" className='rounded-pill'
                        style=
                        {{
                            textAlign: "center",
                            marginTop: "50px",
                            color: "#171c3f",
                            fontWeight: "600",
                            fontSize: "16px"
                        }}>Hire Dedicated Developers</Button>
                </div>
            </div>

            <Feedback />

        </div>
        <Blog />
        <div
            style=
            {{
                marginBottom: "25px",
                marginTop: "25px",
                fontSize: "25px",
                height: "300px",
                fontWeight: "700",
                textAlign: "center",
                background: "#171c3f",
            }}>
            <h1 className='h1'
                style=
                {{
                    fontSize: "59px",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "40px"
                }}>
                We will convert your idea<br />
                into a successful story </h1>

            <Button Button variant="outline-danger" className='rounded-pill' style={{ textAlign: "center" }}>Let's Connect</Button>

        </div>

        <Inquiry />

        <Footer />

    </div>;
};

export default Landing;   