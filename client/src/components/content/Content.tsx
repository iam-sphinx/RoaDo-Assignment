import Banner from "../cards/Banner";
import MatricCard from "../cards/MatricCard";
import PerformanceCard from "../cards/performanceCard/PerformanceCard";
import InstalledAppsCard from "../installedAppsCard/InstalledAppsCard";

const Content = () => {
  return (
    <div className="flex-1 flex flex-col px-8 gap-8 mt-8">
      <Banner />
      <div className="flex sm:gap-8 gap-4 justify-between flex-wrap">
        <MatricCard
          title="Revenue"
          amount="56945"
          change="45"
          from="4.6"
          isPercent={false}
        />
        <MatricCard
          title="Users"
          amount="76.8"
          change="-1.7"
          from="4.6"
          isPercent={true}
        />
        <MatricCard
          title="New Signups"
          amount="116"
          change="0.00"
          isPercent={false}
        />
        <MatricCard
          title="Retention"
          amount="12.67"
          change="0.6"
          from="4.6"
          isPercent={true}
        />
      </div>

      <PerformanceCard />
      <InstalledAppsCard />
    </div>
  );
};

export default Content;
