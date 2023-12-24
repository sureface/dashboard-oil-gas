import React, { useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faCloudArrowUp,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const BarchaKonlar = () => {
  const [uploadedPicture, setUploadedPicture] = useState(null);
  const [minesPic, setMinesPic] = useState(null);
  const [morePics, setMorePics] = useState([]);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    konNomi: "",
    lon: "",
    lat: "",
    konMalumoti: "",
    konGeografikMalumoti: "",
    konManzili: "",
    ism: "",
    familya: "",
    tel: "",
    login: "",
  });

  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      minesPic,
      morePics,
      uploadedPicture,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCard = {
      konNomi: formData.konNomi,
      lon: formData.lon,
      lat: formData.lat,
      konMalumoti: formData.konMalumoti,
      konManzili: formData.konMalumoti,
      konGeografikMalumoti: formData.konGeografikMalumoti,
      uploadedPicture: uploadedPicture,
      minesPic: minesPic,
      morePics: morePics,
      login: formData.login,
      ism: formData.ism,
      familya: formData.familya,
      tel: formData.tel,
    };

    setCards((prevCards) => [...prevCards, newCard]);

    setFormData({
      konNomi: "",
      lon: "",
      lat: "",
      konMalumoti: "",
      konGeografikMalumoti: "",
      konManzili: "",
      ism: "",
      familya: "",
      tel: "",
      login: "",
    });
    setUploadedPicture(null);
    setMinesPic(null);
    setMorePics([]);
    // setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handelShowEdit = (index) => {
  //   console.log(cards);
  //   setShow(true);
  //   setFormData({
  //     konNomi: cards[index].konNomi,
  //     lon: cards[index].lon,
  //     lat: cards[index].lat,
  //     konMalumoti: cards[index].konMalumoti,
  //     konManzili: cards[index].konMalumoti,
  //     konGeografikMalumoti: cards[index].konGeografikMalumoti,
  //     uploadedPicture: cards[index].uploadedPicture,
  //     minesPic: cards[index].minesPic,
  //     morePics: cards[index].morePics,
  //     login: cards[index].login,
  //     ism: cards[index].ism,
  //     familya: cards[index].familya,
  //     tel: cards[index].tel,
  //   });
  // };

  const getMinesPic = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMinesPic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getUploadedPic = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedPicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getMultipleImage = (e) => {
    const files = e.target.files;
    const urls = [];

    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          urls.push(e.target.result);
          if (urls.length === files.length) {
            setMorePics(urls);
          }
        };
        reader.readAsDataURL(file);
      });
    }
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
        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="primary"
            className="mb-3 text-capitalize"
            onClick={handleShow}
          >
            kon qo'shish
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          centered
          dialogClassName="modal-90w"
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-dark-blue">
              Kon Malumotlarini Kiriting !
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <Form.Group controlId="minesName" className="mb-3">
                  <Form.Label>kon Nomi: {formData.konNomi}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="kon Nomi"
                    value={formData.konNomi}
                    onChange={handleChange}
                    name="konNomi"
                    required
                  />
                </Form.Group>
                <div className="col-6 mb-3">
                  <Form.Group controlId="minesLongitute" className="mb-3">
                    <Form.Label>Longitute </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Longitute"
                      value={formData.lon}
                      onChange={handleChange}
                      name="lon"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="minesInfo">
                    <Form.Label>Kon Haqida Malumot:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Kon Haqida Malumot"
                      value={formData.konMalumoti}
                      onChange={handleChange}
                      name="konMalumoti"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-6 mb-3">
                  <Form.Group controlId="minesLatitute" className="mb-3">
                    <Form.Label>Latitute</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Latitute"
                      value={formData.lat}
                      onChange={handleChange}
                      name="lat"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="minesGeograficalInfo">
                    <Form.Label>Konning Geografik Malumoti:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Konning Geografik Malumoti"
                      value={formData.konGeografikMalumoti}
                      onChange={handleChange}
                      name="konGeografikMalumoti"
                      required
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group controlId="minesAddress" className="mb-3">
                <Form.Label>Konning Manzili:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Konning Manzili:"
                  value={formData.konManzili}
                  onChange={handleChange}
                  name="konManzili"
                  required
                />
              </Form.Group>

              <div className="row mb-4">
                <div className="col-6">
                  <Form.Group controlId="minesPersonalName" className="mb-3">
                    <Form.Label>Ismi:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Foydalanuvchining Ismi..."
                      value={formData.ism}
                      onChange={handleChange}
                      name="ism"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridPhone">
                    <Form.Label title="(+998 99 797 15 45) davlat kodini kiritish va joy tashlab yozish shart emas !">
                      Telefon Raqami misol uchun (997971545)
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Telefon Raqami"
                      pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                      value={formData.tel}
                      onChange={handleChange}
                      name="tel"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group
                    controlId="minesPersonalSureName"
                    className="mb-3"
                  >
                    <Form.Label>Familyasi:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Foydalanuvchining Familyasi..."
                      value={formData.familya}
                      onChange={handleChange}
                      name="familya"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="minesLogin" className="mb-3">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Logini Kiriting..."
                      value={formData.login}
                      onChange={handleChange}
                      name="login"
                      required
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-6">
                  <div className="mb-2">Profile uchun rasim yuklang:</div>
                  <div className="d-flex gap-2">
                    <div className="mines-profile__img">
                      <label htmlFor="imgUpload">
                        {uploadedPicture ? (
                          <FontAwesomeIcon icon={faRepeat} />
                        ) : (
                          <FontAwesomeIcon icon={faCloudArrowUp} />
                        )}
                      </label>
                      <input
                        type="file"
                        id="imgUpload"
                        accept="image/*"
                        onChange={getUploadedPic}
                      />
                    </div>
                    <div
                      className="mines-profile__img_preview"
                      style={
                        uploadedPicture
                          ? {
                              display: "block",
                              backgroundImage: `url(${uploadedPicture})`,
                            }
                          : {}
                      }
                    ></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-2">Konning Rasimi yukang:</div>
                  <div className="d-flex gap-2">
                    <div className="mines-profile__img">
                      <label htmlFor="mines-pic">
                        {minesPic ? (
                          <FontAwesomeIcon icon={faRepeat} />
                        ) : (
                          <FontAwesomeIcon icon={faCloudArrowUp} />
                        )}
                      </label>
                      <input
                        type="file"
                        id="mines-pic"
                        accept="image/*"
                        onChange={getMinesPic}
                      />
                    </div>
                    <div
                      className="mines-profile__img_preview"
                      style={
                        minesPic
                          ? {
                              display: "block",
                              backgroundImage: `url(${minesPic})`,
                            }
                          : {}
                      }
                    ></div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-3 text-blue h5">
                Konning Geografik raasimi:
              </div>
              <div className="row row-gap-4 mb-4">
                <div className="col-3">
                  <div className="mines-geografic__img">
                    <label htmlFor="geografic-img">
                      {morePics.length > 0 ? (
                        <FontAwesomeIcon icon={faRepeat} />
                      ) : (
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                      )}
                    </label>
                    <input
                      type="file"
                      id="geografic-img"
                      accept="image/*"
                      multiple
                      onChange={getMultipleImage}
                    />
                  </div>
                </div>
                {morePics.length > 0
                  ? morePics.map((url, index) => (
                      <div className="col-3" key={index}>
                        <div
                          className="mines-geografic__img"
                          style={{ backgroundImage: `url(${url})` }}
                        ></div>
                      </div>
                    ))
                  : ""}
              </div>
              <div className="d-flex align-items-center justify-content-end">
                <Button type="submit" variant="primary">
                  Saqlash
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="mines pb-5">
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <div className="mines-card" key={index}>
                <h1 className="mines-heading">{card.konNomi}</h1>

                <div className="row">
                  <div className="col-6">
                    <div className="mines-title text-center">
                      kon haqida ma'lumot:
                    </div>
                    <p>{card.konMalumoti}</p>
                  </div>
                  <div className="col-6">
                    <div className="mines-title text-center">
                      kon haqida geografik ma'lumot:
                    </div>
                    <p>{card.konGeografikMalumoti}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-3">
                    <div className="mines-title">profile uchun rasim:</div>

                    <div
                      className="mines-single__pic"
                      style={{
                        backgroundImage: `url(${card.uploadedPicture})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-3">
                    <div className="mines-title">konning rasimi:</div>
                    <div
                      className="mines-single__pic"
                      style={{ backgroundImage: `url(${card.minesPic})` }}
                    ></div>
                  </div>
                  <div className="col-3">
                    <div className="mines-title">Login:</div>
                    <div className="mb-3">{card.login}</div>
                    <div className="mines-title">foydalanuvchining ismi:</div>
                    <div className="mb-3">{card.ism}</div>
                  </div>
                  <div className="col-3">
                    <div className="mines-title">konning joylashuvi:</div>
                    <div className="mines-2lavel__text">
                      <span>uzunligi: &nbsp;</span> {card.lon}
                    </div>
                    <div className="mines-2lavel__text mb-3">
                      <span>kengligi: &nbsp;</span> {card.lat}
                    </div>
                    <div className="mines-title"> telefon raqami: </div>
                    <div>{card.tel}</div>
                  </div>
                </div>

                <hr />

                <div className="mines-title text-center mb-4">
                  konning geografik kartasi uchun rasimlar:
                </div>

                <div className="row row-gap-4">
                  {card.morePics.map((pic, index) => (
                    <div className="col-3" key={index}>
                      <div
                        className="mines-single__pic"
                        style={{ backgroundImage: `url(${pic})` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <br />
                <br />

                <div className="d-flex align-items-center justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    // onClick={handelShowEdit(index)}
                  >
                    O'zgartirish
                  </button>
                  <button type="button" className="btn btn-danger">
                    O'chirish
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Kon Hali Qo'shilmagan !</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default BarchaKonlar;
