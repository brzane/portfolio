import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pizzaStars from "../assets/img/pizza-stars.png";
import myShop from "../assets/img/my-shop.png";
import aotTrivia from "../assets/img/aot-trivia.jpeg";
import smartQuiz from "../assets/img/smart-quiz.jpeg";
import ghostHost from "../assets/img/ghost-host.jpeg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Pizza Stars",
      description: "Restaurant landing page",
      imgUrl: pizzaStars,
      ghUrl: "https://github.com/brzane/pizza-stars",
      demoUrl: "https://github.com/brzane/pizza-stars",
    },
    {
      title: "My Shop",
      description: "Simple e-commerce app",
      imgUrl: myShop,
      ghUrl: "https://github.com/brzane/my-shop",
      demoUrl: "https://my-shop11.netlify.app",
    },
    {
      title: "AOT Trivia",
      description: "Quiz app based on AOT anime",
      imgUrl: aotTrivia,
      ghUrl: "https://github.com/brzane/aot-trivia",
      demoUrl: "https://aot-trivia.netlify.app",
    },
    {
      title: "Ghost Host",
      description: "Hosting landing page with Todo app",
      imgUrl: ghostHost,
      ghUrl: "https://github.com/brzane/ghost-host",
      demoUrl: "https://ghost-host.netlify.app",
    },
    {
      title: "Smart Quiz",
      description: "Quiz app with multiple categories ",
      imgUrl: smartQuiz,
      ghUrl: "https://github.com/brzane/smart-quiz",
      demoUrl: "https://smart-quiz11.netlify.app/",
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    This is some of my awesome projects through my years of
                    learning <br></br>
                    Visit my github to get more interesting ones<br></br>
                    Note: use VPN to open demos if you are in syria
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'>
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>AI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <Row className='text-center'>
                          <h3>This section is under development</h3>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'></img>
    </section>
  );
};
