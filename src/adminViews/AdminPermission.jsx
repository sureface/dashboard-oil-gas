import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import AdminTable from "../components/AdminTable";

const AdminPermission = () => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [incrementId, setIncrementId] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    setData([...data, { id: incrementId, role, description }]);
    setRole("");
    setDescription("");
    setShowModal(false);
    setIncrementId(incrementId + 1);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id, newRole, newDescription) => {
    setData(data.map(item => (item.id === id ? { ...item, role: newRole, description: newDescription } : item)));
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
          <AdminTable data={data} onDelete={handleDelete} onEdit={handleEdit} />
        ) : (
          ""
        )}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminPermission;
