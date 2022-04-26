import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

function Card() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="card card-container-inner">
      <div className="card-body">
        <a href="/#" className="text-secondary text-decoration-none">
          <h6 className="card-title">
            riskykrnawan
            <span className="position-relative t-3 p-l-2 verified-badge" data-toggle="tooltip" data-placement="top" data-html="true" title="Verified User <span class='position-relative t-2'><i class='bx bxs-badge-check fs-15'></i></span>">
              <i className="bx bxs-badge-check text-primary fs-17 " />
            </span>
          </h6>
        </a>
        <h5 className="card-title fs-18 m-t-10">E-Commerce Berbasis Web</h5>
        <h6 className="card-title m-t-13 m-b-13">Teknologi</h6>
        <Link to="/project" className="card-link text-decoration-none">
          Lihat Selengkapnya...
        </Link>
        <ul className="list-group list-group-flush position-relative">
          <li className="list-group-item text-muted m-t-10 pt-1 pb-1 border-top border-bottom">Dibutuhkan:</li>
          <li className=" m-l-20 m-r-20 pt-2 skills">Front End Web Developer</li>
          <li className=" m-l-20 m-r-20 pt-2 skills">Back End Web Developer</li>
          <li className=" m-l-20 m-r-20 pt-2 skills">UI Desainer</li>
        </ul>
      </div>

      <Button variant="transparent" className="rounded-0 bg-2" onClick={() => setModalShow(true)}>
        <span className="text-white">
          <i className="bx bxs-user-plus position-relative t-2 p-r-3" />
          Gabung Proyek
        </span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="text-right p-b-12 px-4">
        <hr />
        <Link to="/project" className="card-link text-decoration-none">
          Lihat Detail
          <i className="bx bx-chevrons-right position-relative t-2" />
        </Link>
      </div>
    </div>
  );
}
export default Card;
