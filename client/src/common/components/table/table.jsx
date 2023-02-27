import React from "react";
// import { useNavigate } from "react-router-dom";

const Tabledark = (props) => {
  // const navigate = useNavigate();
  // const gosch = () => {
  //   navigate(`/schedule/${props.id}`);
  // };
  return (
    <tr>
      <td>{props.ind}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
      <td>{props.created}</td>

      <td>
        <i className="text-primary mx-2 bi bi-pencil-square"></i>
        <i className="text-danger mx-2 bi bi-x-circle-fill"></i>
      </td>
      <td>
        <i className="text-success bi bi-circle-fill"></i> Active
      </td>
    </tr>
  );
};

export default Tabledark;
