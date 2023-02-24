import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import icon from "../../common/assets/images/login1.png";
import "./apply.css";
import Button2 from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    const { name, email, dob, password, cpassword } = user;
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        dob,
        password,
        cpassword,
      }),
    });
    // const data = await res.json();
    if (res.status === 200) {
      window.alert(
        `Hello, ${user.name}! Congrats have you registered successfully!`
      );
      navigate("/users");
    } else {
      window.alert("invalid details");
    }
  };

  return (
    <>
      <div className="out">
        <div className="container main2">
          <div className="top1">
            <h1 className="text-white">SIGN UP</h1>
            <div className="img imgbox">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="down2">
            <Form>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Enter email"
                />
                <Form.Text className="text-info">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={user.name}
                  onChange={handleInput}
                  placeholder="Enter your name"
                />
                <Form.Text className="text-info">Full Name</Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">DOB:</Form.Label>
                <Form.Control
                  name="dob"
                  type="date"
                  value={user.dob}
                  onChange={handleInput}
                  placeholder="Enter your date of birth"
                />
                <Form.Text className="text-info">DOB</Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="enter your password"
                />
                <Form.Text className="text-info">
                  use a strong password
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <Form.Control
                  name="cpassword"
                  type="password"
                  value={user.cpassword}
                  onChange={handleInput}
                  placeholder="confirm your password"
                />
                <Form.Text className="text-info">
                  repeat your password
                </Form.Text>
              </Form.Group>
              <div className="logbtn">
                <Button2
                  onClick={submitdata}
                  color="success"
                  size="large"
                  variant="contained"
                >
                  Sign Up
                </Button2>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Apply;
