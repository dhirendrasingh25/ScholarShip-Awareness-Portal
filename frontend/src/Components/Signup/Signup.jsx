import React, { useState } from "react";
import bgimage from "../../images/Bg-scholar.jpg";
// import axios from 'axios';

const QualificationDropdown = () => {
    
    
  const [degree, setDegree] = useState("");
  const [passingYear, setPassingYear] = useState("");

  const degreeOptions = ["Bachelor's", "Master's", "Ph.D."];
  const yearOptions = Array.from({ length: 8 }, (_, i) =>
    String(new Date().getFullYear() - i)
  );
 
  return (
    <div>
      <label htmlFor='degree'>Degree:</label>
      <select
        id='degree'
        name='degree'
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
      >
        <option value='' disabled>
          Select Degree
        </option>
        {degreeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor='passingYear'>Passing Year:</label>
      <select
        id='passingYear'
        name='passingYear'
        value={passingYear}
        onChange={(e) => setPassingYear(e.target.value)}
        className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
      >
        <option value='' disabled>
          Select Year
        </option>
        {yearOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Signup = () => {
    const styles = {
        backgroundImage: `url("${bgimage}")`,
      };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    contactLocation: "",
  });

  const   handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend or perform further actions here
    console.log(formData);
  };

  return (
    // <div className="min-h-screen flex items-center justify-center">
    <>
      {/* <div className="bg-cover h-screen relative">
        /* {bgimage}
    </div>   */}
      <div
        className='bg-cover h-screen absolute bg-slate-950'
        style={{ backgroundImage: bgimage }}
      ></div>
      <div className='mt-24 max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
        <h2 className='flex justify-center text-2xl font-semibold mb-4'>
          Sign Up with Scholarmate
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='age'
              name='age'
              value={formData.age}
              onChange={handleChange}
              className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='contactLocation'>Contact Location:</label>
            <input
              type='text'
              id='contactLocation'
              name='contactLocation'
              value={formData.contactLocation}
              onChange={handleChange}
              className='block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
              required
            />
          </div>
          <QualificationDropdown />
          <div className='mt-4'>
            <button
              type='submit'
              className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
    // </div>
  );
};

export default Signup;
