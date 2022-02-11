import React from 'react';
import Inquiry from '../Contact/contact';

import { Accordion } from 'react-bootstrap';

const Backbonefaq = () => {
    return <div className='container'>
        <h2 style=
            {{
                fontSize: "35px",
                fontWeight: "700",
                textAlign: "center",
                color: "#171c3f",
                marginTop: "15px",
                marginBottom: "55px",
            }}>Frequently Asked Questions</h2>

        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0"
                style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    How can I choose a developer of my choice?</Accordion.Header>
                <Accordion.Body>
                    If you prefer, you can conduct as many interviews as you want, before you hire a developer of your choice. If in-case, the expertise of a hired developer does not deliver the desired output or if you want to add more developers with the diverse skill-set, then we will help you in both situations right away. We are offering peace of mind with 100% success guaranteed.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    Will the hired developer work only for me?</Accordion.Header>
                <Accordion.Body>
                    Yes, that’s what we offer- the developers you hire will work only on your project and terms. If you hire an entire dedicated developers’ team then the entire team will work only on your project.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    How much does it cost to Hire a Backbone.js developer?</Accordion.Header>
                <Accordion.Body>
                    Typically we charge $15/hour for Backbone.js developers. However, actual price varies based on skills and experience.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    What project management tools do you use?</Accordion.Header>
                <Accordion.Body>
                    We use industry-standard project management tools like Jira, Trello, Pivotal Tracker, Asana, etc. Where you will be able to track the productivity of developers and monitor the daily progress of your project. You can create the task, assign the work, and follow the development progress.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" style=
                {{
                    marginBottom: "20px",
                    boxShadow: "0px 0px 10px #fff",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                <Accordion.Header style={{ padding: "15px 20px" }}>
                    What if I am not satisfied with the developer's work?</Accordion.Header>
                <Accordion.Body>
                    By using JavaScript with the minimal set of data-structuring and user interface it enables you to develop a web application. Backbone.js is best useful to develop MVC like web applications, single page web application or complex JavaScript web applications.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
        <div>

        <Inquiry />

        </div>

    </div>;
};

export default Backbonefaq;