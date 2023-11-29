import React from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  faArrowDown,
  faArrowUp,
  faFireFlameSimple,
  faOilWell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LineChartGradient } from "../components/Chart";
import { Table } from "react-bootstrap";

const SuperAdminDefaultView = () => {
  const data = [
    {
      id: 1,
      name: "Shimoliy Berdaq",
      icon: faArrowDown,
      status: false,
      info: "Bu Oy",
      chart: <LineChartGradient />,
    },
    {
      id: 2,
      name: "Usyurt Gaz",
      icon: faArrowUp,
      status: true,
      info: "Bu Oy",
      chart: <LineChartGradient />,
    },
    {
      id: 3,
      name: "Usyurt Neft",
      icon: faArrowUp,
      status: true,
      info: "Bu Oy",
      chart: <LineChartGradient />,
    },
    {
      id: 4,
      name: "Muborak Gaz",
      icon: faArrowDown,
      status: false,
      info: "Bu Oy",
      chart: <LineChartGradient />,
    },
    {
      id: 5,
      name: "Muborak Neft",
      icon: faArrowUp,
      status: true,
      info: "Bu Oy ",
      chart: <LineChartGradient />,
    },
    {
      id: 6,
      name: "Sho'rtan Gaz",
      icon: faArrowDown,
      status: false,
      info: "Bu Oy",
      chart: <LineChartGradient />,
    },
  ];

  const allUsers = [
    {
      id: 1,
      role: "SuperAdmin",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
    {
      id: 2,
      role: "admin",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
    {
      id: 3,
      role: "burg'ulash",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
    {
      id: 4,
      role: "Kon Qidiruv",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
    {
      id: 5,
      role: "Masofa O'chovchilar",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
    {
      id: 6,
      role: "Labaratoriya",
      description: "bu foydalanuvchi hamma narsa qila oladi !",
    },
  ];

  return (
    <AdminLayout>
      <div className="container-fluid pb-5">
        <h3 className="text-blue text-center mt-3 mb-3">
          Welcome as Super Admin
        </h3>
        <div className="text-blue fs-20 mb-3">Barcha Konlar</div>
        <div className="row row-gap-4">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="kon">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div className="kon__name text-unusual-blue">{item.name}</div>
                  <div className="kon__info">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={item.status === true ? "rise" : "down"}
                    />
                    <div>{item.info}</div>
                  </div>
                </div>
                {item.chart}
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-5 mb-5" />
        <div className="text-blue fs-20 mb-3">Barcha Foydalanuvchilar</div>

        <Table>
          <thead>
            <tr>
              <th>№</th>
              <th>Roli</th>
              <th>Malumot</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.length > 0 ? (
              allUsers.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.role}</td>
                  <td>{item.description}</td>
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
    </AdminLayout>
  );
};

export default SuperAdminDefaultView;
