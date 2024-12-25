import Nav from "../../ui/Nav";
// import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import PropTypes from "prop-types";
import { setContactInfo } from "../../../redux/slices/registrationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// const buttonStyles =
//   "flex-1 p-2 font-medium transition duration-200 rounded-lg outline-none cursor-pointer";

// const validationSchema = Yup.object({
//   country: Yup.string().required("Country is required"),
//   street: Yup.string().required("Street address is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State and Province are required"),
//   zip: Yup.string()
//     .matches(/^\d{5}$/, "Zip code must be exactly 5 digits")
//     .required("Zip code is required"),
//   phone: Yup.string()
//     .matches(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Phone number is not valid")
//     .required("Phone number is required"),
//   dob: Yup.date().required("Date of birth is required"),
// });

const ContactInfo = ({ onSubmit }) => {
  console.log("submit form after contact", onSubmit);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Dispatching contact info:", values);
    try {
      dispatch(setContactInfo(values)); // Dispatching to Redux
      navigate("/auth/viewprofile");
      console.log("Dispatched Successfully");
    } catch (error) {
      console.error("Error Dispatching:", error);
    }
    setSubmitting(false);

    if (onSubmit) {
      onSubmit(values); // Call the parent callback if provided
    } else {
      console.log("No onSubmit handler provided");
    }
  };

  const initialValues = {
    country: "",
    street: "",
    city: "",
    zip: "",
    phone: "",
    state: "",
    dob: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="flex flex-col items-start justify-start gap-8 px-5 py-10 lg:flex-row lg:px-20">
        <nav>
          <Nav />
        </nav>

        <div className="flex-1 w-full gap-4 lg:w-2/3">
          <div className="w-full">
            <label htmlFor="dob" className="text-black">
              Date of birth
            </label>
            <Field
              id="dob"
              name="dob"
              type="date"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="text-black">
              Country
            </label>
            <Field
              id="country"
              type="text"
              name="country"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="street" className="text-black">
              Street address
            </label>
            <Field
              id="street"
              type="text"
              name="street"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="city" className="text-black">
              City
            </label>
            <Field
              name="city"
              id="city"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="state" className="text-black">
              State and Province
            </label>
            <Field
              name="state"
              id="state"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-black">
              Phone
            </label>
            <Field
              name="phone"
              id="phone"
              type="tel"
              placeholder="123-456-7890"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="zip" className="text-black">
              Zip
            </label>
            <Field
              name="zip"
              id="zip"
              type="number"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

ContactInfo.propTypes = {
  onSubmit: PropTypes.func,
  setContactInfo: PropTypes.func,
  dispatch: PropTypes.func,
  navigate: PropTypes.func,
  country: PropTypes.string,
  street: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  phone: PropTypes.string,
  dob: PropTypes.string,
};

export default ContactInfo;
