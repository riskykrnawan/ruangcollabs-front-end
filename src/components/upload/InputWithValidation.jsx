import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function Input(props) {
  const {
    controlIdForm, label, type, name, valueInput, changeHandler, errorInput,
  } = props;
  return (
    <InputGroup hasValidation>
      <Form.Group
        as={Col}
        controlId={controlIdForm}
        className="position-relative"
      >
        <FloatingLabel
          label={label}
          className="mb-3"
        >
          <Form.Control
            type={type}
            name={name}
            value={valueInput}
            onChange={changeHandler}
            isInvalid={!!errorInput}
            className="border-0 border-bottom rounded-0"
            placeholder={label}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {errorInput}
          </Form.Control.Feedback>
        </FloatingLabel>
      </Form.Group>
    </InputGroup>
  );
}

export default Input;
