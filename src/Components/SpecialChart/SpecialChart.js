import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SpecialChart = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        const phoneData = loadedData.map((phones) => {
          const parts = phones.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhones(phoneData);
      });
  }, []);
  console.log(phones);
  return (
      <div className="duration-500 ease-in-out">
          <BarChart  width={1200} height={600} data={phones}>
        <Bar dataKey="value" fill="#0984e3" />
        <XAxis dataKey="name" fill="#00cec9"/>
        <Tooltip />
        <YAxis dataKey="value"></YAxis>
      </BarChart>
      </div>
  );
};

export default SpecialChart;
