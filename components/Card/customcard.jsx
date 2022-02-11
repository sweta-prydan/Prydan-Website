import React from 'react';
import Inquiry from '../Contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardGroup } from 'react-bootstrap'

const Custombanner = () => {
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
                }}>As Custom Software Development Company our Offerings
            </h1>
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
                        Application Development Services</Card.Title>
                    <Card.Text>
                        Bespoke software solution for your business that made just for your group of user and solve your specific business problems.
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
                            System Integration Services</Card.Title>
                        <Card.Text>
                            We can help you speak your different software componants with each other. We integrate you softwares and make efficient use of knowledge and data just in real time.
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
                        Dashboards, ETL, and BI Services</Card.Title>
                    <Card.Text>
                        Get more insights from your data and make informed decision powered by facts.
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
                        Legacy Modernization & Application Migration</Card.Title>
                    <Card.Text>
                        We help you modernize your outdated software to the latest one.
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
                            Big Data Application Services</Card.Title>
                        <Card.Text>
                            We help you optimize and analyse large and rapidly growing volume of data and information. So that you can make timely and accurate decisions.
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
                        SaaS Applications Development Services</Card.Title>
                    <Card.Text>
                        We help you build commerical SaaS based application.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        <div>

            <Inquiry />

        </div>

    </div>;
};

export default Custombanner;