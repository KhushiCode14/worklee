import { FaSearch } from "react-icons/fa";

// Dropdown component
// function Dropdown({ label, options }) {
//   return (
//     <div className="dropdown dropdown-end">
//       <label
//         tabIndex={0}
//         className="flex items-center m-1 rounded-l-none rounded-r-full btn btn-ghost"
//       >
//         {label}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="ml-2"
//         >
//           <path d="m6 9 6 6 6-6" />
//         </svg>
//       </label>
//       <ul
//         tabIndex={0}
//         className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         {options.map((option, index) => (
//           <li key={index}>
//             <a>{option}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// SearchInput component
function SearchInput() {
  return (
    <div className="flex items-center w-full p-2 text-gray-800 bg-white border border-gray-700 rounded-3xl">
      <FaSearch className="pr-2" size={25} />
      <input
        type="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <select className="p-1 ml-2 bg-transparent border-none rounded-2xl">
        <option value="Job">Job</option>
        <option value="Talent">Talent</option>
        <option value="Projects">Projects</option>
      </select>
    </div>
  );
}

// Reusable SearchBar component
export default function SearchBar() {
  // const jobOptions = ["Full-time", "Part-time", "Contract"];

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <div className="flex items-center w-full border rounded-full bg-base-100">
        <SearchInput />
      </div>
    </div>
  );
}
