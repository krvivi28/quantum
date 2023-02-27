import React from "react";
import "./test.css";
import logo from "../src/common/assets/images/l2.png";
// import w2 from "../src/common/assets/images/bg.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
export default function Test() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // const data = await res.json();
    if (res.status === 200) {
      window.alert(`login successfull!`);
      navigate("/users");
    } else {
      window.alert("invalid credentials");
    }
  };
  return (
    <>
      <div className="maincon">
        <div className="box">
          <div
            style={{
              //   backgroundImage: `url(${w2})`,
              backgroundImage: `url("https://images.unsplash.com/photo-1633259584604-afdc243122ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
            }}
            className="box1"
          >
            <span className="login mx-auto px-5 py-2">SIGN IN</span>
            <div id="head" className="lbtn"></div>
            <div className="imgbox">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="box2">
            <div className="input form-row p-3">
              <div className="col-auto">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="bi bi-person-fill"></i>
                    </div>
                  </div>
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="bi bi-lock-fill"></i>
                    </div>
                  </div>
                  <input
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    type="password"
                    className="form-control"
                    id="inlineFormInputGroup"
                    placeholder="password"
                  />
                </div>
              </div>
            </div>

            {/* links */}
            <div className="links">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <span className="linkc">Remember me</span>
              </div>
              <LinkContainer to="/apply">
                <Nav.Link>
                  {" "}
                  <span className="linkc">Forget Password</span>
                </Nav.Link>
              </LinkContainer>
            </div>

            {/* links */}
            <div className="lbtn">
              <button onClick={submitdata} class="btnl btn px-5" type="button">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
