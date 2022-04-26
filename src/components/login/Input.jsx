import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Input(props) {
  const {
    type, name, placeholder,
  } = props;
  return (
    <FloatingLabel
      controlId="floatingInput"
      label={placeholder}
      className="mb-3"
    >
      <Form.Control type={type} className="border-0 border-bottom rounded-0" name={name} placeholder={placeholder} />
    </FloatingLabel>
  );
}
export default Input;
