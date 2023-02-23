import React from "react";
// import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Tabledark = (props) => {
  const navigate = useNavigate();
  const gosch = () => {
    navigate(`/schedule/${props.id}`);
  };
  return (
    <tr>
      <td>{props.ind}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
      <td>{props.created}</td>

      <td>
        <Button onClick={gosch} variant="danger" size="sm">
          Delete
        </Button>{" "}
      </td>
      <td>
        <Button variant="success" size="sm">
          Active
        </Button>{" "}
      </td>
    </tr>
  );
};

export default Tabledark;
