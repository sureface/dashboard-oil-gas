import React, { useState } from "react";
import Layout from "../layout/Layout";

const UserInfo = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");
  const [input10, setInput10] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      input9,
      input10,
    };

    setResult((prevResult) => [...prevResult, data]);

    setSubmitted(true);

    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setInput5("");
    setInput6("");
    setInput7("");
    setInput8("");
    setInput9("");
    setInput10("");
  };

  const inputPlaceholders = {
    input1: "First Name",
    input2: "Last Name",
    input3: "Middle Name",
    input4: "Passport Seria",
    input5: "Passport SHJSHIR (PNFL)",
    input6: "Country",
    input7: "Region",
    input8: "City",
    input9: "Zip Code",
    input10: "All Information Right ?",
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-3">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput1(e.target.value)}
                  value={input1}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput2(e.target.value)}
                  value={input2}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middel Name"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput3(e.target.value)}
                  value={input3}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Passport Seria"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput4(e.target.value)}
                  value={input4}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Passport SHJSHIR (PNFL)"
                  className=" ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput5(e.target.value)}
                  value={input5}
                  required
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput6(e.target.value)}
                  value={input6}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Region"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput7(e.target.value)}
                  value={input7}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="City"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput8(e.target.value)}
                  value={input8}
                  required
                />
                <input
                  type="number"
                  class="form-control"
                  placeholder="Zip Code"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput9(e.target.value)}
                  value={input9}
                  required
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="All Information Right ?"
                  className=" ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput10(e.target.value)}
                  value={input10}
                  required
                />
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary ps-5 pe-5 pt-2 pb-2 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {submitted && (
          <div className="row mt-3">
            <div className="col">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    {Object.keys(inputPlaceholders).map((key) => (
                      <th key={key}>{inputPlaceholders[key]}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {result.map((data, index) => (
                    <tr key={index}>
                      {Object.keys(data).map((key) => (
                        <td key={key}>{data[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserInfo;
