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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
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
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput2(e.target.value)}
                  value={input2}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Middel Name"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput3(e.target.value)}
                  value={input3}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Passport Seria"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput4(e.target.value)}
                  value={input4}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Passport SHJSHIR (PNFL)"
                  className=" ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput5(e.target.value)}
                  value={input5}
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
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Region"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput7(e.target.value)}
                  value={input7}
                />
                <input
                  type="number"
                  class="form-control"
                  placeholder="City"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput8(e.target.value)}
                  value={input8}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Zip Code"
                  className="mb-3 ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput9(e.target.value)}
                  value={input9}
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="All Information Right ?"
                  className=" ps-3 pe-3 pt-2 pb-2 w-100"
                  onChange={(e) => setInput10(e.target.value)}
                  value={input10}
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
      </div>
    </Layout>
  );
};

export default UserInfo;
