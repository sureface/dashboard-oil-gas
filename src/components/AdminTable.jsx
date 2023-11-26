import React, { useEffect, useState } from "react";
import { faEye, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";

const AdminTable = ({ data, onDelete, onEdit, users }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    console.log(tableData);
    setTableData(data);
    updateModal(data);
  }, [data]);

  // console.log(tableData);

  const handleShow = (id) => {
    // Handle show action
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const updateModal = (data) => {
    users(data);
  };

  const handleEdit = (id) => {
    const selectedItem = tableData.find((item) => item.id === id);
    onEdit(
      id,
      selectedItem.role,
      selectedItem.description,
      selectedItem.adminLogin,
      selectedItem.adminPassword,
      selectedItem.permissions
    );
  };

  return (
    <div className="container-fluid">
      <Table border={1} >
        <thead>
          <tr>
            <th>№</th>
            <th>Role</th>
            <th>Description</th>
            <th>Login</th>
            <th>Password</th>
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
                <td>{item.adminLogin}</td>
                <td>{item.adminPassword}</td>
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
                  </span>
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
