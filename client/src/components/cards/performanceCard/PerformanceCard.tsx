import LineChart from "./LineChart";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { data1, data2 } from "../../../config/chart_data_config";

const PerformanceCard = () => {
  return (
    <div className="h-[458px] w-full pb-6 flex flex-col justify-between gap-8 bg-white rounded-xl">
      <Header title="Performance" />
      <LineChart data1={data1} data2={data2} />
      <Footer />
    </div>
  );
};

export default PerformanceCard;
