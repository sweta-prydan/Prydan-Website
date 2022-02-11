import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'

const Feedback = () => {
    return <div>
        <Carousel>
            <Carousel.Item interval={250}>
                <Image
                    className="d-block w-100"
                    src='/block.png'
                    alt="First slide"
                    height={300}
                    width="1280px"
                    style=
                    {{
                        color: "#fff",
                        paddingLeft: "85px",
                        paddingRight: "85px",
                        marginTop: "40px"
                    }}
                />
                <Carousel.Caption>

                    <p>"Working with Prydan has been an amazing<br />
                        experience.I would like to express my deepest <br />
                        appreciation for the work has Prydan done. I<br />
                        appreciate the dedication and efforts of the<br />
                        Prydan team."</p>
                    <h6>-Simon</h6>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={250}>
                <Image
                    className="d-block w-100"
                    src='/block.png'
                    alt="Second slide"
                    height={300}
                    width="1280px"
                    style=
                    {{
                        color: "#fff",
                        paddingLeft: "85px",
                        paddingRight: "85px",
                        marginTop: "40px"
                    }}
                />
                <Carousel.Caption>

                    <p>"I had a great time working with Prydan. The<br />
                        team has good punctuality and constantly <br />
                        responsive in making revisions and engaging its <br />
                        clients.Their attitude is always possitive about <br />
                        work to given them."
                    </p>
                    <h6>-Sahil Agnihotri</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src='/block.png'
                    alt="Third slide"
                    height={300}
                    width="1280px"
                    style=
                    {{
                        color: "#fff",
                        paddingLeft: "85px",
                        paddingRight: "85px",
                        marginTop: "40px"
                    }}
                />
                <Carousel.Caption>

                    <p>"The team did a great job of managing the<br />
                        timeline and communicating their progress <br />
                        throughout the project. The team at Prydan is <br />
                        really excellent and provides me a great solution <br />
                        as per my requirements."
                    </p>
                    <h6>-Rohan Sukla</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>;
};
export default Feedback;