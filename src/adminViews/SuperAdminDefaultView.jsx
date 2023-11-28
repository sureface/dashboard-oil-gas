import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { faOilWell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminDashboardChart, MyLine } from "../components/Chart";
const SuperAdminDefaultView = () => {
  return (
    <AdminLayout>
      <div className="container-fluid">
        <h3 className="text-blue text-center mt-3 mb-3">
          Welcome as Super Admin
        </h3>
        <div className="text-blue fs-20 mb-3">Barcha Konlar</div>
        <div className="row row-gap-2">
          <div className="col-md-3">
            <div className="kon">
              <div className="d-flex align-items-center justify-content-between p-3">
                <div className="kon__name">Muborak Neft</div>
                <FontAwesomeIcon icon={faOilWell} />
              </div>
              {/* will be chart */}
            </div>
          </div>
          <div className="col-md-3">kon</div>
          <div className="col-md-3">kon</div>
          <div className="col-md-3">kon</div>
          <div className="col-md-3">kon</div>
          <div className="col-md-3">kon</div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SuperAdminDefaultView;
