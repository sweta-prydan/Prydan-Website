import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Navbar/navbar';
import Image from '../components/Image/image';
import Footer from '../components/Footer/footer';

import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Company = () => {
    return <div>

        <Header />

        <div className='container'
            style=
            {{
                marginTop: "150px",
                marginBottom: "180px",
                paddingRight: "15px",
                paddingLeft: "15px"
            }}>

            <h1 className='h1'
                style=
                {{
                    fontSize: "69px",
                    textAlign: "center",
                    fontWeight: "700",
                    color: "#171c3f",
                    marginBottom: "40px"
                }}>
                Designer and Developers <br />
                come together to deliver<br />
                great products</h1>
        </div>

        <Image />

        <div>
            <div className='container'>
                <h2
                    style=
                    {{
                        color: "#171c3f",
                        fontWeight: "700",
                        textAlign: "center",
                        fontSize: "35px",
                        marginBottom: "20px"
                    }}>Our Core Values</h2>

                <p
                    style=
                    {{
                        textAlign: "center",
                        color: "#1c2040"
                    }}>
                    Leverage the full potenital of software technologies for your business to gain edge on <br />
                    competition.
                </p>
            </div>

            <CardGroup>
                <Card border="danger"
                    style=
                    {{
                        width: '18rem',
                        marginTop: '20px',
                        marginLeft: '35px',
                        marginRight: '35px'
                    }}>
                    <img
                        src='/expertise-ico1.png'
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
                        <Card.Title>
                            Client Satisfaction</Card.Title>
                        <Card.Text>
                            Client satisfaction is our main focus. We clearly understand expectations of clients upfront and make sure we meet them consistently.We understand that you expect satisfaction at every steps of your journey and we delivery it. We stay close to our customer, understand their preferences and feelings.It is our aim to take full responsiblity of the complete customer experience.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <CardGroup>
                    <Card border="info"
                        style=
                        {{
                            width: '18rem',
                            marginTop: '20px',
                            marginLeft: '35px',
                            marginRight: '35px'
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
                            <Card.Title>Result-oriented</Card.Title>
                            <Card.Text>
                                Our undivided attention in our work makes us a result oriented organization. We take full ownership of the task, project and assignments given to us and pride to do whatever it takes to get desired outcomes. It's our passion that keeps us motivated and delivers results that people expect from us. Our full dedication has made us result-oriented.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>

                <Card border="warning"
                    style=
                    {{
                        width: '18rem',
                        marginTop: '20px',
                        marginLeft: '35px',
                        marginRight: '35px'
                    }}>
                    <img
                        src='/expertise-ico3.png'
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
                        <Card.Title>
                            Integrity in Everything</Card.Title>
                        <Card.Text>
                            Integrity is what we live at Prydan. You will find integrity in everything at Prydan. Integrity is in what we speak, what we do, what we commit, what we deliver, what we share with the community, what we give back to society. We are sure that anyone can feel a consistent and uncompromising adherence to strong moral and ethical principles and values.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>

        <Footer />

    </div>;
};
export default Company;