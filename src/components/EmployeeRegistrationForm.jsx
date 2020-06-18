import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faUser, faBox, faUserTie, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Alert from "./Alert";
import { useForm } from "../libs/hooks";
import { registerEmployee } from "../store/actions/employeeActions";

const EmployeeRegistrationForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const createLoading = useSelector(
    (state) => state.employeeReducer.createLoading,
  );
  const error = useSelector((state) => state.employeeReducer.error);
  const [fields, handleFieldChange] = useForm({
    name: "",
    title: "",
    category: "",
    salaryScale: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, title, category, salaryScale } = fields;
    const employee = {
      name,
      title,
      category,
      salaryScale,
    };
    dispatch(registerEmployee(employee, handleClose));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={faUser}
        type="text"
        name="name"
        placeholder="Employee Name"
        onChange={handleFieldChange}
        value={fields.name}
      />
      <Input
        icon={faUserTie}
        type="text"
        name="title"
        placeholder="Employee Title"
        onChange={handleFieldChange}
        value={fields.title}
      />
      <Input
        icon={faBox}
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleFieldChange}
        value={fields.category}
      />
      <Input
        icon={faMoneyCheck}
        type="text"
        name="salaryScale"
        placeholder="Salary Scale"
        onChange={handleFieldChange}
        value={fields.salaryScale}
      />
      {error ? <Alert alertype="alert-danger" message={error.message} /> : null}
      <button type="submit" className="btn btn-info btn-block mb-4 form-btn">
        {createLoading
          ? (
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )
          : (
            "Save Employee"
          )}
      </button>
    </form>
  );
};

export default EmployeeRegistrationForm;
