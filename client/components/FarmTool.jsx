import React, { useState } from "react";
import BookFarmTool from "./BookFarmTool";

const FarmTool = ({ farmerName, toolName, toolImage, availableFrom }) => {
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleBookTool = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setStartDate("");
    setEndDate("");
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      {showModal && (
        <BookFarmTool
          farmerName={farmerName}
          tool={toolName}
          startDate={startDate}
          endDate={endDate}
          handleCloseModal={handleCloseModal}
        />
      )}
      <img className="w-full" src={toolImage} alt={toolName} />
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {toolName}
        </h3>
        <div className="mt-2">
          <p className="text-sm leading-5 text-gray-500">{farmerName}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm leading-5 text-gray-500">
            Available from: {availableFrom}
          </p>
        </div>
        <div className="mt-5">
          <label
            htmlFor={`start-date-${toolName}`}
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Start Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id={`start-date-${toolName}`}
              type="date"
              required
              className="form-input block w-full sm:text-sm sm:leading-5"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <label
            htmlFor={`end-date-${toolName}`}
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            End Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id={`end-date-${toolName}`}
              type="date"
              required
              className="form-input block w-full sm:text-sm sm:leading-5"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleBookTool}
            disabled={!startDate || !endDate}
          >
            Book Tool
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmTool;
