// import React, {useState, useEffect} from "react";
// import Nav from "../../../Components/Nav";
// import Sidebar from "../../../Components/SideBar";
// import {data } from "./data"

// function EligibleSchemes() {

//   const user = {
//     fullname: "John Doe",
//     gender: "Male",
//     income: 300000,
//     caste: "General",
//     educationDetails : "High School Diploma",
//     interestedScholarshipCategories : ["Accounting"],
//   }


//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalData, setModalData] = useState({});

//   const onViewMoreButton = (p) => {
//     setIsModalOpen(true);
//     setModalData(p);
//   };

import React, { useState, useEffect } from "react";
import Nav from "../../../Components/Nav";
import Sidebar from "../../../Components/SideBar";
import { data } from "./data";

function EligibleSchemes() {
  const user = {
    fullname: "John Doe",
    gender: "Male",
    income: 300000,
    caste: "General",
    educationDetails: "High School Diploma",
    interestedScholarshipCategories: ["Accounting"],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the scholarships when the component mounts
    const filtered = data.filter((scholarship) => {
      // Check if the user's income is within the scholarship's income range
      const isIncomeEligible =
        user.income <= scholarship.incomeRange.max;

      // Check if the user's caste is eligible for the scholarship
      const isCasteEligible =
        !scholarship.caste || scholarship.caste === user.caste;

      // Check if the user's interested categories include the scholarship's field
      const isFieldEligible =
        !scholarship.field ||
        user.interestedScholarshipCategories.includes(scholarship.field);


      return isIncomeEligible && isCasteEligible && isFieldEligible;
    });

    setFilteredData(filtered);
  }, []);

  const onViewMoreButton = (p) => {
    setIsModalOpen(true);
    setModalData(p);
  };



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
      <Nav page="Eligible Schemes" />
      <div className="flex flex-row">
        <Sidebar selected="eligible" />
        <div className="w-5/6 m-6">
          <div className="flex flex-col w-full mx-auto mt-4 border-[1px] border-[#BBBFC6] border-collapse rounded border-b-1">
            <div className="flex flex-row justify-between bg-[#F4F4F4] px-4 border-b-[1px] border-[#DCE3EE] rounded-t-[5px] text-[14px] font-medium">
              <div className="flex flex-row justify-center items-center w-[5%] box-border py-[12px]">
                Logo
              </div>
              <div className="flex flex-row justify-center items-center w-[20%] box-border py-[12px]">
                Scholarship
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Organization
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Last Date
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Sector
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Degree
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Income Range
              </div>
              <div className="flex flex-row justify-center items-center w-[15%] box-border py-[12px]">
                Details
              </div>
            </div>
            {filteredData?.length === 0 && (
              <div className="flex flex-row justify-center items-center text-center mx-2 items-center w-[100%] box-border py-[10px] ">
                No data found ...
              </div>
            )}
            {filteredData?.map((p) => {
              return (
                <div className="flex flex-row justify-between text-[14px] rounded-b-[5px] p-4 border-[#DCE3EE] border-t">
                  <div className="flex flex-row justify-center items-center w-[5%] box-border py-[10px] ">
                    {/* i want to display an dummy image if the image rendering is not successful or if it's not present in the data that is being fetched from the api */}
                    <img
                      src={p.image}
                      alt=""
                      className="w-[50px] mx-2 h-[45px] rounded-full"
                    />
                  </div>
                  <div className="flex flex-row justify-center text-center mx-2 items-center w-[20%] box-border py-[10px] ">
                    {p.title}
                  </div>
                  <div className="flex flex-row  justify-center mx-2 text-center items-center w-[15%] box-border py-[10px] ">
                    {p.organizationName}
                  </div>
                  <div className="flex flex-row justify-center mx-2 items-center text-center w-[15%] box-border py-[10px] ">
                    {/* <ConvertDate value={p.registrationEndDate} /> */}
                    {p.registrationEndDate}
                  </div>
                  <div className="flex flex-row justify-center mx-2 items-center text-center w-[15%] box-border py-[10px] ">
                    {p.organizationType}
                  </div>
                  <div className="flex flex-row justify-center mx-2 items-center text-center w-[15%] box-border py-[10px] ">
                    {p.eligibilityString}
                  </div>
                  <div className="flex flex-row justify-center mx-2 items-center text-center w-[15%]  py-[10px] ">
                    {"<"}
                    {p.incomeRange.max}
                  </div>
                  <div
                    className="flex flex-row justify-center items-center w-[15%] box-border py-[10px] cursor-pointer"
                    onClick={() => {
                      onViewMoreButton(p);
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibleSchemes;
