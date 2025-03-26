import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PaymentsChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Payments",
        data: data.values,
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Payments Overview</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PaymentsChart;
