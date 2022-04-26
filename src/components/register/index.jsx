import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import InputWithValidation from './InputWithValidation';
import InputWithoutValidation from './InputWithoutValidation';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  username: yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phoneNumber: yup.string().required('Required'),
  password: yup.string()
    .required('Please Enter your password')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  passwordConfirmation: yup.string().required('Please Enter your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function FormRegister() {
  return (
    <div className="limiter bg-white">
      <div className="container-login100">
        <div className="wrap-login100">
          <span className="login100-form-title p-b-60">
            Sign-up
          </span>
          <div className="login100-form-avatar">
            <img src="./images/unmul.png" alt="AVATAR" />
          </div>
          <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
              fullName: '',
              username: '',
              email: '',
              phoneNumber: '',
              password: '',
              passwordConfirmation: '',
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
            }) => (
              <Form className="login100-form" method="post" action="/register" noValidate onSubmit={handleSubmit}>
                <Row className="mb-3 mt-5">
                  <InputWithoutValidation
                    controlIdForm="validationFullName"
                    type="text"
                    label="Full Name"
                    name="fullName"
                    valueInput={values.fullName}
                    changeHandler={handleChange}
                    touchedInput={touched.fullName}
                    errorInput={errors.fullName}
                  />

                  <InputWithValidation
                    controlIdForm="validationUsername"
                    type="text"
                    label="Username"
                    name="username"
                    valueInput={values.username}
                    changeHandler={handleChange}
                    errorInput={errors.username}
                  />

                  <InputWithValidation
                    controlIdForm="validationEmail"
                    type="email"
                    label="Email"
                    name="email"
                    valueInput={values.email}
                    changeHandler={handleChange}
                    errorInput={errors.email}
                  />

                  <InputWithValidation
                    controlIdForm="validationPhoneNumber"
                    type="number"
                    label="Phone Number"
                    name="phoneNumber"
                    valueInput={values.phoneNumber}
                    changeHandler={handleChange}
                    errorInput={errors.phoneNumber}
                  />

                  <InputWithValidation
                    controlIdForm="validationPassword"
                    type="password"
                    label="Password"
                    name="password"
                    valueInput={values.password}
                    changeHandler={handleChange}
                    errorInput={errors.password}
                  />

                  <InputWithValidation
                    controlIdForm="validationpasswordConfirmation"
                    type="password"
                    label="Confirm Password"
                    name="passwordConfirmation"
                    valueInput={values.passwordConfirmation}
                    changeHandler={handleChange}
                    errorInput={errors.passwordConfirmation}
                  />

                  <Form.Group className="position-relative mb-1 mt-4">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      feedbackType="invalid"
                      id="validationFormik107"
                      feedbackTooltip
                    />
                  </Form.Group>
                </Row>
                <Button className="login100-form-btn btn-not-focus border-0 bg-2" type="submit">Sign-up</Button>
              </Form>
            )}
          </Formik>
          <ul className="login-more m-t-30">
            <li>
              <span className="txt1">Have an account? </span>
              <Link to="/login">
                <span className="txt2">
                  Sign in
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
