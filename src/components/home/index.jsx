import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

import NavbarCustom from '../partials/NavbarCustom';
import Card from './Card';

function Home() {
  const TITLE = 'Beranda';
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div id="main-page">
        <NavbarCustom />
        <Container>
          <div id="main">
            <section className="ftco-section pt-3 mb-5 ftco-intro">
              <div className="px-md-0">
                <button type="button" className="btn bg-transparent btn-not-focus">
                  <Link to="/upload" className="text-black text-decoration-none">
                    <h6 className="border">
                      <i className="bx bx-plus fs-30 position-relative t-7" />
                      <span className="p-l-2">Add Post</span>
                    </h6>
                  </Link>
                </button>
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                  <div className="col-md-4 d-flex justify-content-center mt-3 mb-4 card-container-outer">
                    <Card />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
