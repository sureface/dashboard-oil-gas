import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLog } from "../UserLog";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signUpData, setSignUpData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("SIGNUP");
    const jsonData = JSON.parse(data);
    if (jsonData && Object.keys(jsonData).length > 0) {
      setSignUpData(jsonData);
      setLogin(jsonData.userName);
      setPassword(jsonData.password);
    } else {
      setSignUpData([]);
      setLogin("");
      setPassword("");
    }
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(signUpData);
    if (login === signUpData.userName && password === signUpData.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
      setError("");
      setLogin("");
      setPassword("");
    } else if (login === userLog.login && password === userLog.password) {
      localStorage.setItem("company", "true");
      navigate("/");
      setError("");
      setLogin("");
      setPassword("");
    } else {
      setError("login yoki parol noto'g'ri !");
    }
  };

  return (
    <>
      <section
        className="h-screen gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h1>Neft Gaz</h1>
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>

                      <form onSubmit={SubmitHandler}>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="User Name"
                            required
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                          />
                          <div className="text-danger">
                            {error ? error : ""}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <div className="text-danger">
                            {error ? error : ""}
                          </div>
                        </div>

                        <div className="pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                          >
                            Kirish
                          </button>
                        </div>
                      </form>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Akountingiz yo'qmi ?</p>
                        <Link
                          to="/signup"
                          className="btn btn-primary gradient-custom-2 text-white"
                        >
                          Yangi Yaratish
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center b-t-b-radius gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
