import React, { useEffect } from "react";
import Tabledark from "../../common/components/table/table";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    allusers();
  }, []);
  const allusers = async () => {
    try {
      const res = await fetch("/api/allusers", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // const res = await axios.get("/api/allusers");
      if (res.status === 200) {
        const jdata = await res.json();
        setData(jdata);
      } else {
        window.alert("login to access all users");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <>
      <div className="container my-5">
        <h1 className={"text-success"}>Applicants</h1>

        <Table responsive="sm" striped bordered hover variant="dark">
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
