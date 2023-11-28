import React, { useRef, useEffect } from "react";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Filler,
} from "chart.js";
import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  LineController,
  BarController,
  Filler
);

export const LineChartSimple = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const data1 = [
    "20.85",
    "20.11",
    "19.03",
    "18.06",
    "17.41",
    "16.81",
    "16.42",
    "16.08",
    "15.79",
    "15.20",
    "14.61",
    "14.03",
    "13.44",
    "12.85",
    "12.26",
    "11.67",
    "11.08",
    "10.49",
    "9.90",
    "9.31",
    "8.75",
    "8.24",
    "7.76",
    "7.31",
    "6.89",
    "6.50",
    "6.14",
    "5.80",
    "5.48",
    "5.18",
    "4.91",
    "4.65",
    "4.40",
    "4.18",
    "3.97",
    "3.77",
    "3.59",
  ];

  const data2 = [
    "18.35",
    "17.61",
    "16.53",
    "15.56",
    "14.91",
    "14.31",
    "13.92",
    "13.58",
    "13.29",
    "12.70",
    "12.11",
    "11.53",
    "10.94",
    "10.35",
    "9.76",
    "9.17",
    "8.58",
    "7.99",
    "7.40",
    "6.81",
    "6.35",
    "5.94",
    "5.56",
    "5.21",
    "4.89",
    "4.70",
    "4.34",
    "4.00",
    "3.68",
    "3.38",
    "3.11",
    "2.85",
    "2.60",
    "2.38",
    "2.17",
    "1.97",
    "1.79",
  ];

  const data3 = [
    "15.66",
    "15.02",
    "14.08",
    "13.25",
    "12.70",
    "12.19",
    "11.86",
    "11.57",
    "11.32",
    "10.82",
    "10.32",
    "9.82",
    "9.32",
    "8.82",
    "8.32",
    "7.82",
    "7.32",
    "6.82",
    "6.32",
    "5.82",
    "5.44",
    "5.09",
    "4.77",
    "4.47",
    "4.20",
    "4.04",
    "3.73",
    "3.44",
    "3.17",
    "2.91",
    "2.67",
    "2.45",
    "2.25",
    "2.05",
    "1.87",
    "1.70",
    "1.54",
  ];

  const barData = [
    "1",
    "1",
    "3",
    "3",
    "3",
    "4",
    "5",
    "4",
    "3",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
  ];

  // bottom modal data top chart data

  const ModalLabels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const modalData1 = [
    "20.85",
    "20.11",
    "19.03",
    "18.06",
    "17.41",
    "16.81",
    "16.42",
    "16.08",
    "15.79",
    "15.20",
    "14.61",
    "14.03",
    "13.44",
    "12.85",
    "12.26",
    "11.67",
    "11.08",
    "10.49",
    "9.90",
    "9.31",
    "8.75",
    "8.24",
    "7.76",
    "7.31",
    "6.89",
    "6.50",
    "6.14",
    "5.80",
    "5.48",
    "5.18",
    "4.91",
    "4.65",
    "4.40",
    "4.18",
    "3.97",
    "3.77",
    "3.59",
  ];

  const modalData2 = [
    "18.35",
    "17.61",
    "16.53",
    "15.56",
    "14.91",
    "14.31",
    "13.92",
    "13.58",
    "13.29",
    "12.70",
    "12.11",
    "11.53",
    "10.94",
    "10.35",
    "9.76",
    "9.17",
    "8.58",
    "7.99",
    "7.40",
    "6.81",
    "6.35",
    "5.94",
    "5.56",
    "5.21",
    "4.89",
    "4.70",
    "4.34",
    "4.00",
    "3.68",
    "3.38",
    "3.11",
    "2.85",
    "2.60",
    "2.38",
    "2.17",
    "1.97",
    "1.79",
  ];

  const modalData3 = [
    "15.66",
    "15.02",
    "14.08",
    "13.25",
    "12.70",
    "12.19",
    "11.86",
    "11.57",
    "11.32",
    "10.82",
    "10.32",
    "9.82",
    "9.32",
    "8.82",
    "8.32",
    "7.82",
    "7.32",
    "6.82",
    "6.32",
    "5.82",
    "5.44",
    "5.09",
    "4.77",
    "4.47",
    "4.20",
    "4.04",
    "3.73",
    "3.44",
    "3.17",
    "2.91",
    "2.67",
    "2.45",
    "2.25",
    "2.05",
    "1.87",
    "1.70",
    "1.54",
  ];

  const modalbBarData = [
    "1",
    "1",
    "3",
    "3",
    "3",
    "4",
    "5",
    "4",
    "3",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
  ];

  // prepering data for chart

  const lineDataset1 = {
    label: "пластовое давление",
    data: data1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Забойное давление",
    data: data2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const lineDataset3 = {
    label: "Устевое давление",
    data: data3,
    backgroundColor: "rgb(128, 100, 162)",
    borderColor: "rgb(128, 100, 162)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "число скважин",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  // bottim for modal top for chart

  const modalLineDataset1 = {
    label: "пластовое давление",
    data: modalData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const modalLineDataset2 = {
    label: "Забойное давление",
    data: modalData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const modalLineDataset3 = {
    label: "Устевое давление",
    data: modalData3,
    backgroundColor: "rgb(128, 100, 162)",
    borderColor: "rgb(128, 100, 162)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const modalBarDataset = {
    label: "число скважин",
    data: modalbBarData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, lineDataset3, barDataset],
  };

  const dataMixModalChart = {
    labels: ModalLabels,
    datasets: [
      modalLineDataset1,
      modalLineDataset2,
      modalLineDataset3,
      modalBarDataset,
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [showModal1, setShowModal1] = useState(false);

  const handleModalOpen1 = () => {
    setShowModal1(true);
  };

  const handleModalClose1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <div className="chart-container mb-5">
        <div className="d-flex align-items-center justify-content-between w-100 text-capitalize">
          <div>Давление, МПа</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Bar data={dataMixChart} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Давление, МПа</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Bar data={dataMixModalChart} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// multple line chart
export const LineChartSimple1 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const data1 = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  const barData = [
    "10000",
    "10000",
    "30000",
    "30000",
    "30000",
    "40000",
    "50000",
    "40000",
    "30000",
    "40000",
    "40000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
  ];

  // bottom modal data top chart data

  const ModalLabels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const modalData1 = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  const modalbBarData = [
    "10000",
    "10000",
    "30000",
    "30000",
    "30000",
    "40000",
    "50000",
    "40000",
    "30000",
    "40000",
    "40000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
  ];

  // prepering data for chart

  const lineDataset1 = {
    label: "накопленная добыча конденсата",
    data: data1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "n скв",
    data: barData,
    backgroundColor: "#C0504D",
    borderColor: "#C0504D",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  // bottim for modal top for chart

  const modalLineDataset1 = {
    label: "накопленная добыча конденсата",
    data: modalData1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const modalBarDataset = {
    label: "n скв",
    data: modalbBarData,
    backgroundColor: "#C0504D",
    borderColor: "#C0504D",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, barDataset],
  };

  const dataMixModalChart = {
    labels: ModalLabels,
    datasets: [modalLineDataset1, modalBarDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [showModal1, setShowModal1] = useState(false);

  const handleModalOpen1 = () => {
    setShowModal1(true);
  };

  const handleModalClose1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <div className="chart-container mb-5">
        <div className="d-flex align-items-center justify-content-between w-100 text-capitalize">
          <div>Накопленная добыча конденсата</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Bar data={dataMixChart} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Накопленная добыча конденсата</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Bar data={dataMixModalChart} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Stepped line chart
export const LineChartSimple2 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData = [
    "42000",
    "48000",
    "73000",
    "76000",
    "56340",
    "56000",
    "51000",
    "32000",
    "20000",
    "37260",
    "36720",
    "36180",
    "35690",
    "35190",
    "34760",
    "34380",
    "34050",
    "33840",
    "33720",
    "33780",
    "31730",
    "30090",
    "28900",
    "28420",
    "26270",
    "24290",
    "22450",
    "20750",
    "19180",
    "17730",
    "16390",
    "15150",
    "14010",
    "12950",
    "11970",
    "11060",
    "10230",
  ];
  const lineData1 = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  // bottom for modal top for chart

  const modalLineData = [
    "42000",
    "48000",
    "73000",
    "76000",
    "56340",
    "56000",
    "51000",
    "32000",
    "20000",
    "37260",
    "36720",
    "36180",
    "35690",
    "35190",
    "34760",
    "34380",
    "34050",
    "33840",
    "33720",
    "33780",
    "31730",
    "30090",
    "28900",
    "28420",
    "26270",
    "24290",
    "22450",
    "20750",
    "19180",
    "17730",
    "16390",
    "15150",
    "14010",
    "12950",
    "11970",
    "11060",
    "10230",
  ];
  const modalLineData1 = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  const lineDataset1 = {
    label: "годовая",
    data: lineData,
    backgroundColor: "#8064A2",
    borderColor: "#8064A2",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "накопленная",
    data: lineData1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const modalLineDataset1 = {
    label: "годовая",
    data: modalLineData,
    backgroundColor: "#8064A2",
    borderColor: "#8064A2",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const modalLineDataset2 = {
    label: "накопленная",
    data: modalLineData1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2],
  };

  const modalDataMixChart = {
    labels: labels,
    datasets: [modalLineDataset1, modalLineDataset2],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const [showModal1, setShowModal1] = useState(false);

  const handleModalOpen1 = () => {
    setShowModal1(true);
  };

  const handleModalClose1 = () => {
    setShowModal1(false);
  };

  return (
    <div>
      <div className="chart-container mb-5">
        <div className="d-flex align-items-center justify-content-between w-100 text-capitalize">
          <div>Дебит по конденсату тыс. тонн</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Line data={dataMixChart} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Дебит по конденсату тыс. тонн</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Line data={modalDataMixChart} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// excel file
export const DrawChartFromExcel = (data) => {
  console.log(data);
  if (data.data !== null) {
    const chartData = data.data;

    const labels = chartData.slice(1).map((row) => row[0].toString());

    const lineDataset1 = {
      label: chartData[0][1], //row[0].toString()
      data: chartData.slice(1).map((row) => row[1]),
      backgroundColor: "rgba(155,187,89)",
      borderColor: "rgba(155,187,89)",
      borderWidth: 2,
      fill: false,
      type: "line",
    };

    const lineDataset2 = {
      label: chartData[0][2], //row[0].toString()
      data: chartData.slice(1).map((row) => row[2]),
      backgroundColor: "rgba(128,100,162)",
      borderColor: "rgba(128,100,162)",
      borderWidth: 2,
      fill: false,
      type: "line",
    };

    const barDataset = {
      label: chartData[0][3],
      data: chartData.slice(1).map((row) => row[3]),
      backgroundColor: "rgb(192,80,77)",
      borderColor: "rgb(192,80,77)",
      borderWidth: 1,
      barThickness: 10, // Adjust the width of the bars here
      type: "bar",
    };

    const barDataset1 = {
      label: chartData[0][4],
      data: chartData.slice(1).map((row) => row[4]),
      backgroundColor: "rgb(79,129,189)",
      borderColor: "rgb(79,129,189)",
      borderWidth: 1,
      barThickness: 10, // Adjust the width of the bars here
      type: "bar",
    };

    const dataMixedChart = {
      labels: labels,
      datasets: [lineDataset1, lineDataset2, barDataset, barDataset1],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return (
      <div className="excelArray">
        <Bar data={dataMixedChart} options={options} />
      </div>
    );
  }
  return <div>Excel fayl yuklang</div>;
};

// top not used yet !^^^!
//  statisc excel  LineChart Chart

export const ExampleSChart1 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const data1 = [
    "20.85",
    "20.11",
    "19.03",
    "18.06",
    "17.41",
    "16.81",
    "16.42",
    "16.08",
    "15.79",
    "15.20",
    "14.61",
    "14.03",
    "13.44",
    "12.85",
    "12.26",
    "11.67",
    "11.08",
    "10.49",
    "9.90",
    "9.31",
    "8.75",
    "8.24",
    "7.76",
    "7.31",
    "6.89",
    "6.50",
    "6.14",
    "5.80",
    "5.48",
    "5.18",
    "4.91",
    "4.65",
    "4.40",
    "4.18",
    "3.97",
    "3.77",
    "3.59",
  ];

  const data2 = [
    "18.35",
    "17.61",
    "16.53",
    "15.56",
    "14.91",
    "14.31",
    "13.92",
    "13.58",
    "13.29",
    "12.70",
    "12.11",
    "11.53",
    "10.94",
    "10.35",
    "9.76",
    "9.17",
    "8.58",
    "7.99",
    "7.40",
    "6.81",
    "6.35",
    "5.94",
    "5.56",
    "5.21",
    "4.89",
    "4.70",
    "4.34",
    "4.00",
    "3.68",
    "3.38",
    "3.11",
    "2.85",
    "2.60",
    "2.38",
    "2.17",
    "1.97",
    "1.79",
  ];

  const data3 = [
    "15.66",
    "15.02",
    "14.08",
    "13.25",
    "12.70",
    "12.19",
    "11.86",
    "11.57",
    "11.32",
    "10.82",
    "10.32",
    "9.82",
    "9.32",
    "8.82",
    "8.32",
    "7.82",
    "7.32",
    "6.82",
    "6.32",
    "5.82",
    "5.44",
    "5.09",
    "4.77",
    "4.47",
    "4.20",
    "4.04",
    "3.73",
    "3.44",
    "3.17",
    "2.91",
    "2.67",
    "2.45",
    "2.25",
    "2.05",
    "1.87",
    "1.70",
    "1.54",
  ];

  const barData = [
    "1",
    "1",
    "3",
    "3",
    "3",
    "4",
    "5",
    "4",
    "3",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
  ];

  const lineDataset1 = {
    label: "пластовое давление",
    data: data1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Забойное давление",
    data: data2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const lineDataset3 = {
    label: "Устевое давление",
    data: data3,
    backgroundColor: "rgb(128, 100, 162)",
    borderColor: "rgb(128, 100, 162)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "число скважин",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, lineDataset3, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};

export const ExampleSChart2 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  const barData = [
    "10000",
    "10000",
    "30000",
    "30000",
    "30000",
    "40000",
    "50000",
    "40000",
    "30000",
    "40000",
    "40000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
    "50000",
  ];

  const lineDataset1 = {
    label: "накопленная добыча конденсата",
    data: lineData,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "n скв",
    data: barData,
    backgroundColor: "#C0504D",
    borderColor: "#C0504D",
    borderWidth: 1,
    barThickness: 5, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};

export const ExampleSChart3 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData = [
    "42000",
    "48000",
    "73000",
    "76000",
    "56340",
    "56000",
    "51000",
    "32000",
    "20000",
    "37260",
    "36720",
    "36180",
    "35690",
    "35190",
    "34760",
    "34380",
    "34050",
    "33840",
    "33720",
    "33780",
    "31730",
    "30090",
    "28900",
    "28420",
    "26270",
    "24290",
    "22450",
    "20750",
    "19180",
    "17730",
    "16390",
    "15150",
    "14010",
    "12950",
    "11970",
    "11060",
    "10230",
  ];
  const lineData1 = [
    "4200",
    "9000",
    "16300",
    "23900",
    "29534",
    "35134",
    "40234",
    "43434",
    "45434",
    "49160",
    "52832",
    "56450",
    "60019",
    "63538",
    "67013",
    "70451",
    "73856",
    "77240",
    "80612",
    "83990",
    "87163",
    "90172",
    "93062",
    "95904",
    "98531",
    "100960",
    "103205",
    "105281",
    "107199",
    "108972",
    "110612",
    "112127",
    "113528",
    "114822",
    "116019",
    "117125",
    "118148",
  ];

  const lineDataset1 = {
    label: "годовая",
    data: lineData,
    backgroundColor: "#8064A2",
    borderColor: "#8064A2",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "накопленная",
    data: lineData1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Line data={dataMixChart} options={options} />
    </div>
  );
};

export const ExampleSChart4 = () => {
  const labels = ["0", "20", "40", "60", "80", "100"];

  const lineData = [
    "2300.05",
    "4000.55",
    "5500.41",
    "6800.57",
    "8000.53",
    "9100.57",
  ];
  const lineData1 = ["1000", "2000", "3000", "4000", "5000", "6000"];

  const lineDataset1 = {
    label: "a",
    data: lineData,
    backgroundColor: "#8064A2",
    borderColor: "#8064A2",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "b",
    data: lineData1,
    backgroundColor: "#F79646",
    borderColor: "#F79646",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Line data={dataMixChart} options={options} />
    </div>
  );
};

export const ExampleSChart5 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];
  const lineData1 = [
    "10.32",
    "9.82",
    "9.32",
    "8.82",
    "8.32",
    "7.82",
    "7.32",
    "6.82",
    "6.32",
    "5.82",
    "5.44",
    "5.09",
    "4.77",
    "4.47",
    "4.20",
    "4.04",
    "3.73",
    "3.44",
    "3.17",
    "2.91",
    "2.67",
    "2.45",
    "2.25",
    "2.05",
    "1.87",
    "1.70",
    "1.54",
  ];

  const lineData2 = [
    "7.81",
    "6.54",
    "5.54",
    "5.10",
    "4.63",
    "4.09",
    "3.73",
    "3.65",
    "3.28",
    "2.81",
    "2.75",
    "2.68",
    "2.61",
    "2.54",
    "2.48",
    "2.41",
    "2.35",
    "2.29",
    "2.24",
    "2.18",
    "2.13",
    "2.07",
    "2.02",
    "1.96",
    "1.91",
    "1.86",
    "1.81",
  ];

  const barData = [
    "4",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
  ];

  const lineDataset1 = {
    label: "Устевое давление расчетный, МПа",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Устевое давление проектный, МПа",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "top",
      },
      y: {
        beginAtZero: true,
        position: "right",
        ticks: {
          align: "end",
        },
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart6 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData1 = [
    "14.61",
    "14.03",
    "13.44",
    "12.85",
    "12.26",
    "11.67",
    "11.08",
    "10.49",
    "9.90",
    "9.31",
    "8.75",
    "8.24",
    "7.76",
    "7.31",
    "6.89",
    "6.50",
    "6.14",
    "5.80",
    "5.48",
    "5.18",
    "4.91",
    "4.65",
    "4.40",
    "4.18",
    "3.97",
    "3.77",
    "3.59",
  ];
  const lineData2 = [
    "13.17",
    "13.03",
    "12.38",
    "11.76",
    "11.13",
    "10.76",
    "10.05",
    "9.92",
    "9.29",
    "9.06",
    "8.85",
    "8.64",
    "8.43",
    "8.24",
    "8.04",
    "7.85",
    "7.66",
    "7.48",
    "7.31",
    "7.13",
    "6.96",
    "6.80",
    "6.63",
    "6.47",
    "6.32",
    "6.17",
    "6.02",
  ];

  const barData = [
    "4",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
    "5",
  ];

  const lineDataset1 = {
    label: "Пластовое давление расчетный, МПа",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Пластовое давление проектный, МПа",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин расчетный",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart7 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData1 = [
    "1749",
    "1899",
    "2049",
    "2199",
    "2349",
    "2499",
    "2649",
    "2799",
    "2949",
    "3099",
    "3239",
    "3370",
    "3492",
    "3606",
    "3712",
    "3811",
    "3904",
    "3991",
    "4072",
    "4147",
    "4218",
    "4284",
    "4345",
    "4403",
    "4456",
    "4506",
    "4553",
  ];
  const lineData2 = [
    "1600",
    "1685",
    "1775",
    "1865",
    "1955",
    "2045",
    "2129",
    "2212",
    "2293",
    "2372",
    "2449",
    "2524",
    "2597",
    "2668",
    "2738",
    "2805",
    "2871",
    "2935",
    "2998",
    "3059",
    "3119",
    "3177",
    "3233",
    "3288",
    "3341",
    "3393",
    "3443",
  ];

  const barData = [
    "1500",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
    "1600",
  ];

  const lineDataset1 = {
    label: "Накопленная добыча газа расчетный, млн. м3",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Накопленная добыча газа проектный, млн. м3",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин расчетный",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart10 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData1 = [
    "32",
    "35",
    "37",
    "40",
    "43",
    "46",
    "48",
    "51",
    "54",
    "57",
    "59",
    "62",
    "64",
    "66",
    "68",
    "70",
    "71",
    "73",
    "75",
    "76",
    "77",
    "78",
    "80",
    "81",
    "82",
    "82",
    "83",
  ];

  const lineData2 = [
    "29",
    "31",
    "33",
    "34",
    "36",
    "37",
    "39",
    "41",
    "42",
    "43",
    "45",
    "46",
    "48",
    "49",
    "50",
    "51",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
  ];

  const barData = [
    "24",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
    "30",
  ];

  const lineDataset1 = {
    label: "Накопленная добыча газа расчетный, %",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Накопленная добыча газа проектный, %",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин расчетный",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart8 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData1 = [
    "150",
    "150",
    "150",
    "150",
    "150",
    "150",
    "150",
    "150",
    "150",
    "150",
    "140",
    "131",
    "122",
    "114",
    "106",
    "99",
    "93",
    "87",
    "81",
    "76",
    "71",
    "66",
    "61",
    "57",
    "54",
    "50",
    "47",
  ];
  const lineData2 = [
    "75",
    "85",
    "90",
    "90",
    "90",
    "90",
    "84",
    "83",
    "81",
    "79",
    "77",
    "75",
    "73",
    "71",
    "69",
    "68",
    "66",
    "64",
    "63",
    "61",
    "59",
    "58",
    "56",
    "55",
    "53",
    "52",
    "50",
  ];

  const barData = [
    "40",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
    "50",
  ];

  const lineDataset1 = {
    label: "Годовая добыча газа расчетный, млн. м3  ",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Годовая добыча газа проектный, млн. м3",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин расчетный",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart9 = () => {
  const labels = [
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
    "2037",
    "2038",
    "2039",
    "2040",
  ];

  const lineData1 = [
    "0.217",
    "0.246",
    "0.261",
    "0.261",
    "0.261",
    "0.261",
    "0.243",
    "0.241",
    "0.235",
    "0.229",
    "0.223",
    "0.217",
    "0.212",
    "0.207",
    "0.201",
    "0.196",
    "0.191",
    "0.186",
    "0.182",
    "0.177",
    "0.172",
    "0.168",
    "0.162",
    "0.16",
    "0.154",
    "0.151",
    "0.145",
  ];
  const lineData2 = [
    "0.150",
    "0.144",
    "0.137",
    "0.131",
    "0.124",
    "0.118",
    "0.111",
    "0.105",
    "0.098",
    "0.092",
    "0.086",
    "0.080",
    "0.075",
    "0.070",
    "0.065",
    "0.061",
    "0.057",
    "0.053",
    "0.050",
    "0.046",
    "0.043",
    "0.040",
    "0.038",
    "0.035",
    "0.033",
    "0.031",
    "0.029",
  ];

  const barData = [
    "0.08",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
    "0.1",
  ];

  const lineDataset1 = {
    label: "Годовая добыча газа расчетный, млн. м3  ",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Годовая добыча газа проектный, млн. м3",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин расчетный",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 10, // Adjust the width of the bars here
    type: "bar",
  };

  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart11 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "524",
    "514",
    "489",
    "326",
    "215",
    "118",
    "79",
    "74",
    "68",
    "157",
  ];

  const lineData2 = [
    "22,2",
    "220",
    "315",
    "352",
    "405",
    "163",
    "163",
    "163",
    "163",
    "217",
  ];

  const barData = [
    "40",
    "40",
    "140",
    "140",
    "140",
    "170",
    "200",
    "170",
    "140",
    "170",
  ];
  const barData1 = [
    "",
    "40",
    "40",
    "40",
    "40",
    "170",
    "170",
    "170",
    "170",
    "170",
  ];

  const lineDataset1 = {
    label: "Среднесуточный дебит скважин тыс.м3/сут фактический",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Среднесуточный дебит скважин тыс.м3/сут проектный",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart12 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "16.1",
    "15.4",
    "14.5",
    "13.7",
    "13.1",
    "12.6",
    "12.3",
    "12.0",
    "11.8",
    "10.8",
  ];

  const lineData2 = [
    "2,5",
    "15.7",
    "14.1",
    "13.1",
    "12.1",
    "12.0",
    "11.8",
    "11.0",
    "10.1",
    "8.8",
  ];

  const barData = ["1", "1", "3", "3", "3", "4", "5", "4", "3", "4"];
  const barData1 = ["", "1", "1", "1", "1", "4", "4", "4", "4", "4"];

  const lineDataset1 = {
    label: "Устевое давление фактический, МПа",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Устевое давление проектный, МПа",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart13 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "161",
    "349",
    "625",
    "872",
    "1036",
    "1190",
    "1288",
    "1375",
    "1449",
    "1599",
  ];

  const lineData2 = [
    "1,2",
    "140",
    "372",
    "604",
    "836",
    "981",
    "1126",
    "1271",
    "1416",
    "1526",
  ];

  const barData = [
    "100",
    "60",
    "350",
    "350",
    "350",
    "440",
    "600",
    "440",
    "350",
    "440",
  ];
  const barData1 = [
    "",
    "100",
    "100",
    "100",
    "100",
    "440",
    "440",
    "440",
    "440",
    "440",
  ];

  const lineDataset1 = {
    label: "Накопленная добыча газа фактический, млн. м3",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Накопленная добыча газа проектный, млн. м3",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart14 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "161",
    "188",
    "276",
    "247",
    "164",
    "154",
    "98",
    "87",
    "74",
    "150",
  ];

  const lineData2 = [
    "2,2",
    "140",
    "232",
    "232",
    "232",
    "145",
    "145",
    "145",
    "145",
    "110",
  ];

  const barData = ["40", "40", "60", "60", "60", "70", "100", "70", "60", "70"];
  const barData1 = ["", "40", "40", "40", "40", "70", "70", "70", "70", "70"];

  const lineDataset1 = {
    label: "Годовая добыча газа фактический, млн. м3",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Годовая добыча газа пректный, млн. м3",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart15 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "23,5",
    "22.95",
    "21.08",
    "19.81",
    "18.53",
    "16.68",
    "15.81",
    "14.96",
    "14.12",
    "13.8",
  ];

  const lineData2 = [
    "20.85",
    "20.11",
    "19.03",
    "18.06",
    "17.41",
    "16.81",
    "16.42",
    "16.08",
    "15.79",
    "15.2",
  ];

  const barData = ["2", "2", "5", "5", "5", "7", "9", "7", "5", "7"];
  const barData1 = ["", "2", "2", "2", "2", "7", "7", "7", "7", "7"];

  const lineDataset1 = {
    label: "Пластовое давление проектный, МПа",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Пластовое давление фактический, МПа",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart16 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "4.2",
    "9",
    "16.3",
    "23.9",
    "29.5",
    "35.1",
    "40.2",
    "43.4",
    "45.4",
    "49.1",
  ];

  const lineData2 = [
    "4,11",
    "4.4",
    "11.7",
    "18.8",
    "25.7",
    "31.5",
    "37.2",
    "42.8",
    "48.3",
    "53.7",
  ];

  const barData = ["4", "4", "12", "12", "12", "17", "20", "17", "12", "17"];
  const barData1 = ["", "4", "4", "4", "4", "17", "17", "17", "17", "17"];

  const lineDataset1 = {
    label: "Накопленная добыча конденсата фактический, тыс. т.",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Накопленная добыча конденсата проектный, тыс. т.",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};
export const ExampleSChart17 = () => {
  const labels = [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
  ];

  const lineData1 = [
    "4.2",
    "4.8",
    "7.3",
    "7.6",
    "5.6",
    "5.6",
    "5.1",
    "3.2",
    "2",
    "3.7",
  ];

  const lineData2 = [];

  const barData = ["4", "4", "12", "12", "12", "17", "20", "17", "12", "17"];
  const barData1 = ["", "4", "4", "4", "4", "17", "17", "17", "17", "17"];

  const lineDataset1 = {
    label: "Накопленная добыча конденсата фактический, тыс. т.",
    data: lineData1,
    backgroundColor: "rgb(79, 129, 189)",
    borderColor: "rgb(79, 129, 189)",
    borderWidth: 2,
    fill: false,
    type: "line",
  };

  const lineDataset2 = {
    label: "Накопленная добыча конденсата проектный, тыс. т.",
    data: lineData2,
    backgroundColor: "rgb(192, 80, 77)",
    borderColor: "rgb(192, 80, 77)",
    borderWidth: 2,
    tension: 0.1,
    fill: false,
    type: "line",
  };

  const barDataset = {
    label: "Фонд скважин фактический",
    data: barData,
    backgroundColor: "rgb(155, 187, 89)",
    borderColor: "rgb(155, 187, 89)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };

  const barDataset1 = {
    label: "Фонд скважин проектный",
    data: barData1,
    backgroundColor: "rgb(0, 0, 255)",
    borderColor: "rgb(0, 0, 255)",
    borderWidth: 1,
    barThickness: 20, // Adjust the width of the bars here
    type: "bar",
  };
  const dataMixChart = {
    labels: labels,
    datasets: [lineDataset1, lineDataset2, barDataset1, barDataset],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        beginAtZero: true,
        position: "left",
        ticks: {
          align: "start",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="excelArray">
      <Bar data={dataMixChart} options={options} />
    </div>
  );
};

//  for right sidebar static charts

// admin Chart

