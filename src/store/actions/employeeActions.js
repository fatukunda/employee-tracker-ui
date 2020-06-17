import axios from "axios";
import * as actions from "../constants/employeeConstants";

const baseUrl =
  "https://tugende-employees-tracker.azurewebsites.net/api/v1/employees";

const createemployeesuccess = (employee) => {
  return {
    type: actions.CREATE_employee_SUCCESS,
    payload: employee,
  };
};

const createemployeePending = (isLoading) => {
  return {
    type: actions.CREATE_employee_PENDING,
    payload: isLoading,
  };
};

const createemployeeFailure = (error) => {
  return {
    type: actions.CREATE_employee_FAILURE,
    payload: error,
  };
};

const fetchemployeesSuccess = (employees) => {
  return {
    type: actions.FETCH_employees_SUCCESS,
    payload: employees,
  };
};

const fetchemployeesPending = (isLoading) => {
  return {
    type: actions.FETCH_employees_PENDING,
    payload: isLoading,
  };
};

const fetchemployeesFailure = (error) => {
  return {
    type: actions.FETCH_employees_FAILURE,
    payload: error,
  };
};

const fetchemployeesuccess = (employee) => {
  return {
    type: actions.FETCH_employee_SUCCESS,
    payload: employee,
  };
};

const fetchemployeePending = (isLoading) => {
  return {
    type: actions.FETCH_employee_PENDING,
    payload: isLoading,
  };
};

const fetchemployeeFailure = (error) => {
  return {
    type: actions.FETCH_employee_FAILURE,
    payload: error,
  };
};

const editemployeesuccess = (employee) => {
  return {
    type: actions.EDIT_employee_SUCCESS,
    payload: employee,
  };
};

const editemployeePending = (isLoading) => {
  return {
    type: actions.EDIT_employee_PENDING,
    payload: isLoading,
  };
};

const editemployeeFailure = (error) => {
  return {
    type: actions.EDIT_employee_FAILURE,
    payload: error,
  };
};

const deleteemployeesuccess = (employee) => {
  return {
    type: actions.DELETE_employee_SUCCESS,
    payload: employee,
  };
};

const deleteemployeePending = (isLoading) => {
  return {
    type: actions.DELETE_employee_PENDING,
    payload: isLoading,
  };
};

const deleteemployeeFailure = (error) => {
  return {
    type: actions.DELETE_employee_FAILURE,
    payload: error,
  };
};

export const registerEmployee = (employeeDetails, handleClose) =>
  async (
    dispatch,
  ) => {
    console.log(employeeDetails);
    dispatch(createemployeePending(true));
    try {
      const response = await axios.post(baseUrl, employeeDetails);
      const employee = response.data;
      dispatch(createemployeesuccess(employee));
      dispatch(createemployeePending(false));
      handleClose();
      dispatch(viewEmployees());
    } catch (error) {
      if (error.response) {
        dispatch(createemployeeFailure(error.response.data));
        dispatch(createemployeePending(false));
      }
    }
  };

export const viewSingleemployee = (employeeId) =>
  async (dispatch) => {
    dispatch(fetchemployeePending(true));
    try {
      const response = await axios.get(`${baseUrl}/${employeeId}`);
      const employee = response.data;
      dispatch(fetchemployeesuccess(employee));
      dispatch(fetchemployeesPending(false));
    } catch (error) {
      if (error.response) {
        dispatch(fetchemployeeFailure(error.response.data));
        dispatch(fetchemployeePending(false));
      }
    }
  };

export const viewEmployees = () =>
  async (dispatch) => {
    dispatch(fetchemployeesPending(true));
    try {
      const response = await axios.get(baseUrl);
      const { data } = response;
      dispatch(fetchemployeesSuccess(data));
      dispatch(fetchemployeesPending(false));
    } catch (error) {
      if (error.response) {
        dispatch(fetchemployeesFailure(error.response.data));
        dispatch(fetchemployeesPending(false));
      }
    }
  };

export const updateImage = (imageData, id) =>
  async (dispatch) => {
    dispatch(editemployeePending(true));
    try {
      const response = await axios.put(
        `${baseUrl}/${id}/image-upload`,
        imageData,
      );
      const { data } = response;
      dispatch(editemployeesuccess(data));
      dispatch(editemployeePending(false));
      dispatch(viewEmployees());
      console.log(data);
    } catch (error) {
      if (error.response) {
        dispatch(editemployeeFailure(error.response.data));
        dispatch(editemployeePending(false));
      }
    }
  };

export const editemployee = (employeeData, id) =>
  async (dispatch) => {
    dispatch(editemployeePending(true));
    try {
      const response = await axios.patch(`${baseUrl}/${id}`, employeeData);
      const {
        data: { employee },
      } = response.data;
      dispatch(editemployeesuccess(employee));
      dispatch(editemployeePending(false));
      dispatch(viewEmployees());
    } catch (error) {
      if (error.response) {
        dispatch(editemployeeFailure(error.response.data));
        dispatch(editemployeePending(false));
      }
    }
  };

export const deleteemployee = (employeeId) =>
  async (dispatch) => {
    dispatch(deleteemployeePending(true));
    try {
      const response = await axios.delete(`${baseUrl}/${employeeId}`);
      const employee = response.data;
      dispatch(deleteemployeesuccess(employee));
      dispatch(deleteemployeePending(false));
      dispatch(viewEmployees());
    } catch (error) {
      if (error.response) {
        dispatch(deleteemployeeFailure(error.response.data));
        dispatch(deleteemployeePending(false));
      }
    }
  };

export const searchemployees = (employees, keyword) =>
  (dispatch) => {
    /*eslint array-callback-return: 0 */
    dispatch(fetchemployeesPending(true));
    const filteredemployees = employees.filter((employee) => {
      return Object.keys(employee).some((key) => {
        if (typeof employee[key] === "string") {
          return employee[key].toLowerCase().includes(keyword.toLowerCase());
        }
      });
    });
    dispatch(fetchemployeesSuccess(filteredemployees));
    if (keyword.length > 1) {
      dispatch(fetchemployeesPending(false));
    }
  };
