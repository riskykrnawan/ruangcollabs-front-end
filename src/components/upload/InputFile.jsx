import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

function Input(props) {
  const {
    controlIdForm, label, name, valueInput, changeHandler, errorInput, multiple,
  } = props;
  return (
    <InputGroup hasValidation>
      <Form.Group
        as={Col}
        controlId={controlIdForm}
        className="position-relative"
      >
        {multiple
          ? (
            <Form.Control
              type="file"
              name={name}
              value={valueInput}
              onChange={changeHandler}
              isInvalid={!!errorInput}
              className="border-0 border-bottom rounded-0"
              placeholder={label}
              multiple
            />
          ) : (
            <Form.Control
              type="file"
              name={name}
              value={valueInput}
              onChange={changeHandler}
              isInvalid={!!errorInput}
              className="border-0 border-bottom rounded-0"
              placeholder={label}
            />
          )}
        <Form.Control.Feedback type="invalid" tooltip>
          {errorInput}
        </Form.Control.Feedback>
      </Form.Group>
    </InputGroup>
  );
}

export default Input;
