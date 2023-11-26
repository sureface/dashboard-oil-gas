import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import AdminTable from "../components/AdminTable";

const AdminPermission = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      role: "SuperAdmin",
      description: "Bu admin hamma narsani ozgartira oladi !",
    },
  ]);
  const [incrementId, setIncrementId] = useState(2);
  const [allUsers, setAllUsers] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setRole("");
    setDescription("");
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (selectedId !== null) {
      const updatedData = data.map((item) =>
        item.id === selectedId ? { ...item, role, description } : item
      );
      setData(updatedData);
    } else {
      setData([...data, { id: incrementId, role, description }]);
      setIncrementId(incrementId + 1);
    }
    setRole("");
    setDescription("");
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, role, description) => {
    setSelectedId(id);
    setRole(role);
    setDescription(description);
    setShowModal(true);
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
        {data.length > 0 ? (
          <AdminTable
            data={data}
            onDelete={handleDelete}
            onEdit={handleEdit}
            users={getAllUsers}
          />
        ) : (
          ""
        )}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSave}>
              <Form.Group controlId="formRole" className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
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
              <div className="d-flex align-items-center justify-content-end">
                <Button variant="primary" type="submit">
                  Save
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
