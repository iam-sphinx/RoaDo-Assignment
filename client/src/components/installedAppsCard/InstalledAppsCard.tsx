import Header from "../cards/utils/Header";
import AppTable from "./AppTable";

const InstalledAppsCard = () => {
  return (
    <div className="w-full h-[588px] rounded-xl pb-6 bg-white flex flex-col">
      <Header title="Installed apps" />
      <AppTable />
    </div>
  );
};

export default InstalledAppsCard;
