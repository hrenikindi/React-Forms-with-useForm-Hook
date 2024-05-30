import React from "react";
import { useForm } from "react-hook-form";
import './styles.css';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = (formData) => {
    const isValid = validateFormData(formData);
    
    if (isValid) {
      showAlert("Registration successful");
      logFormData(formData);
    } 
  };
  
  const validateFormData = () => {
    return true;
  };

  const showAlert = (message) => {
    alert(message);
  };
  const logFormData = (data) => {
    console.log(data);
  };
  

  return (
    <div className="border">
    <h2 className="text-primary text-center">Registration Form</h2>
  
    <form onSubmit={handleSubmit(handleFormSubmit)} className="fields">
      
      {[
        { label: "First Name", name: "firstName", type: "text", validation: { required: "Please enter your First Name", pattern: { value: /^[a-zA-Z ]*$/, message: "First Name should not contain special characters" } } },
        { label: "Last Name", name: "lastName", type: "text", validation: { required: "Please enter your Last Name", pattern: { value: /^[a-zA-Z ]*$/, message: "Last Name should not contain special characters" } } },
        { label: "Email", name: "email", type: "email", validation: { required: "Please enter your Email", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } } },
        { label: "Password", name: "password", type: "password", validation: { required: "Please enter your Password", minLength: { value: 5, message: "Password must be more than 4 characters" }, maxLength: { value: 20, message: "Password cannot be more than 20 characters" } } }
      ].map(({ label, name, type, validation }) => (
        <div className="fields" key={name}>
          <label>{label}</label>
          <input
            type={type}
            className="form-control"
            {...register(name, validation)}
          />
          {errors[name] && (
            <span className="text-danger">{errors[name].message}</span>
          )}
        </div>
      ))}
  
      <div className="fields">
        <button className="btn" type="submit">Register</button>
      </div>
      
    </form>
  </div>
  
  );
}

export default RegistrationForm;
