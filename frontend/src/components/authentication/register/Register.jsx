import { useState } from "react";
import RoleSelection from "./RoleSelection";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import ViewProfile from "../ViewProfile";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../../../redux/slices/registrationSlice";
import axios from "axios";
const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phone: "",
    address: "",
  });
  const [contactInfo, setContactInfo] = useState({
    country: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
    state: "",
    dob: "",
  });
  const [error, setError] = useState(""); // For displaying error messages
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoleSubmit = (value) => {
    console.log("role form submit", value);
    setRole(value.role);
    setStep(2);
  };
  const handleSubmitPersonalInfo = (info) => {
    // value.preventDefault();
    console.log("personal info form submit", info);
    setPersonal(info);
    dispatch(setPersonalInfo(info));
    setStep(3);
    console.log("Current Step: ", 3);
  };
  const handleContactInfoSubmit = async (contact) => {
    setContactInfo(contact);
    dispatch(setContactInfo(contact)); // Update Redux state

    const payload = {
      role,
      personalInfo: personal,
      contactInfo: contact,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        payload
      );
      console.log("User registered successfully:", response.data);
      setSuccessMessage(
        "Registration successful! You can now view your profile."
      );
      setTimeout(() => {
        navigate("/auth/viewprofile"); // Navigate to profile view after successful registration
      }, 2000); // Delay for a couple of seconds to show success message
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  switch (step) {
    case 1:
      return <RoleSelection step={1} onSubmit={handleRoleSubmit} />;
    case 2:
      return (
        <PersonalInfo
          step={2}
          role={role}
          onSubmit={handleSubmitPersonalInfo}
        />
      );
    case 3:
      return (
        <ContactInfo
          step={3}
          personalInfo={personal}
          onSubmit={handleContactInfoSubmit}
        />
      );
    default:
      return (
        <ViewProfile
          step={4}
          contactInfo={contactInfo}
          successMessage={successMessage} // Pass the success message to ViewProfile
          error={error}
        />
      );
  }
};

export default Register;
