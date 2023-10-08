import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Sidebar from "../Components/SideBar";
import { data } from "./notiData";

function Notification() {
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const onViewMoreButton = (p) => {
    setIsModalOpen(true);
    setModalData(p);
  };

  useEffect(() => {
    // Get the current date and time
    const now = new Date();

    // Filter the scholarships based on the registration end date
    const filtered = data.filter((scholarship) => {
      // Parse the registration end date
      const endDate = new Date(scholarship.registrationEndDate);

      // Calculate the difference in days between now and the end date
      const diffInDays = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));

      // Check if the difference is less than or equal to 10
      return diffInDays <= 10;
    });

    setFilteredData(filtered);
  }, []);

  return (
    <div className="">
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="h-96 w-96 bg-[#F4F4F4]">
            <div className="flex flex-row justify-between">
              <div className="m-4">{modalData.title}</div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setModalData(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 m-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" border-b" style={{ borderColor: "black" }}></div>
            <div className="m-4">
              <div>Description: {modalData.description}</div>
            </div>
          </div>
        </div>
      )}
      <Nav page="Notification" />
      <div className="flex flex-row">
        <Sidebar selected="notification" />
        <div className="w-[80%]">
          <div className=" border m-6 rounded-lg">
            {/* Render your UI here */}
            {filteredData.map((scholarship) => (
              <div
                className="flex flex-row w-full items-center text-start border-t py-4 text-xl px-4"
                key={scholarship.title}
              >
                <div className="w-5/6">{`${scholarship.title} is ending less than 10 days`}</div>
                <div
                        className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] cursor-pointer"
                        onClick={() => {
                          onViewMoreButton(scholarship);
                        }}
                      >
                        View More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="ml-2 w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
              </div> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
