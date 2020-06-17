import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import noemployeesImg from "../assets/employee-stack.svg";
const NoEmployees = ({ showModal }) => {
  return (
    <div className="col-md-12 text-center">
      <img src={noemployeesImg} alt="No ooks" style={{ width: "300px" }} />
      <h4 className="mt-4 mb-4">
        <FontAwesomeIcon icon={faExclamation} className="mr-2" />
        You have not registered any employees yet!
      </h4>
      <button
        className="btn btn-info btn-lg "
        data-toggle="modal"
        onClick={showModal}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add a employee
      </button>
    </div>
  );
};

export default NoEmployees;
