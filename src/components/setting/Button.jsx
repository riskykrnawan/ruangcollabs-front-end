import React from 'react';
import Button from 'react-bootstrap/Button';

function Input() {
  return (
    <div>
      <Button variant="transparent" className="btn-not-focus">
        <i className="bx bx-plus-circle fs-20 position-relative t-3 fs-15 p-l-10" aria-hidden="true" />
        Add More
      </Button>
    </div>
  );
}

export default Input;
