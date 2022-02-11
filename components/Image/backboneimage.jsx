import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Backboneimage = () => {
    return <div>
        <div>
            <Row xs={1} md={2} className="g-4"
                style={{ padding: "50px 0" }}>
                <Col>
                    <Card.Img variant="top" src="/backbone-img1.jpg" />
                </Col>

                <Col>
                    <Card.Img variant="top" src="/back.jpg" />
                </Col>
            </Row>
        </div>
    </div>;
};

export default Backboneimage;
