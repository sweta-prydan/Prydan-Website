import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const Blog = () => {
    return <div>
        <h2
            style={{
                fontSize: "25px",
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "700",
                color: "#171c3f",
                marginBottom: "20px",
                marginTop: "20px"
            }}>Blog</h2>

        <CardGroup>

            <Card>
                <Card.Img
                    variant="top"
                    src="/blog-img1.png"
                    style={{ marginBottom: "40px" }} />

                <Card.Body>
                    <Card.Title
                        style={{
                            marginBottom: "15px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        E-commerce trends for 2021 – expect the unexpected
                    </Card.Title>
                    <Card.Text
                        style={{
                            color: "#6a6a6a",
                            lineHeight: "1.5",
                            fontWeight: "500",
                            fontSize: "14px"
                        }}>
                        Solve your unique business challenges by building custom applications.
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted"
                        style={{ fontSize: "12px" }}>
                        Last updated 13 mins ago
                    </small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img
                    variant="top"
                    src="/blog-img2.png"
                    style={{ marginBottom: "40px" }} />
                <Card.Body>
                    <Card.Title
                        style=
                        {{
                            marginBottom: "15px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Why do we use briefings before workshops?
                    </Card.Title>
                    <Card.Text
                        style={{
                            color: "#6a6a6a",
                            lineHeight: "1.5",
                            fontWeight: "500",
                            fontSize: "14px"
                        }}>
                        Solve your unique business challenges by building custom applications.
                    </Card.Text>
                </Card.Body>

                <Card.Footer>
                    <small className="text-muted"
                        style={{ fontSize: "12px" }}>
                        Last updated 3 days ago
                    </small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img
                    variant="top"
                    src="/blog-img3.png"
                    style={{ marginBottom: "40px" }} />
                <Card.Body>
                    <Card.Title
                        style={{
                            marginBottom: "15px",
                            fontWeight: "700",
                            color: "#171c3f"
                        }}>
                        Voice AI in 2021 – will it finally speak <br />out?
                    </Card.Title>
                    <Card.Text
                        style={{
                            color: "#6a6a6a",
                            lineHeight: "1.5",
                            fontWeight: "500",
                            fontSize: "14px"
                        }}>
                        Solve your unique business challenges by building custom applications.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"
                        style={{ fontSize: "12px" }}>
                        Last updated 15 weeks ago
                    </small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </div>;
};

export default Blog;