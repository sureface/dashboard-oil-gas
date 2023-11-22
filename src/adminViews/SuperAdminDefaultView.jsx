import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faAngleDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
const SuperAdminDefaultView = () => {
  const [accordions, setAccordions] = useState([]);

  const addAccordion = () => {
    const newAccordion = {
      id: accordions.length + 1,
      content: `Content for Accordion Item #${accordions.length + 1}`,
    };
    setAccordions([...accordions, newAccordion]);
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
                  <div className="accordion-body">{accordion.content}</div>
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

export default SuperAdminDefaultView;
