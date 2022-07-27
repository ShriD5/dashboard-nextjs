import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Seller Cash-flow Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Cashflow Required",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Cashflow Available",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function CashflowChart() {
  return (
    <Flex width={600} height={600}>
      <Bar options={options} data={data} />
    </Flex>
  );
}
