import React, { useState, useEffect } from "react";

const ConvertDate = ({ value }) => {
  const [localDate, setLocalDate] = useState("");

  useEffect(() => {

    const convertToNormalDate = (isoDateTime) => {
      const date = new Date(isoDateTime);
      const monthName = date.toLocaleString("en-US", { month: "long" });
      const year = date.getFullYear();
      return `${date.getDate()} ${monthName}, ${year}`;
    };

    const isoDateTime = value;

    setLocalDate(convertToNormalDate(isoDateTime));
  }, [value]);

  return localDate;
};

export default ConvertDate;