import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import './Portofolio.css';
import colorSharp2 from '../../img/colorSharp2.png';
import projImg1 from '../../img/project-img1.png';
import projImg2 from '../../img/project-img2.png';
import projImg3 from '../../img/project-img3.png';
import projImg4 from '../../img/project-img4.png';
import projImg5 from '../../img/project-img5.png';
import projImg6 from '../../img/project-img6.png';

const Portofolio = () => {
  const projects = [
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg1,
    },
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg2,
    },
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg3,
    },
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg4,
    },
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg5,
    },
    {
      title: "Business UMKM",
      description: "UI/UX Design",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects Education</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate autem fugit at voluptas consequuntur officia porro sapiente deleniti aperiam impedit quibusdam ratione, voluptatem saepe doloribus! Illum molestias repellat ratione iure!
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Front-End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Others</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        );
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">loren</Tab.Pane>
                <Tab.Pane eventKey="third">loren</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};

export default Portofolio;
