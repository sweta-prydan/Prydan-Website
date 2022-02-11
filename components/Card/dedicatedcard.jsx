import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inquiry from '../Contact/contact'

import { Card, CardGroup } from 'react-bootstrap'

const Dedicatedbanner = () => {
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
                Different dedicated Team models Offerings</h1>
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
                        Full-service dedicated team</Card.Title>
                    <Card.Text>
                        Leverage our team’s expertise for end-to-end support in product development, testing, and managed IT service activities. We follow a focused approach and give you the flexibility to reconfigure the team based on the requirements of your project. We follow a monthly payment based on team size, which would also include fixed service costs.
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
                            On-demand dedicated team</Card.Title>
                        <Card.Text>
                            Meet your on and off requirement for skilled experts to collaborate on projects. We’ll build on your core team’s expertise to achieve the desired team capability to complete your tasks. The model is ideal for long-term projects with changing requirements. As for the budget, the actual cost can vary from estimates and payments are made on a pro-rata basis every month.
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
                        Maintenance dedicated team</Card.Title>
                    <Card.Text>
                        Get continuous maintenance support to meet the evolving efficiency needs of your product or service. Maintenance teams ensure deployed products are enabled to deliver results and are continuously improved to meet changing user expectations. Enterprises opting for a maintenance team will incur a monthly cost based on project size and the number of team members involved.                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>

        <div>

            <Inquiry />

        </div>
    </div>;
};

export default Dedicatedbanner;