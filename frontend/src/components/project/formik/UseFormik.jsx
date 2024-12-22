import { useFormik } from "formik";
import { Form } from "react-router-dom";
import * as Yup from "yup";
const UseFormik = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      // Handle form submission logic here
    },
    validationSchema,
    // validate: (values) => {
    //   // values.name
    //   // errors.name
    //   let errors = {};

    //   // Check if name is empty
    //   if (!values.name) {
    //     errors.name = "Name is required"; // Add error for name
    //   }

    //   // Check if email is empty
    //   if (!values.email) {
    //     errors.email = "Email is required"; // Add error for email
    //   }

    //   // Check if password is empty (optional, based on context)
    //   if (!values.password) {
    //     errors.password = "Password is required"; // Add error for password
    //   }

    //   console.log("validate", values); // Log the values for debugging
    //   return errors; // Return the errors object
    // },
  });
  // console.log("errors", formik.errors);
  // console.log("form", formik.values);
  // console.log("touched fields", formik.touched);
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
          // onChange={formik.handleChange}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-800">{formik.errors.name}</div>
        )}
      </label>
      <br />
      <br />
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          // {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-800">{formik.errors.email}</div>
        ) : null}
      </label>
      <br />
      <br />
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          // {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-800">{formik.errors.password}</div>
        ) : null}
      </label>
      <br />
      <br />
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword ? (
          <div className="text-red-800">{formik.errors.confirmPassword}</div>
        ) : null}
      </label>
      <br />
      <br />
      <br />
      <button type="submit" className="text-black">
        Submit
      </button>
    </Form>
  );
};

export default UseFormik;
