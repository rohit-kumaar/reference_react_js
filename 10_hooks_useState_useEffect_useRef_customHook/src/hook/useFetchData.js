import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return data;
}
