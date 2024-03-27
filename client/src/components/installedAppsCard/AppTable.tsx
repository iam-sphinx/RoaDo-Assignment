import { useState } from "react";
import { installedAppData } from "../../config/installed_apps_config";
import TableRow from "./TableRow";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const AppTable = () => {
  const [tHeaders, _] = useState([
    "Source",
    "Amount",
    "Status",
    "User ID",
    "Joined",
    "Group",
  ]);
  return (
    <div>
      <div className="grid grid-cols-6 px-6 h-[54px] bg-[#F9FAFB] text-[#5F6980] font-normal text-sm leading-[22px] place-items-start items-center">
        {tHeaders.map((item, idx) => {
          return <h1 key={idx}>{item}</h1>;
        })}
      </div>

      {installedAppData.map((item, idx) => {
        return <TableRow data={item} key={idx} />;
      })}

      <div className="flex items-center justify-center gap-3 text-[#282828] mt-6">
        <ArrowBackRoundedIcon />
        <h1 className="text-[18px] leading-[30px] font-normal">1/15</h1>
        <ArrowForwardRoundedIcon />
      </div>
    </div>
  );
};

export default AppTable;
