/* eslint-disable max-len */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarCustom from '../partials/NavbarCustom';

function Profile() {
  return (
    <>
      <NavbarCustom />
      <Container className="bg-light shadow-lg h-100">
        <Row className="mb-5">
          <Col md={4} className="border-end border-2" id="fixedContainer">
            <div className="text-center">
              <div className="profile-photo-container">
                <img src="./images/unmul.png" className="shadow rounded-circle profile-photo" alt="" />
              </div>
              <h3 className="m-b-10">Risky Kurniawan</h3>
              <h6 className="m-b-20">@riskykrnawan</h6>
              <h5 className="text-secondary m-b-30">Fullstack Web Developer</h5>
              <div className="m-b-30">
                <a href="/#" className="text-secondary fs-1 m-r-12">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="/#" className="text-secondary fs-1 m-r-12">
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="/#" className="text-secondary fs-1 m-r-12">
                  <i className="bx bxl-github" />
                </a>
              </div>
            </div>
            <div className="m-b-50">
              <div>
                <a href="/#" className="text-secondary m-r-12 text-decoration-none">
                  <i className="bx bxs-buildings fs-25 position-relative t-5 p-r-5" />
                  <span className="fs-16">Universitas Mulawarman</span>
                </a>
              </div>
              <div>
                <a href="/#" className="text-secondary m-r-12 text-decoration-none">
                  <i className="bx bxs-home fs-25 position-relative t-5 p-r-5" />
                  <span className="fs-16">Sebulu, Kutai Kartanegara</span>
                </a>
              </div>
            </div>
            <Card className="m-b-20">
              <div className="card-header m-b-10 bg-2 text-white">
                Skills / Interest
              </div>
              <ListGroup variant="flush">
                <ListGroup.Item>Front - end Web Development</ListGroup.Item>
                <ListGroup.Item>Back - end Web Development</ListGroup.Item>
                <ListGroup.Item>Javascript</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col md={8}>
            <div className="text-center mt-5 mb-3">
              <a href="/#" className="text-black fs-5 m-r-12 text-decoration-none border-bottom">
                <i className="bx bx-book-open position-relative m-r-5 t-3" />
                <span>Deskripsi</span>
              </a>
            </div>
            <div className="m-auto">
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi neque rerum ea quod blanditiis repellendus, ducimus cum obcaecati in quia beatae, dolores dolor dolorem dolorum quam assumenda, soluta asperiores facilis quasi quas nam sequi suscipit? Optio officiis alias beatae doloribus. Magnam quos soluta non, earum quasi commodi aliquam velit laboriosam corporis et a maiores similique assumenda porro debitis? Quo nobis rem nesciunt quae inventore ullam voluptas temporibus eaque iusto excepturi eos, cumque, voluptatibus expedita culpa, animi debitis vitae! Minima, assumenda reprehenderit! Eos, ex! Pariatur repellat eaque, facilis eius natus in. Quas ea error similique accusamus tempora, mollitia optio excepturi quasi?</p>
            </div>

            <div className="text-center mt-5 mb-3" id="my-project">
              <a href="/#" className="text-secondary fs-5 m-r-12 text-decoration-none border-bottom">
                <i className="bx bxs-building position-relative m-r-5 t-3" />
                <span>Project</span>
              </a>
            </div>

            <div className="card-header m-b-10 bg-2 text-white">
              Sedang Berjalan
            </div>
            <Card className="text-left m-b-15 bg-3 border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <a href="/#" className="text-white fs-19 text-decoration-none">E-commerce Berbasis Web</a>
                </Card.Title>
                <div className="text-right">
                  <a href="/#" className="card-link text-decoration-none text-white">
                    Lihat Detail
                    <i className="bx bx-chevrons-right position-relative t-2" />
                  </a>
                </div>
              </Card.Body>
            </Card>
            <Card className="text-left m-b-15 bg-3 border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <a href="/#" className="text-white fs-19 text-decoration-none">REST-API ruangCollab</a>
                </Card.Title>
                <div className="text-right">
                  <a href="/#" className="card-link text-decoration-none text-white">
                    Lihat Detail
                    <i className="bx bx-chevrons-right position-relative t-2" />
                  </a>
                </div>
              </Card.Body>
            </Card>

            <div className="card-header m-b-10 bg-2 text-white">
              Telah Selesai
            </div>
            <Card className="text-left m-b-15 bg-3 border-0 text-white">
              <Card.Body>
                <Card.Title>
                  <a href="/#" className="text-white fs-19 text-decoration-none">Front-end ruangCollab</a>
                </Card.Title>
                <div className="text-right">
                  <a href="/#" className="card-link text-decoration-none text-white">
                    Lihat Detail
                    <i className="bx bx-chevrons-right position-relative t-2" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Profile;
