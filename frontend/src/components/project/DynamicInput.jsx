import { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

const DynamicInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  const inputRef = useRef(null);
  const url = `https://dummyjson.com/users/search?q=${searchTerm}`;

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return [];
      }
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => console.log(err));
    };
    fetchUsers();
  }, [searchTerm]);

  const handleSelectUsers = (user) => {
    console.log("Add user", user);
    setSelectedUsers([...selectedUsers, user]);
    setSearchTerm("");
    setSuggestions([]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    console.log("remove user", user);
    setSelectedUsers(selectedUsers.filter((u) => u.email !== user.email));
    setSelectedUserSet(
      new Set([...selectedUserSet].filter((email) => email !== user.email))
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedUsers.map((user) => (
            <Pill
              key={user.email}
              user={user}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUser(user)}
            />
          ))}
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        />
        {suggestions?.users?.length > 0 && (
          <div className="mt-4 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-md max-h-64">
            <ul>
              {suggestions.users.map((user) =>
                !selectedUserSet.has(user.email) ? (
                  <li
                    key={user.email}
                    onClick={() => handleSelectUsers(user)}
                    className="flex items-center p-3 cursor-pointer hover:bg-blue-100"
                  >
                    <img
                      src={user.image}
                      alt={user.firstName}
                      className="w-10 h-10 mr-3 rounded-full"
                    />
                    <span className="text-gray-800">{user.firstName}</span>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}
        {selectedUsers.length > 0 && (
          <div className="p-4 mt-4 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="font-semibold text-blue-800">Selected Users:</h3>
            <ul className="mt-2 space-y-2">
              {selectedUsers.map((user) => (
                <li key={user.firstName} className="flex items-center">
                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="w-8 h-8 mr-3 rounded-full"
                  />
                  <span>{user.firstName}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicInput;
