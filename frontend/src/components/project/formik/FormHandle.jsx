import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import { Form } from "react-router-dom";
import * as Yup from "yup";
const FormHandle = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phNumbers: ["", ""],
  };
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
    // Handle form submission logic here
  };

  // console.log("errors", formik.errors);
  // console.log("form", formik.values);
  // console.log("touched fields", formik.touched);
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log("formik,", formik);
        const isSubmitting = !formik.isValid;
        return (
          <Form>
            <label>
              Name:
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </label>
            <br />
            <br />
            <br />
            <label>
              Email:
              <Field
                type="email"
                name="email"

                // {...formik.getFieldProps("email")}
              />
              <ErrorMessage name="email" />
            </label>
            <br />
            <br />
            <br />
            <label>
              Password:
              <Field
                type="password"
                name="password"
                id="passwod"
                placeholder="password"
              />
              <ErrorMessage name="password" />
            </label>
            <br />
            <br />
            <br />
            <label>
              Confirm Password:
              <Field type="password" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="comments">
              Comments
              <Field as="textarea" name="comments" />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="comments">
              Facebook
              <Field type="textarea" id="facebook" name="social.facebook" />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="comments">
              Twitter
              <Field type="textarea" id="twitter" name="social.twitter" />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="phNumbers">
              1* phone number
              <Field type="tel" id="phone[0]" name="phNumbers[0]" />
            </label>
            <br />
            <br />
            <br />
            <label htmlFor="phNumbers">
              2* phone number
              <Field type="tel" id="phone[1]" name="phNumbers[1]" />
            </label>
            <FieldArray name="phNumbers">
              {(fieldArraysProps) => {
                console.log(fieldArraysProps);
                const { push, remove, form } = fieldArraysProps;
                const value = form.values;
                const phNumbers = value.phNumbers;
                console.log(phNumbers);
                console.log(value);
                return (
                  <div>
                    {phNumbers.map((phNumbers, index) => {
                      return (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`}></Field>
                          <button className="btn" onClick={() => remove(index)}>
                            -
                          </button>
                          <button className="btn" onClick={() => push(index)}>
                            +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </FieldArray>
            <button
              type="submit"
              className="text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormHandle;
