// import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/registrationSlice"; // Adjust the import path as needed

const ViewProfile = ({ successMessage, error }) => {
  // Access the Redux state
  const registration = useSelector((state) => state.register);

  // Log the state for debugging
  console.log("Redux State:", registration);
  const dispatch = useDispatch();
  // Destructure state or fallback to defaults
  const {
    role = "N/A",
    personalInfo = {
      firstName: "N/A",
      lastName: "N/A",
      email: "N/A",
      password: "N/A",
      country: "N/A",
    },
    contactInfo = {
      country: "N/A",
      street: "N/A",
      city: "N/A",
      zip: "N/A",
      phone: "N/A",
      dob: "N/A",
    },
  } = registration || {}; // Fallback to empty object if registration is undefined
  console.log("registration state", registration);
  const registrationData = {
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    email: personalInfo.email,
    password: personalInfo.password,
    country: personalInfo.country,
    phone: contactInfo.phone,
    role: role,
    street: contactInfo.street,
    city: contactInfo.city,
    zip: contactInfo.zip,
    state: contactInfo.state,
    dob: contactInfo.dob,
  };
  console.log("before registrationData", registrationData);
  const handleRegister = async () => {
    // Create a data object to send to the backend

    console.log("after registrationData", registrationData);
    await dispatch(registerUser(registrationData));
  };

  return (
    <div>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      {error && <div className="error-message">{error}</div>}

      <h1>Profile Information</h1>
      <h3>Role: {role}</h3>

      <h3>Personal Information:</h3>
      <p>
        <strong>First Name:</strong> {personalInfo?.firstName || "N/A"}
      </p>
      <p>
        <strong>Last Name:</strong> {personalInfo?.lastName || "N/A"}
      </p>
      <p>
        <strong>Email:</strong> {personalInfo?.email || "N/A"}
      </p>
      <p>
        <strong>Password:</strong> {personalInfo?.password || "N/A"}
      </p>
      <p>
        <strong>Country:</strong> {personalInfo?.country || "N/A"}
      </p>
      <p>
        <strong>Phone:</strong> {personalInfo?.phone || "N/A"}
      </p>
      <p>
        <strong>Address:</strong> {personalInfo?.address || "N/A"}
      </p>

      <h3>Contact Information:</h3>
      <p>
        <strong>Country:</strong> {contactInfo?.country || "N/A"}
      </p>
      <p>
        <strong>Street:</strong> {contactInfo?.street || "N/A"}
      </p>
      <p>
        <strong>City:</strong> {contactInfo?.city || "N/A"}
      </p>
      <p>
        <strong>Zip:</strong> {contactInfo?.zip || "N/A"}
      </p>
      <p>
        <strong>Phone:</strong> {contactInfo?.phone || "N/A"}
      </p>
      <p>
        <strong>State:</strong> {contactInfo?.state || "N/A"}
      </p>
      <p>
        <strong>Date of Birth:</strong> {contactInfo?.dob || "N/A"}
      </p>
      <button onClick={handleRegister}>Register</button>
      <ToastContainer />
    </div>
  );
};

export default ViewProfile;
