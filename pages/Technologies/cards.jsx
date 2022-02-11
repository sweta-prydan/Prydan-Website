import React from 'react';
import { CardGroup, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Trend = () => {
    return <div>
        <div className='container'>
            <div>
                <Row>
                    <Col>
                        <div
                            style={{
                                padding: "30px 0",
                                textAlign: "center",
                                margin: "0 2%"
                            }}>
                            <CardGroup>
                                <Col>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px" }}>
                                        <Card.Img src="tech-ico1.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px" }}>
                                        <Card.Img src="tech-ico4.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px" }}>
                                        <Card.Img src="tech-ico7.png" />
                                    </Card>

                                </Col>

                                <Col>
                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px" }}>
                                        <Card.Img src="/tech-ico2.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px" }}>
                                        <Card.Img src="tech-ico5.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px", height: "100px" }}>
                                        <Card.Img src="tech-ico8.png" />
                                    </Card>

                                </Col>

                                <Col>
                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px", height: "100px" }}>
                                        <Card.Img src="tech-ico3.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px", height: "100px",marginTop:"30px" }}>
                                        <Card.Img src="tech-ico6.png" />
                                    </Card>

                                    <Card className='shadow-lg p-4 mb-4 bg-white rounded'
                                        style=
                                        {{ width: "100px", height: "100px" }}>
                                        <Card.Img src="tech-ico9.png" />
                                    </Card>
                                </Col>
                            </CardGroup>
                        </div>
                    </Col>

                    <Col>
                        <div className='container'>
                            <div
                                style={{
                                    paddingTop: "20px",
                                }}>
                                <h2 style={{
                                    marginBottom: "20px",
                                    textAlign: "left",
                                    letterSpacing: "-1px",
                                    fontWeight: "700",
                                    color: "#171c3f"
                                }}>Trending Technologies that transform businesses</h2>

                                <p style=
                                    {{
                                        marginBottom: "25px",
                                        lineHeight: "25px"
                                    }}> We keep our pace up with the growing fields of technologies and  <br />
                                    keep ourselves updated with the recent innovations and changes. <br />
                                    Building your solution based on what is in the trend currently is<br />
                                    indeed one of the most promising approaches.</p>

                                <Button variant="outline-danger" className='rounded-pill'> View All</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>;


};

export default Trend;