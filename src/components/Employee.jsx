import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import AppModal from "./AppModal";
import Loader from "./Loader";
import { deleteEmployee } from "../store/actions/employeeActions";
import EmployeeEditForm from "../components/EmployeeEditForm";

const Employee = ({ employee }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const deleteLoading = useSelector(
    (state) => state.employeeReducer.deleteLoading
  );
  const dispatch = useDispatch();
  const editHandler = () => {
    setEditFormVisible(true);
  };
  const deleteHandler = () => {
    dispatch(deleteEmployee(employee.id));
  };
  const hideEditModal = () => {
    setEditFormVisible(false);
  };
  return (
    <div className="col-md-3 mt-4">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h4 className="mt-4">{employee.name}</h4>
            <p className="mt-4">{employee.title}</p>
            <p className="mt-4">{employee.category}</p>
          </div>
          <div className="flip-card-back">
            <h4 className="mt-4">{employee.name}</h4>
            <p className="mt-4">{employee.title}</p>
            <p className="mt-4">{ `${employee.category} - ${employee.salaryScale}`}</p>
            <div className="mt-4">
              <button
                className="btn btn-sm btn-warning mr-2"
                style={{ width: "5rem" }}
                onClick={editHandler}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                style={{ width: "5rem" }}
                onClick={deleteHandler}
              >
                {deleteLoading ? (
                  <Loader
                    spinnerSize="spinner-border-sm"
                    spinnerColor="text-warning"
                  />
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <AppModal
        show={editFormVisible}
        heading={`Edit employee #${employee.id}`}
        handleClose={hideEditModal}
      >
        <EmployeeEditForm employee={employee} />
      </AppModal>
    </div>
  );
};

export default Employee;
