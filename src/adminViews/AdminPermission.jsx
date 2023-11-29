import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import AdminTable from "../components/AdminTable";
import { useDispatch } from "react-redux";
import { allUsersReducer } from "../redux/features/auth/permissionSlice";

const AdminPermission = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      role: "SuperAdmin",
      description: "Bu admin hamma narsani ozgartira oladi !",
      adminLogin: "superAdmin",
      adminPassword: "superAdmin",
      permissions: {
        konlar: true,
        monitoring: true,
        kartateka: true,
        orografiya: true,
        masalaniTanlash: true,
      }
    },
  ]);
  const [incrementId, setIncrementId] = useState(2);
  const [allUsers, setAllUsers] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [adminPassword, setadminPassword] = useState("");
  const [adminLogin, setadminLogin] = useState("");
  // permissions
  const [permissions, setPermissions] = useState({
    konlar: false,
    monitoring: false,
    kartateka: false,
    orografiya: false,
    masalaniTanlash: false,
  });

  const dispatch = useDispatch()

  dispatch(allUsersReducer(data))

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    console.log(name, checked);
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(selectedId, "selectedId");

    if (selectedId !== null) {
      const updatedData = data.map((item) =>
        item.id === selectedId
          ? {
            ...item,
            role,
            description,
            adminLogin,
            adminPassword,
            permissions,
          }
          : item
      );
      setData(updatedData);

    } else {
      setData([
        ...data,
        {
          id: incrementId,
          role,
          description,
          adminLogin,
          adminPassword,
          permissions,
        },
      ]);
      // dispatch(data)
      setIncrementId(incrementId + 1);
    }
    setShowModal(false)
    setRole("");
    setDescription("");
    setadminLogin("");
    setadminPassword("");
    setPermissions({
      konlar: false,
      monitoring: false,
      kartateka: false,
      orografiya: false,
      masalaniTanlash: false,
    });
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    dispatch(data)
  };

  const handleEdit = (
    id,
    role,
    description,
    adminLogin,
    adminPassword,
    permissions
  ) => {
    setSelectedId(id);
    setRole(role);
    setDescription(description);
    setShowModal(true);
    setadminLogin(adminLogin);
    setadminPassword(adminPassword);
    setPermissions(permissions);
  };

  const getAllUsers = (users) => {
    if (users.length > 0) {
      setAllUsers([...users]);
    }
  };

  const ruleOptions = () => {
    if (allUsers !== null) {
      return allUsers.map((item, index) => (
        <option key={index} value={index}>
          {item.role}
        </option>
      ));
    }
  };

  return (
    <AdminLayout>
      <div className="container-fluid mt-3">
        <div className="d-flex align-items-center justify-content-center ps-3 pe-3 mb-4">
          <Button variant="primary" onClick={handleShowModal}>
            Yangi Foydalanuvchi Qo'shish
          </Button>
        </div>
        {data.length >= 0 ? (
          <AdminTable
            data={data}
            onDelete={handleDelete}
            onEdit={handleEdit}
            users={getAllUsers}
          />
        ) : (
          <span className="text-center h-2">
            Foydalanuvchi Hali Qo'shilmagan
          </span>
        )}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title className="text-blue">
              Yangi Foydalanuvchi Qo'shing
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSave}>
              <Form.Group controlId="formRole" className="mb-3">
                <Form.Label>Foydalanuvchi Ijrosi</Form.Label>
                <Form.Control
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>Foydalanuvchi haqida qisqa malumot</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <hr className="mb-3" />
              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Label>Boysindirish</Form.Label>
                    <Form.Select aria-label="Boysindirish">
                      <option disabled>Tanlang</option>
                      {ruleOptions()}
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Label>Boysinish</Form.Label>
                    <Form.Select aria-label="Boysinish">
                      <option disabled>Tanlang</option>
                      {ruleOptions()}
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Label>Foydalanuvchi Login</Form.Label>
                    <Form.Control
                      type="text"
                      value={adminLogin}
                      onChange={(e) => setadminLogin(e.target.value)}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group>
                    <Form.Label>Foydalanuvchi Paro'li</Form.Label>
                    <Form.Control
                      type="text"
                      value={adminPassword}
                      onChange={(e) => setadminPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
              <hr className="mb-3" />
              <Form.Group controlId="formCheckboxes" className="mb-3">
                <Form.Label className="d-flex aling-items-center justfy-centent-center text-blue">
                  Bo'limlarni Ko'rish uchun Ruhsatlar
                </Form.Label>
                <div className="d-flex align-items-center flex-wrap">
                  <Form.Check
                    type="checkbox"
                    id="Konlar"
                    name="Konlar"
                    label="Konlar"
                    className="me-3"
                    checked={permissions.permission1}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="Monitoring"
                    name="Monitoring"
                    label="Monitoring"
                    className="me-3"
                    checked={permissions.permission2}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="Kartateka"
                    name="Kartateka"
                    label="Kartateka"
                    className="me-3"
                    checked={permissions.permission3}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="Orografiya"
                    name="Orografiya"
                    label="Orografiya"
                    className="me-3"
                    checked={permissions.permission4}
                    onChange={handleCheckboxChange}
                  />
                  <Form.Check
                    type="checkbox"
                    id="MasalaniTanlash"
                    name="MasalaniTanlash"
                    label="MasalaniTanlash"
                    className="me-3"
                    checked={permissions.permission5}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-end">
                <Button variant="primary" type="submit">
                  Qo'shish
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminPermission;
