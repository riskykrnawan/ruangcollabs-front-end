/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

import { Editor } from '@tinymce/tinymce-react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import InputWithValidation from './InputWithValidation';
import InputFile from './InputFile';

import NavbarCustom from '../partials/NavbarCustom';

const schema = yup.object().shape({
  title: yup.string()
    .min(3, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
  category: yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  descriptions: yup.string().min(3, 'Too Short!').required('Required'),
  uriImage: yup.string().required('Required'),
  password: yup.string()
    .required('Please Enter your password')
    .matches(
    // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  tags: yup.array().required('Required'),
  uriAttachment: yup.array().nullable(),
  skillsNeeded: yup.array().required('Required'),
});

function Post() {
  const editorRef = useRef(null);
  const [value, setValue] = useState('');
  const [text, setText] = useState('');

  const [tags, setTags] = useState(['']);
  const handleTagsRemoveClick = (index) => {
    const list = [...tags];
    list.splice(index, 1);
    setTags(list);
  };
  const handleTagsAddClick = () => {
    setTags([...tags, '']);
  };

  const [skillsNeeded, setSkillsNeeded] = useState(['']);
  const handleSkillsNeededRemoveClick = (index) => {
    const list = [...skillsNeeded];
    list.splice(index, 1);
    setSkillsNeeded(list);
  };
  const handleSkillsNeededAddClick = () => {
    setSkillsNeeded([...skillsNeeded, '']);
  };

  return (
    <>
      <NavbarCustom />
      <Container variant="white" className="bg-white mb-5 rounded">
        <Formik
          validationSchema={schema}
          initialValues={{
            uriImage: '',
            title: '',
            descriptions: '',
            category: '',
            password: 'Inipassword12!3',
            tags: [],
            uriAttachment: [],
            skillsNeeded: [],
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
            <Form className="login100-form p-b-30 p-t-90" method="post" action="/#" noValidate onSubmit={handleSubmit}>
              <h6 className="mt-5 mb-3">Title: </h6>
              <InputWithValidation
                controlIdForm="validationTitle"
                type="text"
                label="Enter Title"
                name="title"
                valueInput={values.title}
                changeHandler={handleChange}
                errorInput={errors.title}
              />

              <h6 className="mt-5 mb-3">Preview Image: </h6>
              <InputFile
                controlIdForm="validationImage"
                name="uriImage"
                changeHandler={handleChange}
                errorInput={errors.uriImage}
              />

              <h6 className="mt-5 mb-3">Category: </h6>
              <Field as="select" name="category" aria-label="Category" className="form-select mb-3">
                <option>Select Category</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Kedokteran">Kedokteran</option>
                <option value="Lainnya">Lainnya</option>
              </Field>

              <h6 className="mt-5 mb-3">Attachments: </h6>
              <InputFile
                controlIdForm="validationAttachment"
                name="uriAttachment"
                changeHandler={handleChange}
                errorInput={errors.uriAttachment}
                multiple
              />

              <h6 className="mt-5 mb-3">Details: </h6>
              <InputGroup hasValidation>
                <Form.Group
                  controlId="validationDescriptions"
                  className="position-relative w-100"
                >
                  <Editor
                    apiKey="6qwnb70wdwq4epro0od0pkrcci85yjf7lnvxyzjp6lbcithy"
                    onInit={(evt, editor) => editorRef.current = editor}
                    name="descriptions"
                    value={value}
                    isInvalid={!!errors.descriptions}
                    onEditorChange={(newValue) => { setValue(newValue); values.descriptions = newValue; }}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                      ],
                      toolbar: 'undo redo | formatselect | '
                      + 'bold italic backcolor | alignleft aligncenter '
                      + 'alignright alignjustify | bullist numlist outdent indent | '
                      + 'removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.descriptions}
                  </Form.Control.Feedback>
                </Form.Group>
              </InputGroup>

              <Row>
                <Col md={6}>
                  <h6 className="mt-5 mb-3">Skills You Are Looking For: </h6>
                  <div className="pb-3">
                    {skillsNeeded?.map((x, i) => (
                      <div key={i}>
                        <Row>
                          <InputGroup>
                            <Col md={11}>
                              <InputWithValidation
                                controlIdForm="validationSkillsNeeded"
                                type="text"
                                label="Skills"
                                name={`skillsNeeded[${i}]`}
                                changeHandler={handleChange}
                                errorInput={errors.skills}
                              />
                            </Col>
                            <Col md={1}>
                              <button type="button" className="bg-transparent border-0 btn-not-focus" onClick={() => handleSkillsNeededRemoveClick(i)}>
                                <i className="bx bx-minus-circle fs-30 position-relative p-t-10 t-7 text-secondary" />
                              </button>
                            </Col>
                          </InputGroup>
                        </Row>
                      </div>
                    ))}
                    <button type="button" className="border-0 btn-not-focus pt-1" onClick={handleSkillsNeededAddClick}>
                      <i className="bx bx-plus-circle fs-20 position-relative t-3" aria-hidden="true" />
                      <span className="fs-15 p-l-10">Add More</span>
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <h6 className="mt-5 mb-3">Tags: </h6>
                  <div className="pb-3">
                    {tags?.map((x, i) => (
                      <div key={i}>
                        <Row>
                          <InputGroup>
                            <Col md={11}>
                              <InputWithValidation
                                controlIdForm="validationTags"
                                type="text"
                                label="Tags"
                                name={`tags[${i}]`}
                                changeHandler={handleChange}
                                errorInput={errors.tags}
                              />
                            </Col>
                            <Col md={1}>
                              <button type="button" className="bg-transparent border-0 btn-not-focus" onClick={() => handleTagsRemoveClick(i)}>
                                <i className="bx bx-minus-circle fs-30 position-relative p-t-10 t-7 text-secondary" />
                              </button>
                            </Col>
                          </InputGroup>
                        </Row>
                      </div>
                    ))}
                    <button type="button" className="border-0 btn-not-focus pt-1" onClick={handleTagsAddClick}>
                      <i className="bx bx-plus-circle fs-20 position-relative t-3" aria-hidden="true" />
                      <span className="fs-15 p-l-10">Add More</span>
                    </button>
                  </div>
                </Col>
              </Row>
              <Button className="login100-form-btn bg-2 btn-not-focus border-0" type="submit">Save</Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}

export default Post;
