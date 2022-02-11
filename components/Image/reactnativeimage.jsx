import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Reactnativeimage = () => {
    return <div>
        <div>
            <Row xs={1} md={2} className="g-4"
                style={{ padding: "40px 0" }}>
                <Col>
                    <Card.Img variant="top" src="/pexels7.jpeg" />
                </Col>

                <Col>
                    <Card.Img variant="top" src="/pexels8.jpeg" />
                </Col>
            </Row>
        </div>
    </div>;
};

export default Reactnativeimage;
