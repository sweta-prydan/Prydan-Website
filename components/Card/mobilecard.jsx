import React from 'react';
import Inquiry from '../Contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardGroup } from 'react-bootstrap'

const Mobilebanner = () => {
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
                As Mobile App Development Company our Offerings</h1>
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
                        Native App development Services</Card.Title>
                    <Card.Text>
                        Native B2B and consumer apps allow you to utilize the inherent power of Android platforms with secure and performant apps.
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
                            }}>Hybrid Cross-platform App development Services</Card.Title>
                        <Card.Text>
                            Utilize the power of React Native to develop apps for multiple platforms while sharing the same code base Work alongside a modern platform.
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
                        Business Analysis & Consulting Services</Card.Title>
                    <Card.Text>
                        Whether you are looking to develop business apps or apps to service customers, our consultants can help you define the right tech plan.
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
                        Business Apps and API Integration Services</Card.Title>
                    <Card.Text>
                        Integrate your mobile app(s) with services you are already using and extend their use cases for your employees and users.
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
                            Enterprise Mobile Apps</Card.Title>
                        <Card.Text>
                            Enterprise Mobile Apps Customized mobile solutions to drive your operations. For example, a CMS to organize and publish content, all in a simple screen.
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
                        Apps for Internet of Things</Card.Title>
                    <Card.Text>
                        Unlock the potential of high functioning mobile apps that interact with hardware/wearables/IoT through Wi-Fi, Bluetooth, NFC, and more.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        <div>

            <Inquiry />

        </div>

    </div>;
};

export default Mobilebanner;