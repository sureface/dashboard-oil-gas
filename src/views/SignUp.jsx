import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [notMatch, setNotMatch] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = {
        fullName,
        userName,
        email,
        number,
        password,
        repeatPassword,
      };

      localStorage.setItem("SIGNUP", JSON.stringify(data));
      navigate("/login");
    } else {
      setNotMatch(true);
    }
    setFullName("");
    setUserName("");
    setNumber("");
    setPassword("");
    setRepeatPassword("");
    setEmail("");
  };

  return (
    <section
      className="h-screen gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container  h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body mx-md-4">
                    <div className="text-center">
                      <h1>Neft Gaz</h1>
                      <h4 className="mt-1 mb-5 ">We are The Lotus Team</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Isim Familya"
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Foydalanuvchi NikName"
                          onChange={(e) => setUserName(e.target.value)}
                          value={userName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          className="form-control"
                          required
                          placeholder="Phone Number"
                          onChange={(e) => setNumber(e.target.value)}
                          value={number}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          required
                          placeholder="Paro'l"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <div className="text-danger">
                          {notMatch ? "Paro'l to'g'ri kelmadi !" : ""}
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control"
                          required
                          placeholder="Paro'lni qaytadan kiriting"
                          onChange={(e) => setRepeatPassword(e.target.value)}
                          value={repeatPassword}
                        />
                        <div className="text-danger">
                          {notMatch ? "Paro'l to'g'ri kelmadi !" : ""}
                        </div>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-around">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ms-auto"
                          type="submit"
                        >
                          Akount Yaratish
                        </button>
                      </div>
                    </form>

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <Link
                        to="/login"
                        className="btn btn-primary gradient-custom-2 text-white"
                      >
                        Kirish
                      </Link>
                      <p className="mb-0 ms-3">Accountingiz bormi ?</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 b-t-b-radius">
                  <div className="text-white px-3 py-4  mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud lorem50
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;