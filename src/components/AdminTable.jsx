import React, { useEffect, useState } from "react";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";

const AdminTable = ({ data, onDelete, onEdit }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleShow = (id) => {
    // Handle show action
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id, newRole, newDescription) => {
    onEdit(id, newRole, newDescription);
  };

  return (
    <div className="container-fluid">
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Role</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.role}</td>
                <td>{item.description}</td>
                <td>
                  <span
                    className="cursor-pointer p-2"
                    onClick={() => handleShow(item.id)}
                  >
                    <FontAwesomeIcon icon={faEye} style={{ color: "#fff" }} />
                  </span>{" "}
                  <span
                    className="cursor-pointer p-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    <FontAwesomeIcon icon={faPen} style={{ color: "#fff" }} />
                  </span>{" "}
                  <span
                    className="cursor-pointer p-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#fff" }} />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <span className="text-center h-2">
              Foydalanuvchi Hali Qo'shilmagan
            </span>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminTable;
