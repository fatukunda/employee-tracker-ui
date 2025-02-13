import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  searchemployees,
  viewEmployees,
} from "../store/actions/employeeActions";

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("");
  const employees = useSelector((state) => state.employeeReducer.employees);
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setSearchWord(event.target.value);
    if (event.target.value === "") {
      dispatch(viewEmployees());
    } else {
      dispatch(searchemployees(employees, searchWord));
    }
  };
  return (
    <form className="form">
      <Input
        type="search"
        placeholder="Search Employee by name, title, category, or salary scale"
        icon={faSearch}
        styles="mr-sm-2"
        value={searchWord}
        onChange={changeHandler}
        name="search"
      />
    </form>
  );
};
export default SearchForm;
