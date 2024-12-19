import Select from "react-select";
import { useState } from "react";
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

const ReactSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    console.log("Selected options:", selected);
  };

  return (
    <div className="flex flex-col">
      <Select
        options={options}
        isMulti
        className="react-select-container"
        classNamePrefix="react-select"
        onChange={handleChange}
        value={selectedOptions}
        placeholder="Select your favorite fruits..."
        inputId="react-select"
      />
      <div style={{ marginTop: "20px" }}>
        <strong>Selected:</strong>
        <ul>
          {selectedOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReactSelect;
