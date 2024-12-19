import { useEffect, useState } from "react";
import RoleSelection from "./RoleSelection";
import PersonalInfo from "./PersonalInfo";
import ViewProfile from "./ViewProfile";
import ContactInfo from "./ContactInfo";
import axios from "axios";
const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    country: "",
  });
  const fetchData = async () => {
    const response = await axios.post(
      "http://localhost:5400/auth/register",
      formData
    );
    const data = response.data;
    console.log(data);

    setFormData(data);
  };
  useEffect(() => {
    fetchData();
    // setStep(1);
    // setFormData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   role: "",
    //   country: "",
    // });
  }, []);
  const nextStep = (prev) => setStep(prev);
  const prevStep = (prev) => setStep(prev);
  return (
    <div className="h-screen text-green-600 bg-slate-300 dark:bg-black dark:text-white ">
      {step === 1 && (
        <RoleSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 3 && (
        <ContactInfo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 4 && (
        <ViewProfile
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default Register;
