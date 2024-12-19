import { Button } from "../../ui/Button";

const BackNext = ({ backLink, nextLink, value }) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 w-full p-4 ">
      <div className="w-full mb-2">
        <progress
          className="w-56 progress progress-success"
          value={value}
          max={100}
        ></progress>
      </div>
      <div className="flex items-center justify-between ">
        <Button variant="outline" links={backLink} className="w-full sm:w-auto">
          Back
        </Button>
        <Button variant="default" links={nextLink} className="w-full sm:w-auto">
          Next
        </Button>
      </div>
    </div>
  );
};

export default BackNext;
