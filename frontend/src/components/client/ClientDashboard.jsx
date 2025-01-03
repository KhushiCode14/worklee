// import { Bell, ChevronDown, HelpCircle, Search, User } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
// import { Input } from "../ui/Input";
import PropTypes from "prop-types";
import ClientNavbar from "./ClientNavbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b ">
        <ClientNavbar />
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8 mx-auto">
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-semibold">
            Complete these steps to stand out and hire fast
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <VerificationCard
              title="Add a billing method"
              description="You could start hiring 3X faster."
              status="pending"
              icon="💳"
            />
            <VerificationCard
              title="Email verified"
              description="You verified your email address."
              status="completed"
              icon="✉️"
            />
            <VerificationCard
              title="Phone verified"
              description="You verified your phone number."
              status="completed"
              icon="📱"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Post a new job</h3>
            <p className="mb-4 text-gray-600">
              Create a new job post and get proposals from talent.
            </p>
            <Link to="/job-post/title">
              <Button className="w-full">Post a job</Button>
            </Link>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Pay with confidence</h3>
            <p className="mb-4 text-gray-600">
              There’s no cost until you hire; you’ll only be charged once you
              approve completed work.
            </p>
            <Button variant="link" className="p-0 text-green-600">
              Learn more about payments
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Stay safe on Upwork</h3>
            <p className="mb-4 text-gray-600">
              We &apos; re doing our best to keep you safe, and it’s important
              you learn how to identify and report suspicious activity.
            </p>
            <Button variant="link" className="p-0 text-green-600">
              Learn more about safety
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

function VerificationCard({ title, description, status, icon }) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="mb-1 font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="ml-auto">
          {status === "completed" ? (
            <div className="flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
              ✓
            </div>
          ) : (
            <div className="flex items-center justify-center w-6 h-6 text-yellow-600 bg-yellow-100 rounded-full">
              !
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

VerificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["pending", "completed"]).isRequired,
  icon: PropTypes.string.isRequired,
};

export default Dashboard;
