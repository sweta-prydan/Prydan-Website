    import React from 'react';
    import Inquiry from '../Contact/contact';
    import 'bootstrap/dist/css/bootstrap.min.css';

    import { Card, CardGroup } from 'react-bootstrap'

    const Banner = () => {
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
                    As Custom UI/ UX Design Development Company our Offerings</h1>
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
                            User Interface Solution</Card.Title>
                        <Card.Text>
                            What is in your mind now can become reality with our UI Designer. Our UI Designer can deliver an optimized and best user Interface design as fulfill your end yours requirement.
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
                                User Experience</Card.Title>
                            <Card.Text>
                                User Experience is a heart of your product and applications. At DeveloperOnRent our UX Designers expertise in working with latest ux designing tools like Adobe XD and they can make a creative design.
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
                            UI/UX Development Service</Card.Title>
                        <Card.Text>
                            UX/UI designers focus on visual interactive experience (UI) to meet and reconnect with user experience (UX), to meet successful business goals design and experience that make it as simple as possible.
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
                            Visual Design</Card.Title>
                        <Card.Text>
                            Our UI Developers are expertise to create interactive and user-friendly Interface. It helps business to attract more customers and clients.
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
                                Product Interaction</Card.Title>
                            <Card.Text>
                                User experience is highly analytical; it plays the vital role in meeting consumers result by making product functional and useful.
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
                            Icon Design</Card.Title>
                        <Card.Text>
                            At DeveloperOnRent we offer theme and icon design with our UX Designer that appears useful, making products and applications.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <div>

                <Inquiry />

            </div>

        </div>;
    };

    export default Banner;