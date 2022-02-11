import React from 'react';
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const Poster = () => {
    return <div>

        <div className='container'
            style={{
                paddingRight: "15px",
                paddingLeft: "15px",
                paddingTop: "40px"
            }}>
            <Row>
                <Col>
                    <Image
                        src="/digitize-img1.png"
                        width={230}
                        height={200}
                        alt=''
                    />
                </Col>

                <Col>
                    <div>
                        <h3 style={{
                            marginBottom: "20px", 
                            fontWeight: "700",
                            color: "#ff017d",

                        }}>Everything starts with an idea</h3>
                        <p style=
                            {{
                                marginBottom: "25px",
                                lineHeight: "25px",
                            }}>Have you got something on your mind that you believe is of great potential? Reach out to us today and we will make your thoughts come to life!</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='container'>
            <Row>
                <Col>
                    <div>
                        <h3 style={{
                            marginBottom: "20px",
                            fontWeight: "700",
                            color: "#ff017d",

                        }}>Research and Development</h3>
                        <p style=
                            {{
                                marginBottom: "25px",
                                lineHeight: "25px",
                            }}>We believe in detailed research before embarking upon the development of your solution to optimize precision. We assure you that your requirements will be analyzed with great transparency and accuracy for the betterment of your enterprise.</p>
                    </div>

                </Col>
                <Col sm={6}>
                    <div style={{
                        paddingRight: "15px",
                        paddingLeft: "260px",

                    }}>
                        <Image
                            src="/digitize-img2.png"
                            width={230}
                            height={200}
                            alt=''
                        />
                    </div>
                </Col>

            </Row>
        </div>
    </div>;
};
export default Poster;