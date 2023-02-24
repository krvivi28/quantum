import Form from "react-bootstrap/Form";
import Button2 from "@mui/material/Button";
import icon from "../../common/assets/images/l2.png";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
function Home() {
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
      <div className="out">
        <div className="container main">
          <div className="top">
            <h1 className="text-white">SIGN IN</h1>
            <div className="img">
              <img src={icon} alt="" />
            </div>
          </div>
          <div className="down">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">
                  Email address <i class="bi bi-person-circle"></i>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <Form.Text className="text-info">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">
                  Password <i class="bi bi-lock"></i>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="text-white"
                  type="checkbox"
                  label="Check me out"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <LinkContainer to="/apply">
                  <Nav.Link>
                    {" "}
                    <p className="text-info">
                      {" "}
                      Don't have account? Register Now
                    </p>
                  </Nav.Link>
                </LinkContainer>
              </Form.Group>
              <div className="logbtn">
                <Button2
                  onClick={submitdata}
                  color="success"
                  size="large"
                  variant="contained"
                >
                  Login
                </Button2>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
