import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "react-images-upload";
import Input from "./Input";
import Alert from "./Alert";
import { useForm } from "../libs/hooks";
import { editemployee, updateImage } from "../store/actions/employeeActions";

const EmployeeEditForm = ({ employee }) => {
  const dispatch = useDispatch();
  const editLoading = useSelector((state) => state.employeeReducer.editLoading);
  const error = useSelector((state) => state.employeeReducer.error);
  const [image, setImage] = useState("");
  const [fields, handleFieldChange] = useForm({
    isbn: employee.isbn,
    title: employee.title,
    author: employee.author,
  });
  const handleImageUpload = (image) => {
    setImage(image);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { isbn, title, author } = fields;
    const employeeDetails = {
      isbn,
      title,
      author,
    };
    if (image[0]) {
      const imageData = new FormData();
      imageData.append("image", image[0]);
      dispatch(updateImage(imageData, employee._id));
    }
    dispatch(editemployee(employeeDetails, employee._id));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={faUser}
        type="text"
        name="isbn"
        placeholder="employee ISBN"
        onChange={handleFieldChange}
        value={fields.isbn}
      />
      <Input
        icon={faUser}
        type="text"
        name="title"
        placeholder="employee Title"
        onChange={handleFieldChange}
        value={fields.title}
      />
      <Input
        icon={faUser}
        type="author"
        name="author"
        placeholder="Author"
        onChange={handleFieldChange}
        value={fields.author}
      />
      <ImageUploader
        withIcon={true}
        buttonText="Upload employee photo"
        onChange={handleImageUpload}
        imgExtension={[".jpg", ".gif", ".png", "jpeg"]}
        maxFileSize={5242880}
        name="image"
        singleImage={true}
      />
      {error ? <Alert alertype="alert-danger" message={error.message} /> : null}
      <button type="submit" className="btn btn-info btn-block mb-4 form-btn">
        {editLoading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Save employee"
        )}
      </button>
    </form>
  );
};

export default EmployeeEditForm;
