import React from "react"
import './Skills.css'
import {Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import emoji1 from '../../img/Emoji1.png';
import emoji2 from '../../img/Emoji2.png';
import emoji3 from '../../img/Emoji3.png';

const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="Skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx"></div>
              <h2>Skills</h2>
              <p>A passionate and hardworking individual with a passion for learning and self-development, currently focused on honing skills in Front-End Development, Graphic design, and UI/UX Design. With a keen eye for detail and a creative mindset, who excels in creating visually appealing and user-friendly interfaces.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item glass-container">
                    <div className="glass-effect">
                    <img src={emoji1} alt="Front End" />
                    </div>
                    <h5>Front End Development</h5>
                </div>
                <div className="item glass-container">
                    <div className="glass-effect">
                    <img src={emoji2} alt="UI/UX" />
                    </div>
                    <h5>UI/UX Design</h5>
                </div>
                <div className="item glass-container">
                    <div className="glass-effect">
                    <img src={emoji3} alt="Logo Design" />
                    </div>
                    <h5>Logo Design</h5>
                </div>
                <div className="item glass-container">
                    <div className="glass-effect">
                    <img src={emoji1} alt="On Progress" />
                    </div>
                    <h5>Data Entry</h5>
                </div>
                </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  
  export default Skills;
  


