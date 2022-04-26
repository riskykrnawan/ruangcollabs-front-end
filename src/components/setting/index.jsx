/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import InputWithValidation from './InputWithValidation';

import NavbarCustom from '../partials/NavbarCustom';

const schema = yup.object().shape({
  fullName: yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  topSkill: yup.string()
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
  company: yup.string(),
  location: yup.string(),
  description: yup.string(),
});

function Setting() {
  const [skills, setSkills] = useState(['']);

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...skills];
    list.splice(index, 1);
    setSkills(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setSkills([...skills, '']);
  };
  return (
    <>
      <NavbarCustom />
      <Container variant="white" className="bg-white mb-5 rounded">
        <Formik
          validationSchema={schema}
          initialValues={{
            uriImage: null,
            fullName: 'Risky Kurniawan',
            username: 'riskykrnawan',
            email: 'riskykrnawan@gmail.com',
            topSkill: 'Fullstack Web Developer',
            phoneNumber: '082158317722',
            password: 'Inipassword12!3',
            company: 'Universitas Mulawarman',
            location: 'Sebulu, Kutai Kartanegara',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum dignissimos pariatur qui, ipsum doloremque quod beatae perferendis eos accusantium error quaerat sit quis dolorum omnis asperiores vero, dolores nesciunt id expedita magni fugit ullam repudiandae? Ad sed sapiente illo animi accusamus nam quo veritatis debitis, perferendis minima incidunt in! Commodi ea dolore velit fuga in. At, vero explicabo! Illum libero atque similique voluptates nesciunt, nisi asperiores hic voluptatibus magni tempora? Sed aut doloremque eligendi fuga amet. Natus illo vel dolorem incidunt quis nisi modi, fuga impedit dolore. Blanditiis quibusdam voluptatem, doloremque eligendi quaerat sapiente quia, dicta earum sint, veniam at.',
            twitter: 'riskykrnawan',
            linkedin: 'riskykrnawan',
            github: 'riskykrnawan',
            otherSkills: [],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            errors,
          }) => (
            <Form className="login100-form p-b-30" method="post" action="/#" noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={3}>
                  <div className="d-flex flex-column align-items-center text-center p-3">
                    <img className="rounded-circle m-t-50" width="150px" src="./images/unmul.png" alt="yourimage" />
                    <InputWithValidation
                      controlIdForm="validationImage"
                      type="file"
                      name="uriImage"
                      changeHandler={handleChange}
                      errorInput={errors.uriImage}
                    />
                    <span className="font-weight-bold m-t-25">
                      Risky Kurniawan
                    </span>
                    <span className="text-black-50">
                      riskykrnawan
                    </span>
                    <span className="text-black-50">
                      riskykrnawan@gmail.com
                    </span>
                  </div>
                </Col>
                <Col md={9}>
                  <Row className="mb-3 mt-5">
                    <Col md={7}>
                      <InputWithValidation
                        controlIdForm="validationFullName"
                        type="text"
                        label="Full Name"
                        name="fullName"
                        valueInput={values.fullName}
                        changeHandler={handleChange}
                        errorInput={errors.fullName}
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
                        controlIdForm="validationTopSkill"
                        type="text"
                        label="Your Top Skill"
                        name="topSkill"
                        valueInput={values.topSkill}
                        changeHandler={handleChange}
                        errorInput={errors.topSkill}
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

                      <Row>
                        <Col md={4}>
                          <InputWithValidation
                            controlIdForm="validationTwitter"
                            type="text"
                            label="Twitter"
                            name="twitter"
                            valueInput={values.twitter}
                            changeHandler={handleChange}
                            errorInput={errors.twitter}
                          />
                        </Col>
                        <Col md={4}>
                          <InputWithValidation
                            controlIdForm="validationGithub"
                            type="text"
                            label="Github"
                            name="github"
                            valueInput={values.github}
                            changeHandler={handleChange}
                            errorInput={errors.github}
                          />
                        </Col>
                        <Col md={4}>
                          <InputWithValidation
                            controlIdForm="validationLinkedin"
                            type="text"
                            label="Linkedin"
                            name="linkedin"
                            valueInput={values.linkedin}
                            changeHandler={handleChange}
                            errorInput={errors.linkedin}
                          />
                        </Col>
                      </Row>

                      <InputWithValidation
                        controlIdForm="validationCompany"
                        type="text"
                        label="Company"
                        name="company"
                        valueInput={values.company}
                        changeHandler={handleChange}
                        errorInput={errors.company}
                      />
                      <InputWithValidation
                        controlIdForm="validationLocation"
                        type="text"
                        label="Location"
                        name="location"
                        valueInput={values.location}
                        changeHandler={handleChange}
                        errorInput={errors.location}
                      />
                      <FloatingLabel
                        label="Describe Yourself"
                        className="mb-3 mt-0 pt-5 border-bottom"
                      >
                        <textarea
                          id="description"
                          name="description"
                          className="p-l-12 w-100"
                          placeholder="Hello, my name is John Doe, I study at Mulawarman University. I am interested in android programming."
                          onChange={handleChange}
                          value={values.description}
                          rows="6"
                        />
                      </FloatingLabel>
                    </Col>

                    <Col md={5}>
                      <h6 className="m-t-20">Other Skills / Interest: </h6>
                      <div className="p-3">
                        {skills?.map((value, i) => (
                          <div key={i}>
                            <Row>
                              <InputGroup>
                                <Col md={10}>
                                  <InputWithValidation
                                    controlIdForm="validationOtherSkills"
                                    type="text"
                                    label="Other Skills"
                                    name={`otherSkills[${i}]`}
                                    changeHandler={handleChange}
                                    errorInput={errors.otherSkills}
                                  />
                                </Col>
                                <Col md={1}>
                                  <button type="button" className="bg-transparent border-0 btn-not-focus" onClick={() => handleRemoveClick(i)}>
                                    <i className="bx bx-minus-circle fs-30 position-relative p-t-10 t-7 text-secondary" />
                                  </button>
                                </Col>
                              </InputGroup>
                            </Row>
                          </div>
                        ))}
                        <button type="button" className="border-0 btn-not-focus pt-1" onClick={handleAddClick}>
                          <i className="bx bx-plus-circle fs-20 position-relative t-3" aria-hidden="true" />
                          <span className="fs-15 p-l-10">Add More</span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <InputWithValidation
                    controlIdForm="validationPassword"
                    type="password"
                    label="Enter Your Password to Save Changes"
                    name="password"
                    valueInput={values.password}
                    changeHandler={handleChange}
                    errorInput={errors.password}
                  />
                  <Button className="login100-form-btn bg-2 btn-not-focus border-0" type="submit">Save</Button>
                </Col>

              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default Setting;
