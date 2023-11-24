import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faAngleDown,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Form, InputGroup } from "react-bootstrap";

const BarchaKonlar = () => {
  const [accordions, setAccordions] = useState([]);

  const addAccordion = () => {
    const newAccordion = {
      id: accordions.length + 1,
      name: "",
      place: "",
      longitude: "",
      latitude: "",
      description: "",
      images: [],
      content: `Content for Accordion Item #${accordions.length + 1}`,
    };
    setAccordions([...accordions, newAccordion]);
  };

  const handleImageUpload = (index, event) => {
    const files = event.target.files;
    const updatedAccordions = [...accordions];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = function (e) {
        const newImage = {
          id: Date.now() + i,
          url: e.target.result,
        };
        updatedAccordions[index].images.push(newImage);
        if (i === files.length - 1) {
          setAccordions(updatedAccordions);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (accordionIndex, imageIndex) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[accordionIndex].images.splice(imageIndex, 1);
    setAccordions(updatedAccordions);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <AdminLayout>
      <div className="container-fluid pt-2 ps-3 pe-3">
        <div className="row mb-3">
          <div className="col-md-11">
            <div className="input-group mb-3">
              <label htmlFor="search" className="input-group-text">
                <FontAwesomeIcon icon={faSearch} />
              </label>
              <input
                type="search"
                className="form-control"
                placeholder="Konlarni qidiring..."
                aria-label="Search"
                aria-describedby="search"
                id="search"
              />
            </div>
          </div>
          <div className="col-md-1">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <FontAwesomeIcon icon={faFilter} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Filter by ID</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Filter by Name</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Filter by Company Name
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="custom-accordion-container">
          {accordions.map((accordion, index) => (
            <div
              key={accordion.id}
              className="accordion"
              id={`accordion-${accordion.id}`}
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${accordion.id}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${accordion.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse-${accordion.id}`}
                  >
                    Accordion Item #{accordion.id}
                    <FontAwesomeIcon icon={faAngleDown} className="ms-2" />
                  </button>
                </h2>
                <div
                  id={`collapse-${accordion.id}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading-${accordion.id}`}
                >
                  <div className="accordion-body">
                    <Form onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control type="text" placeholder="Kon Nomi" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Kon Manzili"
                            />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Longitute" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Latutite" />
                          </Form.Group>
                        </div>
                        <div className="col-12">
                          <Form.Group className="mb-3">
                            <Form.Control
                              as="textarea"
                              placeholder="Kon haqida malumot..."
                              rows={3}
                            />
                          </Form.Group>
                        </div>
                        <div className="col-12 mb-3">
                          <div className="input-group">
                            <input
                              type="file"
                              className="form-control"
                              id={`images-${accordion.id}`}
                              onChange={(e) => handleImageUpload(index, e)}
                              multiple
                            />
                          </div>
                          <div className="mt-2 uploaded-image">
                            {accordion.images.map((image, imageIndex) => (
                              <div
                                key={image.id}
                                className="uploaded-image__wrapper"
                              >
                                <img
                                  src={image.url}
                                  alt={`Uploaded ${imageIndex + 1}`}
                                />
                                <div className="uploaded-image__cancel">
                                  <FontAwesomeIcon
                                    icon={faTimes}
                                    className="cancel-icon"
                                    onClick={() =>
                                      removeImage(index, imageIndex)
                                    }
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <button type="submit" className="accordion-save__btn">
                            Saqlash
                          </button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary" onClick={addAccordion}>
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Kon qo'shish
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BarchaKonlar;
