import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/Button";

import { Input } from "../ui/Input";
import { Alert, AlertDescription } from "../ui/Alert";
import { Card, CardContent, CardFooter } from "../ui/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateClientAccount() {
  const [isBillingMethodSet, setIsBillingMethodSet] = useState(false);
  const handleClick = (e) => {
    e.target.style.backgroundColor = "green";
    setIsBillingMethodSet(true);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="container flex-1 px-4 py-8 mx-auto">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <h1 className="mb-6 text-3xl font-semibold">
              Create a client account
            </h1>

            <Alert
              variant="destructive"
              className="mb-6 border-red-100 bg-red-50"
            >
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <AlertDescription className="text-red-600">
                You must set up your{" "}
                <span className="underline">billing method</span> before you can
                create a new client account.
              </AlertDescription>
            </Alert>

            <p className="mb-6 text-gray-700">
              Setup a client account if you want to post jobs and hire talents.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="company-name"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Company Name
                </label>
                <Input
                  id="company-name"
                  placeholder="Enter your company name"
                  onChange={() => handleClick()}
                />
              </div>

              <p className="text-sm text-gray-500">
                Your company name will NOT appear on job posts unless you have
                previously worked with the talent or agency on Upwork.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-4 px-6 py-4 mt-8 border-t">
            <Button variant="ghost" className="text-green-600">
              Cancel
            </Button>
            <Link to="/client/dashboard" className="cursor-pointer">
              <Button variant="secondary" disabled={!isBillingMethodSet}>
                Create Client Account
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </main>

      <footer className="py-8 text-white bg-black">
        <div className="container px-4 mx-auto">
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Trust, Safety & Security
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
