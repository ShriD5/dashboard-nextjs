import React from "react";
import { Flex } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Seller Overall Rating chart",
    },
  },
};

const data = {
  labels: [
    "Seller Profile",
    "Cashflow Position",
    "Operating Risk",
    "Buyer Associated Risk",
    "Payment Risk",
    "Bank Association Risk",
    "Others",
  ],
  datasets: [
    {
      data: [10, 25, 25, 10, 15, 5, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(230,230,250,1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function RatingChart() {
  return (
    <Flex width={400} height={400}>
      <Doughnut data={data} options={options} />
    </Flex>
  );
}
