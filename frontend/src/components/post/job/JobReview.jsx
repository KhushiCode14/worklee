import { Form, Formik, Field } from "formik";
import { Button } from "../../ui/Button";
import { LuPencil } from "react-icons/lu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobDetails } from "../../../redux/slices/jobSlices";

const JobReview = () => {
  const Dashboard = "/client/dashboard";
  const uploadJobPost = "/";
  const job = useSelector((state) => state.job);

  console.log(job);
  console.log(
    "title : ",
    job.title,
    "skills",
    job.skills,
    "descpription: ",
    job.description,
    "scope :",
    job.scope
  );
  const dispatch = useDispatch();
  const [formData, setData] = useState({
    title: job.title,
    skills: job.skills,
    scope: job.scope,
    duration: job.duration,
    levelOfExperience: job.levelOfExperience,
    contractToHire: job.contractToHire,
    budget: job.budget,
    description: job.description,
    attachments: job.attachments,
    location: job.location,
    connectionRequired: job.connectionRequired,
    status: job.status,
    proposals_count: job.proposals_count,
    tags: job.tags,
    client: job.client,
    applicants: job.applicants,
    visibility: job.visibility,
    deadline: job.deadline,
  });
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
    console.log(e);
    // dispatch(setJobDetails({ [name]: value }));
    dispatch(setJobDetails(formData));
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={formData}>
      {() => (
        <Form>
          <div className="flex flex-col justify-between w-full h-auto p-6 lg:p-10">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-medium text-black">Job details</h2>
              <Button links={uploadJobPost}>Post this job</Button>
            </div>
            <div className="h-auto text-black border border-gray-800 rounded-lg shadow-md">
              {[
                "title",
                "skills",
                "scope",
                "budget",
                "description",
                "duration",
                "levelOfExperience",
                "contractToHire",
                "attachments",
                "location",
                "connectionRequired",
                "status",
                "proposals_count",
                "tags",
                "client",
                "applicants",
                "visibility",
                "deadline",
              ].map((field) => (
                <div
                  key={field}
                  className="flex justify-between h-full p-6 border-b border-gray-600"
                >
                  <div className="w-2/3 text-black text-wrap">
                    <p className="text-2xl">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </p>
                    <Field
                      name={field}
                      value={formData[field]}
                      type="text"
                      className="text-black bg-transparent"
                    />
                  </div>
                  <LuPencil className="text-green-700" />
                </div>
              ))}
              <div className="flex items-center justify-between p-3">
                <Button variant="outline">Back</Button>
                <div className="flex gap-3">
                  <Button variant="outline">Save as draft</Button>
                  <Button links={Dashboard} type="submit">
                    Post this job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default JobReview;
