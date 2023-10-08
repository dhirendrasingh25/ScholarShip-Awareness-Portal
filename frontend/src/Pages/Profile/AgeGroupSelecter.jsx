import React, { useState } from "react";

const AgeGroupSelector = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(""); // State to track the selected age group

  // Function to handle age group selection
  const handleAgeGroupChange = (event) => {
    setSelectedAgeGroup(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="age-group"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Preferred Age Group
      </label>
      <div className="relative">
        <input
          type="text"
          id="age-group"
          value={selectedAgeGroup} // Bind the selected age group to the input's value
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select an age group"
          required
          readOnly // Make the input read-only to prevent manual text input
        />
        <select
          onChange={handleAgeGroupChange} // Handle the change event for the dropdown
          value={selectedAgeGroup} // Bind the selected age group to the dropdown value
          className="absolute inset-y-0 right-0 px-2 py-2 border-l border-gray-300 bg-white rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="" disabled hidden>
            Select an age group
          </option>
          <option value="<10">&lt;10</option>
          <option value="<18">&lt;18</option>
          <option value="<25">&lt;25</option>
          <option value="25+">25+</option>
        </select>
      </div>
    </div>
  );
};

export default AgeGroupSelector;