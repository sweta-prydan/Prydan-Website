import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Careerimage = () => {
    return <div>
        <div>
            <Row xs={1} md={2} className="g-4"
                style={{ padding: "50px 0" }}>
                <Col>
                    <Card.Img variant="top" src="career.jpeg" />
                </Col>

                <Col>
                    <Card.Img variant="top" src="/career1.jpeg" />
                </Col>
            </Row>
        </div>
    </div>;
};

export default Careerimage;
