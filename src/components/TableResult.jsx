import React from "react";

const TableResult = ({ labels, values, time }) => {
  return (
    <div className="table-responsive mb-5">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            {labels.map((label, index) => (
              <th key={index} className="gis-table__lable">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    textAlign: "center",
                    lineHeight: time ? "30px" : "217px",
                    fontSize: "18px",
                  }}
                >
                  {typeof value === "number" ? (
                    value
                  ) : (
                    <img
                      src={value}
                      alt="err"
                      style={{ width: "200px", height: "200px" }}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableResult;
