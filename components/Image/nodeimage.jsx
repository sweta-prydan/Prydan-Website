import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Nodeimage = () => {
    return <div>
        <div>
            <Row xs={1} md={2} className="g-4"
                style={{ padding: "40px 0" }}>
                <Col>
                    <Card.Img variant="top" src="/IT photo.jpg" />
                </Col>

                <Col>
                    <Card.Img variant="top" src="/ITphoto5.jpg" />
                </Col>
            </Row>
        </div>
    </div>;
};

export default Nodeimage;
