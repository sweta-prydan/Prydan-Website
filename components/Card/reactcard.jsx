import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardGroup } from 'react-bootstrap'

const Reactbanner = () => {
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
                As Custom Software development Company our offerings</h1>
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
                        ReactJS Front-End Development</Card.Title>
                    <Card.Text>
                        Develop attractive and interactive Frontends and UI designs for your apps and web interfaces.
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
                            ReactJS Custom Development</Card.Title>
                        <Card.Text>
                            Develop Custom ReactJS app or module as per you specific business need and sets of users.
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
                        ReactJS Fullstack Development</Card.Title>
                    <Card.Text>
                        Our React fullstake developers are expert in Mongo DB, NodeJS, Experss.js.
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
                        ReactJS dashboards development and Admin Panels
                    </Card.Title>
                    <Card.Text>
                        Our ReactJS programmers can help you create complete admin panel and dashboard.
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
                            ReacJS Code Audit
                        </Card.Title>
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
                        ReactJS E-commerce Development
                    </Card.Title>
                    <Card.Text>
                        ReactJS programmers at Prdyan can build greate shopping card UI on top of Shopify, Magneto.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

    </div>;

}

export default Reactbanner;