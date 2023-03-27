import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ToolForm from "../components/ToolForm";
import FarmersList from "../components/FarmersList";
import BookFarmTool from "../components/BookFarmTool";

const Resources = () => {
  const [location, setLocation] = useState(null);
  const [selectedTool, setSelectedTool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [farmers, setFarmers] = useState([]);
  const [bookedFarmTool, setBookedFarmTool] = useState(null);
  
  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch nearest farmers who have the selected tool and equipment available
      const response = await axios.get(
        `https://api.example.com/farmers?lat=${location.lat}&lng=${location.lng}&tool=${selectedTool}&start_date=${startDate}&end_date=${endDate}`
      );
      setFarmers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookFarmTool = async (id) => {
    try {
      // Update the state of the booked farm tool in the database
      const response = await axios.patch(
        `https://api.example.com/farmtools/${id}`,
        { booked: true }
      );
      setBookedFarmTool(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Farm Tool Booking</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <ToolForm
            selectedTool={selectedTool}
            startDate={startDate}
            endDate={endDate}
            setSelectedTool={setSelectedTool}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            handleFormSubmit={handleFormSubmit}
          />
          <FarmersList
            farmers={farmers}
            handleBookFarmTool={handleBookFarmTool}
          />
        </div>
        <div className="col-span-1">
          {bookedFarmTool && <BookFarmTool bookedFarmTool={bookedFarmTool} />}
        </div>
      </div>
    </div>
  );
};

export default Resources;
