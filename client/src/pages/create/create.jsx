import React, { useEffect } from "react";
import Tabledark from "../../common/components/table/table";
import { useState } from "react";
import Table from "react-bootstrap/Table";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
const Create = () => {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    allusers();
  }, []);
  const allusers = async () => {
    try {
      const res = await axios.get("/api/allusers", {
        withCredentials: true,
      });
      setData(res.data);
      if (res.status !== 200) {
        // window.alert("please login to access all users details");
      }
    } catch (error) {
      setShow(true);
    }
  };

  console.log(data);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Authentication required</Alert.Heading>
        <p>Login to access all users details</p>
        <Link to="/">
          <button className="btn btn-sm btn-outline-danger">Login</button>
        </Link>
      </Alert>
      <div className="container my-5">
        <h1 className={"text-success"}>Applicants</h1>

        <Table responsive="sm" striped bordered hover variant="">
          <thead>
            <tr>
              <th>#</th>
              <th>Candidate Name</th>
              <th>Email</th>
              <th>D.O.B</th>
              <th>Date Created</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, ind) => {
              // return <Product key={data.id} img={data.img} name={data.name} about={data.about} id={data.id}/>
              return (
                <Tabledark
                  key={data._id}
                  ind={ind + 1}
                  name={data.name}
                  email={data.email}
                  dob={data.dob}
                  created={data.date}
                  id={data._id}
                />
              );
            })}
            ;
          </tbody>
        </Table>
        {/* <Datetime/> */}
      </div>
    </>
  );
};
export default Create;
