import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  superAdmin,
  superAdminWeb,
  admin,
  adminWeb,
  workers,
} from "../UserLog";
import {
  loginWorkersReducer,
  loginCompanyReducer,
  loginCompanyWebReducer,
  loginSuperUserReducer,
  loginSuperUserWebReducer,
} from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import gisBg4 from "../assets/bgImg/gis-bg4.png";
import Logo from "../assets/img/logoBlue.png";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (login === superAdmin.login && password === superAdmin.password) {
      const data = {
        login,
        password,
      };
      dispatch(loginSuperUserReducer(data));
      navigate("/");
      setError(false);
      setLogin("");
      setPassword("");
    } else if (
      login === superAdminWeb.login &&
      password === superAdminWeb.password
    ) {
      const data = {
        login,
        password,
      };
      dispatch(loginSuperUserWebReducer(data));
      navigate("/");
      setError(false);
      setLogin("");
      setPassword("");
    } else if (login === admin.login && password === admin.password) {
      const data = {
        login,
        password,
      };
      dispatch(loginCompanyReducer(data));
      navigate("/");
      setError(false);
      setLogin("");
      setPassword("");
    } else if (login === adminWeb.login && password === adminWeb.password) {
      const data = {
        login,
        password,
      };
      dispatch(loginCompanyWebReducer(data));
      navigate("/");
      setError(false);
      setLogin("");
      setPassword("");
    } else if (login === workers.login && password === workers.password) {
      const data = {
        login,
        password,
      };
      dispatch(loginWorkersReducer(data));
      navigate("/");
      setError(false);
      setLogin("");
      setPassword("");
    } else {
      setError(true);
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
                        <img
                          src={Logo}
                          alt="err"
                          style={{ width: "50px", marginBottom: "5px" }}
                        />
                        <h2 className="text-main mb-2">Oʻzbekneftgaz</h2>
                        <h5 className="login_subname mt-1 mb-3 pb-1 text-main">
                          Tizimga xush kelibsiz
                        </h5>
                      </div>

                      <form onSubmit={SubmitHandler}>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Foydalanuvchining ismi"
                            required
                            onChange={(e) => setLogin(e.target.value)}
                            value={login}
                          />
                          <div className="text-danger">
                            {error ? "login yoki parol noto'g'ri !" : ""}
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Paro'l"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <div className="text-danger">
                            {error ? "login yoki parol noto'g'ri !" : ""}
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
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center b-t-b-radius gradient-custom-2 position-relative">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 z-1">
                      <h3 className="mb-3 text-center">
                        Bizning asosiy maqsadimiz!
                      </h3>
                      <p className="small mb-0 login_description">
                        Neft va gaz sanoatiga zamonaviy raqamli
                        texnologiyalarini joriy etish orqali, raqamli
                        boshqaruvni yo'lga qo'yish, neft va gaz qazib olish
                        samaradorligini oshirish, masofiy boshqaruv tizimini
                        rivojlanitirish va ishlab chiqarish samaradoligini
                        yuqori darajada ko'tarishdan iborat.
                      </p>
                    </div>
                    <img
                      src={gisBg4}
                      alt="err"
                      className="position-absolute w-100 h-200px z-0 bottom-0 start-50 translate-middle-x object-fit-contain"
                    />
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
