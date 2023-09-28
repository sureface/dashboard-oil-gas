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
} from "chart.js";
import { useState } from "react";
import { Line, Bar, Chart } from "react-chartjs-2";

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
  BarController
);

export const LineChartSimple = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 200, 220, 250],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Sales",
        data: [100, 120, 140, 190, 180, 200],
        borderColor: "blue",
        fill: false,
      },
    ],
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [120, 150, 180, 200, 220, 250],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Sales",
        data: [100, 120, 140, 190, 180, 200],
        borderColor: "blue",
        fill: false,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          <div>chart description</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Chart title</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Line data={data1} options={options} />
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
export const MultpleLineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Expenses",
        data: [5, 10, 2, 8, 1, 6],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Expenses",
        data: [5, 10, 2, 8, 1, 6],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          <div>chart description</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Chart title</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Line data={data1} options={options} />
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
export const SteppedLineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0,
      },
    ],
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        borderColor: "rgb(75, 192, 192)",
        tension: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    stepped: true,
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
          <div>chart description</div>
          <div onClick={handleModalOpen1} className="cursor-pointer">
            <FontAwesomeIcon icon={faExpand} />
          </div>
        </div>
        <Line data={data} options={options} />
      </div>

      {showModal1 && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content gis-chart-lg">
              <div className="modal-header">
                <h5 className="modal-title">Chart title</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose1}
                ></button>
              </div>
              <div className="modal-body">
                <div className="chart-container-lg">
                  <Line data={data1} options={options} />
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
  if (data.data !== null) {
    const chartData = data.data;

    function removeEmptyArrays(array) {
      return array.filter((item) => {
        if (Array.isArray(item)) {
          const filteredItem = removeEmptyArrays(item);
          return filteredItem.length > 0;
        }
        return Boolean(item);
      });
    }

    const cleanArray = removeEmptyArrays(chartData);

    const cleanArrayL2 = [];

    for (let i = 0; i < cleanArray.length; i++) {
      let data = cleanArray[i].filter(Boolean);
      cleanArrayL2.push(data);
    }

    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const labels = cleanArrayL2.slice(1).map((row) => row[0].toString());

    const barDataset = {
      label: "Bar Chart", //row[0].toString()
      data: cleanArrayL2.slice(1).map((row) => row[1]),
      backgroundColor: getRandomColor(),
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      barThickness: 20, // Adjust the width of the bars here
      type: "bar",
    };

    const lineDataset = {
      label: "Line Chart", //row[0].toString()
      data: cleanArrayL2.slice(1).map((row) => row[2]),
      backgroundColor: getRandomColor(),
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: false,
      type: "line",
    };

    const dataMixChart = {
      labels: labels,
      datasets: [barDataset, lineDataset],
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
  }
  return <div>Excel fayl yuklang</div>;
};

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
    barThickness: 10, // Adjust the width of the bars here
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
    barThickness: 10, // Adjust the width of the bars here
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
