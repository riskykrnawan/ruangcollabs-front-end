/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {
  const { onHide } = props;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6>Silahkan Pilih Posisi Yang Anda Inginkan Sesuai Dengan Keahlian Anda</h6>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Check
            block
            label="Front End Web Developer"
            name="skill"
            value="front-web-developer"
            type="radio"
            id="block-radio-1"
          />
          <Form.Check
            block
            label="Back End Web Developer"
            name="skill"
            value="back-web-developer"
            type="radio"
            id="block-radio-2"
          />
          <Form.Check
            block
            label="UI Desainer"
            name="skill"
            value="ui-desainer"
            type="radio"
            id="block-radio-3"
          />
          <Form.Check
            block
            label="Project Manager"
            name="skill"
            value="project-manager"
            type="radio"
            id="block-radio-4"
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="transparent" onClick={onHide}>Close</Button>
        <Button variant="transparent">
          <span className="text-success">
            <i className="bx bxs-user-plus position-relative p-r-3 t-2" />
            Kirim Permintaan Bergabung
          </span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
