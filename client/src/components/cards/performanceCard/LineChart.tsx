import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  ChartArea,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler
);

type Props = {
  data1: number[];
  data2: number[];
};

function LineChart({ data1, data2 }: Props) {
  let width: number;
  let height: number;
  let gradient1: CanvasGradient | null;
  let gradient2: CanvasGradient | null;

  function getGradient(
    ctx: CanvasRenderingContext2D,
    chartArea: ChartArea,
    data: boolean
  ): CanvasGradient {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;

    if (
      !data &&
      (!gradient1 || width !== chartWidth || height !== chartHeight)
    ) {
      // Create the gradient because this is either the first render
      // or the size of the chart has changed
      width = chartWidth;
      height = chartHeight;
      gradient1 = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient1.addColorStop(1, "#4285F440");
      gradient1.addColorStop(0, "#4285F400");
    } else if (
      data &&
      (!gradient2 || width !== chartWidth || height !== chartHeight)
    ) {
      width = chartWidth;
      height = chartHeight;
      gradient2 = ctx.createLinearGradient(
        0,
        chartArea.bottom,
        0,
        chartArea.top
      );
      gradient2.addColorStop(1, "#20C99721");
      gradient2.addColorStop(0, "#20C99700");
    }

    return data ? gradient2! : gradient1!;
  }

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: data1,
        borderColor: "#679CF6",
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea, false);
        },
        fill: "origin",
        tension: 0.4,
      },
      {
        data: data2,
        borderColor: "#20C997",
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getGradient(ctx, chartArea, true);
        },
        fill: "origin",
        tension: 0.4,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
        },
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="flex-1 px-5">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
