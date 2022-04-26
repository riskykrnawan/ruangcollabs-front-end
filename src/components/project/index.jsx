/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarCustom from '../partials/NavbarCustom';

function Home() {
  const TITLE = 'RuangColab';
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div id="main-page" className="bg-white">
        <NavbarCustom />
        <Container className="mt-5">
          <Row>
            <Col lg={8}>
              <article>
                <header className="mb-4">
                  <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                  <div className="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap</div>
                  <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                  <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
                </header>
                <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                <section className="mb-5">
                  <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                  <p className="fs-5 mb-4">The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.</p>
                  <p className="fs-5 mb-4">If you get asteroids about a kilometer in size, those are large enough and carry enough energy into our system to disrupt transportation, communication, the food chains, and that can be a really bad day on Earth.</p>
                  <h2 className="fw-bolder mb-4 mt-5">I have odd cosmic thoughts every day</h2>
                  <p className="fs-5 mb-4">For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.</p>
                  <p className="fs-5 mb-4">Venus has a runaway greenhouse effect. I kind of want to know what happened there because we're twirling knobs here on Earth without knowing the consequences of it. Mars once had running water. It's bone dry today. Something bad happened there as well.</p>
                </section>
              </article>

              <h5 className="">Team: </h5>
              <table className="table table-striped mb-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Skill</th>
                    <th scope="col">Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>riskykrnawan</td>
                    <td>Fullstack Web Developer</td>
                    <td>Owner</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>fazrigading</td>
                    <td>Machine Learning Developer</td>
                    <td>Member</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>dwiageng</td>
                    <td>Android Developer</td>
                    <td>Member</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>sevineamalia</td>
                    <td>UI Desainer</td>
                    <td>Member</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>riskanurliyanti</td>
                    <td>Data Scientist</td>
                    <td>Member</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>jihanhafizah</td>
                    <td>Front - End Web Developer</td>
                    <td>Member</td>
                    <td>
                      <div className="input-group-append text-disabled">
                        <button type="button" className="btn bg-transparent btn-not-focus p-0">
                          <i className="bx bx-minus-circle fs-30 position-relative text-danger" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <section className="mb-5">
                <div className="card bg-light">
                  <div className="card-body">
                    <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!" /></form>
                    <div className="d-flex mb-4">
                      <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                      <div className="ms-3">
                        <div className="fw-bold">Commenter Name</div>
                        If you're going to lead a space frontier, it has to be government;
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                          <div className="ms-3">
                            <div className="fw-bold">Commenter Name</div>
                            And under those conditions, you cannot establish You cant get investors.
                          </div>
                        </div>
                        <div className="d-flex mt-4">
                          <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                          <div className="ms-3">
                            <div className="fw-bold">Commenter Name</div>
                            When you put money directly to a problem, it makes a good headline.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                      <div className="ms-3">
                        <div className="fw-bold">Commenter Name</div>
                        When I look at the universe and all the ways the universe wants to kill us.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Col>
            <Col lg={4}>
              <div className="card mb-4 border-0 border-bottom border-top rounded-0">
                <div className="card-header border-0 border-bottom bg-light">Attachment</div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!">
                        <i className="bx fs-1 bxs-file position-relative t-8 pb-0" />
                        <span>projectdetails.pdf</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="bx fs-1 bxs-file-image position-relative t-8 pb-0" />
                        <span>projectdetails.png</span>
                      </a>
                    </li>
                    <li>
                      <a href="#!">
                        <i className="bx fs-1 bxs-file-archive position-relative t-8 pb-0" />
                        <span>projectdetails.zip</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <Button variant="success">
                <span className="text-white">
                  <i className="bx bxs-user-plus position-relative p-r-3 t-2" />
                  Send Join Request
                </span>
              </Button>
              <br />
              <Button variant="danger" className="m-t-10">
                <span className="text-white">
                  <i className="bx bx-log-out position-relative p-r-3 t-2" />
                  Leave
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
