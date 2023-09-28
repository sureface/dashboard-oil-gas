import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as XLSX from "xlsx";
import {
  DrawChartFromExcel,
  ExampleSChart1,
  ExampleSChart2,
  ExampleSChart3,
} from "../components/Chart";

const Monitoring = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [localData, setLocalData] = useState(null);

  useEffect(() => {
    let jsonData = localStorage.getItem("chartData");
    if (jsonData) {
      setLocalData(JSON.parse(jsonData));
    }
  }, []);

  const years = Array.from({ length: 37 }, (_, index) => 2004 + index);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      localStorage.setItem("chartData", JSON.stringify(jsonData));

      setSelectedFile(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Layout>
      <div className="monitoring">
        <div className="monitoring-upload">
          <label htmlFor="file" className="monitoring-file">
            <FontAwesomeIcon icon={faCloudArrowUp} />
            {selectedFile ? "fayl mofaqiyatli yuklandi" : "faylni yuklash"}
            <input
              type="file"
              name="file"
              id="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <DrawChartFromExcel data={selectedFile} localData={localData} />
        <ExampleSChart1 />
        <ExampleSChart2 />
        <ExampleSChart3 />
      </div>
    </Layout>
  );
};

export default Monitoring;
