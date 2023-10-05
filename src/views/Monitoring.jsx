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
import TableResult from "../components/TableResult";
import data1a1 from "../assets/img/data1-1.png";
import data1a2 from "../assets/img/data1-2.png";
import data1a3 from "../assets/img/data1-3.png";

import data2a1 from "../assets/img/data2-1.png";
import data2a2 from "../assets/img/data2-2.png";
import data2a3 from "../assets/img/data2-3.png";

import data3a1 from "../assets/img/data3-1.png";
import data3a2 from "../assets/img/data3-2.png";
import data3a3 from "../assets/img/data3-3.png";

import data4a1 from "../assets/img/data4-1.png";
import data4a2 from "../assets/img/data4-2.png";
import data4a3 from "../assets/img/data4-3.png";

const Monitoring = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [localData, setLocalData] = useState(null);

  const labels = [
    "№",
    "Время разработки(сутки)",
    "Начальное давление: Р(ат)",
    "Шаги по времени (сутки)",
    "Праницаемость пласта к(Д)",
    "Упрегаемкость пласта В",
    "Вязкость нефти ми (Спуаз)",
    "Длина пласта по LХ(метр)",
    "Длина пласта по L(метр)",
    "Мощность пласта һ (метр)",
    "Вывод резул. по врем (сутки)",
    "Падение давление в скважинах",
    "Распределение давление в сечение",
    "Результат",
  ];
  const values = [
    [
      1,
      1080,
      300,
      24,
      0.005,
      0.0001,
      4,
      10000,
      10000,
      15,
      30,
      data1a1,
      data1a2,
      data1a3,
    ],
    [
      2,
      1080,
      300,
      24,
      0.005,
      0.0001,
      4,
      10000,
      10000,
      20,
      30,
      data2a1,
      data2a2,
      data2a3,
    ],
    [
      3,
      1080,
      300,
      24,
      0.007,
      0.0002,
      4,
      10000,
      20000,
      20,
      30,
      data3a1,
      data3a2,
      data3a3,
    ],
    [
      4,
      1080,
      300,
      24,
      0.007,
      0.0002,
      4,
      10000,
      20000,
      10,
      30,
      data4a1,
      data4a2,
      data4a3,
    ],
  ];

  const labelData = [
    "Нукталар Сони",
    "Кетма-кет хисоблаш вакти (миллисекунды)",
    "Параллельный хисоблаш вакти (миллисекунды)",
    "Хисоблаш самарадорлиги",
  ];

  const valueData = [
    [50, 117, 75, 1.43],
    [100, 439, 306, 1.51],
    [150, 987, 638, 1.55],
    [200, 1761, 1100, 1.6],
  ];

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
        <h3 className="mb-3 text-center text-capitalize text-main">
          statistik ko'rsatkich
        </h3>
        <DrawChartFromExcel data={selectedFile} localData={localData} />
        <ExampleSChart1 />
        <ExampleSChart2 />
        <ExampleSChart3 />
        <h3 className="mb-3 text-center text-capitalize text-main">
          hisoblash natijalari
        </h3>

        <TableResult labels={labels} values={values} />

        <h3 className="mb-3 text-center text-capitalize text-main">
          vaqt (720 sutka)
        </h3>

        <TableResult labels={labelData} values={valueData} time={true} />
      </div>
    </Layout>
  );
};

export default Monitoring;
