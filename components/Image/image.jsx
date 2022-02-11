import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Image = () => {
    return <div>
        <div>
            <Row xs={1} md={2} className="g-4"
                style={{ padding: "50px 0" }}>
                <Col>
                    <Card.Img variant="top" src="/company-banner-img1.png" />
                </Col>

                <Col>
                    <Card.Img variant="top" src="/company-banner-img2.png" />
                </Col>
            </Row>
        </div>
    </div>;
};
export default Image;