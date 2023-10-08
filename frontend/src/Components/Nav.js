import React from "react";
import Logo from "../assets/Logo.jpeg";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  return (
    <div className="border-b h-[73px]">
      <div className="flex flex-row items-center">
        <div className="border-r-2 bg-[#EBEAF2]">
          <img src={Logo} className=" my-3 mx-4 rounded-full h-12 w-12 "></img>
        </div>
        <div className="ml-5 text-xl">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-3 icon-lg" onClick={()=>navigate(-1)} style={{cursor:"pointer"}}/>
        {props.page}
        </div>
      </div>
    </div>
  );
}

export default Nav;
