import React from "react";
import Nav from "../../../Components/Nav";
import Sidebar from "../../../Components/SideBar";
import { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import ConvertDate from "../../../Components/ConvertDate";


function AllSchemes() {
  const [data, setData] = useState(null);
  const initialSelectedOptions = [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("degree");
  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  // make an get request api call using axios to get the data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/scholarships";

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;

    if (selectedOptions.includes(optionValue)) {
      // If selected, remove it from the array
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue)
      );
      console.log(selectedOptions);
    } else {
      // If not selected, add it to the array
      setSelectedOptions([...selectedOptions, optionValue]);
      console.log(selectedOptions);
    }
  };

  const DegreeFilters = (
    <div className="flex flex-col items-start border-l p-4">
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Doctoral Degree (Ph.D.)"
          onChange={handleOptionChange}
        />
        PhD
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Bachelor's Degree"
          onChange={handleOptionChange}
        />
        Bachelors
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Master's Degree"
          onChange={handleOptionChange}
        />
        Masters
      </label>
      <label className="text-start m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="Higher Secondary Education"
          onChange={handleOptionChange}
        />
        Higher Secondary Education
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="Secondary Education"
          onChange={handleOptionChange}
        />
        Secondary Education
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="High School Diploma"
          onChange={handleOptionChange}
        />
        Diploma
      </label>
    </div>
  );

  const IncomeFilters = (
    <div className="flex flex-col items-start border-l p-4">
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="PhD"
          onChange={handleOptionChange}
        />
        {"≤"} 150000
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Bachelors"
          onChange={handleOptionChange}
        />
        {"≤"} 250000
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Masters"
          onChange={handleOptionChange}
        />
        {"≤"} 500000
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="Diploma"
          onChange={handleOptionChange}
        />
        {"≤"} 800000
      </label>
    </div>
  );

  const SectorFilters = (
    <div className="flex flex-col items-start border-l p-4">
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Private"
          onChange={handleOptionChange}
        />
        Private
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="Government"
          onChange={handleOptionChange}
        />
        Government
      </label>
    </div>
  );

  const CasteFilters = (
    <div className="flex flex-col items-start border-l p-4">
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="SC"
          onChange={handleOptionChange}
        />
        SC
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="ST"
          onChange={handleOptionChange}
        />
        ST
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="OBC"
          onChange={handleOptionChange}
        />
        OBC
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          style={{ borderColor: "#F4F4F4" }}
          value="General"
          onChange={handleOptionChange}
        />
        General
      </label>
    </div>
  );

  const AgeFilters = (
    <div className="flex flex-col items-start border-l p-4">
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="10"
          onChange={handleOptionChange}
        />
        {"<"}10
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="Bachelors"
          onChange={handleOptionChange}
        />
        {"<"}18
      </label>
      <label className="m-2">
        <input
          type="checkbox"
          className="mr-2"
          value="25"
          onChange={handleOptionChange}
        />
        {"<"}25
      </label>
    </div>
  );
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Filter the data based on the search query
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
    console.log(filtered);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const onViewMoreButton = (p) => {
    setIsModalOpen(true);
    setModalData(p);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
          <div className="h-96 w-96 bg-[#F4F4F4]">
            <div className="flex flex-col ">
              <div className="flex flex-row m-4 justify-between items-center">
                <div>Filter</div>
                <button onClick={() => setIsFilterOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="border"></div>
              <div className="border-r h-full flex flex-row text-center ">
                <div className="flex flex-col w-[35%]">
                  <div
                    className={
                      selectedFilter === "degree"
                        ? `p-4 border-b bg-[#EBEAF2]`
                        : "border-b p-4"
                    }
                    onClick={() => setSelectedFilter("degree")}
                  >
                    Degree
                  </div>
                  <div
                    className={
                      selectedFilter === "income"
                        ? `p-4 border-b bg-[#EBEAF2]`
                        : "border-b p-4"
                    }
                    onClick={() => setSelectedFilter("income")}
                  >
                    Income
                  </div>
                  <div
                    className={
                      selectedFilter === "sector"
                        ? `p-4 border-b bg-[#EBEAF2]`
                        : "border-b p-4"
                    }
                    onClick={() => setSelectedFilter("sector")}
                  >
                    Sector
                  </div>
                  <div
                    className={
                      selectedFilter === "age"
                        ? `p-4 border-b bg-[#EBEAF2]`
                        : "border-b p-4"
                    }
                    onClick={() => setSelectedFilter("age")}
                  >
                    Age
                  </div>
                  <div
                    className={
                      selectedFilter === "caste"
                        ? `p-4 border-b bg-[#EBEAF2]`
                        : "border-b p-4"
                    }
                    onClick={() => setSelectedFilter("caste")}
                  >
                    Caste
                  </div>
                </div>
                <div className="">
                  {selectedFilter === "degree" && DegreeFilters}
                  {selectedFilter === "income" && IncomeFilters}
                  {selectedFilter === "sector" && SectorFilters}
                  {selectedFilter === "age" && AgeFilters}
                  {selectedFilter === "caste" && CasteFilters}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {isFilterOpen && (
        <div>
          <div>
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
              <div className="h-96 w-96 bg-[#F4F4F4]">
                <div className="flex flex-col ">
                  <div className="flex flex-row m-4 justify-between items-center">
                    <div>Filter</div>
                    <button
                      onClick={() => {
                        setIsFilterOpen(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="border"></div>
                  <div className="border-r h-full w-[35%] text-center">
                    <div>
                      <div className="flex flex-col">
                        <div className="p-4 border-b">Degree</div>
                        <div className="p-4 border-b">Income</div>
                        <div className="p-4 border-b">Sector</div>
                        <div></div>
                      </div>
                      <div>
                        {/* I want to display the filtering option based on options given aside and selected */}

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
      <div>
        <Nav page="All Schemes" />
        <div className="flex flex-row">
          <Sidebar selected="all" />
          <div className="w-5/6 p-6">
            <div className="flex flex-col">
              <div className="flex-row flex items-center">
                <div className="relative border rounded ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute z-0 left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className=" pl-10 pr-5 py-3 z-0 w-full rounded"
                    onChange={handleInputChange}
                    value={searchTerm}
                  />
                </div>

                <button
                  className="border px-5 py-3 mx-4 rounded flex text-[#010080]"
                  style={{ borderColor: "#010080" }}
                  onClick={() => {
                    setIsFilterOpen(!isFilterOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M21.6187 4.64343C21.5033 4.37672 21.312 4.14983 21.0686 3.99098C20.8253 3.83213 20.5406 3.74833 20.25 3.74999H3.74997C3.45966 3.75057 3.17575 3.83537 2.93269 3.99412C2.68962 4.15288 2.49785 4.37875 2.38063 4.64435C2.26341 4.90995 2.22579 5.20386 2.27232 5.49042C2.31886 5.77698 2.44755 6.04388 2.64279 6.25874L2.65029 6.26718L8.99998 13.0472V20.25C8.99991 20.5215 9.07353 20.7879 9.21297 21.0208C9.35241 21.2537 9.55246 21.4445 9.79178 21.5726C10.0311 21.7008 10.3007 21.7616 10.5719 21.7486C10.843 21.7356 11.1056 21.6492 11.3315 21.4987L14.3315 19.4981C14.5372 19.3611 14.7058 19.1755 14.8224 18.9576C14.939 18.7398 15 18.4965 15 18.2494V13.0472L21.3506 6.26718L21.3581 6.25874C21.5554 6.04486 21.6853 5.77761 21.7317 5.49034C21.778 5.20307 21.7387 4.90851 21.6187 4.64343ZM13.9068 12.0262C13.6463 12.3024 13.5008 12.6675 13.5 13.0472V18.2494L10.5 20.25V13.0472C10.5008 12.6661 10.3559 12.2992 10.095 12.0216L3.74997 5.24999H20.25L13.9068 12.0262Z"
                      fill="#010080"
                    />
                  </svg>
                  Filter
                </button>
              </div>
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
                        <ConvertDate value={p.registrationEndDate} />
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
      </div>
    </div>
  );
}

export default AllSchemes;

{
  /* <img
                          src={p.image}
                          alt=""
                          className="w-[50px] mx-2 h-[45px] rounded-full"
                        /> */
}
