import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/cryptoilet.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div id="about" className="about-control">
        <Container
          style={{
            backgroundColor: "white",
            border: "10px solid darkcyan",
            boxShadow: "0px 0px 90px #68c2c5",
            borderRadius: 20,
            maxWidth: 1200
          }}
        >
          <Row style={{ padding: "25px" }}>
            <Col
              md={6}
              xs={12}

            >
              <text className="about-description"
                style={{ textAlign: "center" }}>
                <header style={{ color: "#E8B331", textAlign: "center" }}>
                  <span style={{ color: "black" }}>lorem ipsum</span>
                  <br />
                </header>
                <p >
                  <text style={{ fontSize: 20 }}>lorem ipsum</text>
                  <div style={{ textAlign: "center" }}>
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    <br />
                  </div>

                  <text style={{ fontSize: 20 }}>lorem ipsum</text>
                  <br />
                  <div style={{ textAlign: "center" }}>

                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum

                    <br />
                    <br />
                  </div>
                  <text style={{ fontSize: 20 }}>lorem ipsum</text>
                  <br />
                  <div style={{ textAlign: "center" }}>

                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    <br />
                  </div>
                  <text style={{ fontSize: 20 }}>lorem ipsum</text>
                  <br />
                  <div style={{ textAlign: "center" }}>

                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    <br />
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  </div>
                </p>

              </text>
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img
                style={{ borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default About;
