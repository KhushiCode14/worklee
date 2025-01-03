import Select from "react-select";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

const ReactSelect = ({ onChange, value }) => {
  return (
    <div className="flex flex-col">
      <Select
        options={options}
        isMulti
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={onChange}
        value={options.filter((option) => value.includes(option.value))}
        placeholder="Select skills..."
        inputId="react-select"
      />
    </div>
  );
};

export default ReactSelect;
