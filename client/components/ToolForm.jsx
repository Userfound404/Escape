import React from "react";

const ToolForm = ({
  selectedTool,
  startDate,
  endDate,
  setSelectedTool,
  setStartDate,
  setEndDate,
  handleFormSubmit,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="tool">
          Tool
        </label>
        <select
          className="border border-gray-500 rounded py-2 px-3 w-full"
          id="tool"
          value={selectedTool}
          onChange={(event) => setSelectedTool(event.target.value)}
        >
          <option value="">Select a tool</option>
          <option value="tractor">Tractor</option>
          <option value="plow">Plow</option>
          <option value="harvester">Harvester</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="start-date"
        >
          Start Date
        </label>
        <input
          className="border border-gray-500 rounded py-2 px-3 w-full"
          type="date"
          id="start-date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="end-date"
        >
          End Date
        </label>
        <input
          className="border border-gray-500 rounded py-2 px-3 w-full"
          type="date"
          id="end-date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        disabled={!selectedTool || !startDate || !endDate}
      >
        Search
      </button>
    </form>
  );
};

export default ToolForm;
