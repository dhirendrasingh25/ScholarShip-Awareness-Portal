import React, { useEffect } from "react";
import Nav from "../../../Components/Nav";
import Sidebar from "../../../Components/SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import profileMain from "../../../images/userProfile.png";
import profileCover from "../../../images/profileCover.jpg";

function StudentProfile() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/students/" + id).then((res) => {
      setStudent(res.data);
    });
  }, []);

  if (student) {
    console.log(student);
    return (
      <div className=''>
        <Nav page='Profile' />
        <div className='flex flex-row'>
          <Sidebar selected='profile' />
          <div className='w-full'>
            <div className='w-full relative h-32'>
              <div className='w-full h-32 overflow-hidden'>
                <img
                  src={profileCover}
                  alt={"Profile-cover"}
                  className='w-full object-cover'
                />
              </div>
              <div className='w-28 absolute -bottom-16 left-8 border-2 rounded'>
                <img
                  src={profileMain}
                  alt={student.fullName}
                  className='w-full object-cover'
                />
              </div>
              <div className='ml-40 p-3'>
                <h2 className='font-semibold text-lg'>{student.fullName}</h2>
                <p>{student.gender}</p>
              </div>
            </div>

            <div className='mt-24 ml-8'>
              <h2 className='text-2xl font-semibold mb-6'>
                User's Informations
              </h2>

              <p>Highest Degree: {student.educationalDetails}</p>
              <p className='mt-1'>Age: {student.age}</p>
              <p className='mt-1'>Email: {student.email}</p>
              <p className='mt-1'>Address: {student.address}</p>
              <p className='mt-1'>
                Interested Fields:{" "}
                {student.interestedScholarshipCategories.map((item) => {
                  return `${item},`;
                })}
              </p>
            </div>

            <div className='ml-8 mt-14'>
              <h2 className='text-2xl font-semibold mb-6'>
                Stared Scholarships
              </h2>
              <table className=''>
                <tr className='bg-neutral-300'>
                  <th>Logo</th>
                  <th>Scholarship</th>
                  <th>Organization</th>
                  <th>Last Date</th>
                  <th>Sector</th>
                  <th>Degree</th>
                  <th>Details</th>
                </tr>
                {student.staredScholarships.map((item) => {
                  return (
                    <tr className='bg-neutral-100 [&>*]:p-4 border-b-2'>
                      <td>{item.course}</td>
                      <td>{item.title}</td>
                      <td>{item.organizationName}</td>
                      <td>{item.registrationEndDate}</td>
                      <td>{item.course}</td>
                      <td>{item.field}</td>
                      <td>view more</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Loading...</h2>;
  }
}

export default StudentProfile;
