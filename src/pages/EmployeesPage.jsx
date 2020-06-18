import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Employee from "../components/Employee";
import AppModal from "../components/AppModal";
import { viewEmployees } from "../store/actions/employeeActions";
import Loader from "../components/Loader";
import NoEmployees from "../components/NoEmployees";
import SearchForm from "../components/SearchForm";
import EmployeeRegistrationForm from "../components/EmployeeRegistrationForm"

const EmployeesPage = () => {
  const [visible, setVisible] = useState(false);
  const employees = useSelector((state) => state.employeeReducer.employees);
  const isLoading = useSelector((state) => state.employeeReducer.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewEmployees());
  }, [dispatch]);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <NavBar />
      <div className="container main-container">
        <div className="row">
          <div className="col-md-6">
            <SearchForm />
          </div>
          <div className="col-md-6">
            {employees.length > 0 ? (
              <button
                className="btn float-right btn-info"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={showModal}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add New employee
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container mt-4 employees-container">
        {isLoading ? (
          <div className="employees-container d-flex justify-content-center align-items-center">
            <Loader spinnerColor="text-primary" />
          </div>
        ) : (
          <div className="row mb-2">
            {employees.length > 0 ? (
              employees.map((employee) => {
                return <Employee employee={employee} key={employee.id} />;
              })
            ) : (
              <NoEmployees showModal={showModal} />
            )}
          </div>
        )}

        <AppModal
          show={visible}
          handleClose={hideModal}
          heading="Register a New employee"
        >
          <EmployeeRegistrationForm handleClose={hideModal} />
        </AppModal>
      </div>
    </div>
  );
};

export default EmployeesPage;
