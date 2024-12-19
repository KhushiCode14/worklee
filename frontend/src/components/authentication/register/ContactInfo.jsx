import { FaPlus } from "react-icons/fa6";
import Nav from "../../ui/Nav";
import { useNavigate } from "react-router-dom";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/button";

const ContactInfo = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen">
      <nav>
        <Nav />
      </nav>

      <main className="flex flex-col items-start justify-start gap-8 px-5 py-10 lg:flex-row lg:px-20">
        <div className="flex flex-col items-center w-full gap-8 lg:w-1/3">
          <div className="avatar indicator">
            <span className="bg-transparent border-none rounded-full indicator-item indicator-bottom badge">
              <FaPlus className="p-2 text-3xl font-extrabold text-white bg-green-600 rounded-full" />
            </span>
            <div className="w-32 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="flex items-center justify-center gap-2"
            >
              <FaPlus /> Upload photo
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full gap-4 lg:w-2/3">
          <div className="w-full">
            <label htmlFor="dob" className="text-black">
              Date of birth
            </label>
            <Input
              id="dob"
              type="datetime-local"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="country" className="text-black">
              Country
            </label>
            <Input
              id="country"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="street" className="text-black">
              Street address
            </label>
            <Input
              id="street"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="city" className="text-black">
              City
            </label>
            <Input
              id="city"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="state" className="text-black">
              State and Province
            </label>
            <Input
              id="state"
              type="text"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-black">
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full">
            <label htmlFor="zip" className="text-black">
              Zip
            </label>
            <Input
              id="zip"
              type="number"
              className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <Button
              variant="default"
              onClick={() => navigate("/auth/jobsearch")}
            >
              Submit
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ContactInfo;
