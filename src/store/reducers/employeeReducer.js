import * as actions from "../constants/employeeConstants";

const initialState = {
  employees: [],
  employee: {},
  createLoading: false,
  editLoading: false,
  deleteLoading: false,
  isLoading: false,
  error: null,
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_employee_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case actions.CREATE_employee_PENDING:
      return {
        ...state,
        createLoading: action.payload,
      };
    case actions.CREATE_employee_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_employees_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case actions.FETCH_employees_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.FETCH_employees_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.EDIT_employee_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case actions.EDIT_employee_PENDING:
      return {
        ...state,
        editLoading: action.payload,
      };
    case actions.EDIT_employee_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.DELETE_employee_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case actions.DELETE_employee_PENDING:
      return {
        ...state,
        deleteLoading: action.payload,
      };
    case actions.DELETE_employee_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_employee_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    case actions.FETCH_employee_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.FETCH_employee_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.SET_PAGINATION_DATA:
      return {
        ...state,
        paginationData: action.payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
