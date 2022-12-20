import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },

    }
};

const labels = ["january", "february", "march", "april", "may", "june"]
export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: "Total Win",
            data: [30, 100, 40, 160, 50, 70, 150],
            borderColor: "hsl(255 95% 68%)",
            backgroundColor: "hsl(255 95% 68% / 50%)",
            lineTension: 0.2
        },
        {
            fill: true,
            label: "Total Loss",
            data: [150, 40, 160, 50, 10, 150, 10],
            borderColor: "hsl(197 100% 50%)",
            backgroundColor: "hsl(197deg 100% 50%/50%)",
            lineTension: 0.2
        }
    ]
};
export function StackedChart() {

    return <Line options={options} data={data} />;
}
