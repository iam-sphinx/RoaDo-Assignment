import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import DropDown from "./DropDown";

type Props = {
  options: {
    title: string;
    list: string[];
    icon: JSX.Element;
  };
};
const MenuItem = ({ options }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={`flex items-center justify-between text-xs leading-[22px] font-semibold px-5 h-[46px] cursor-pointer ${
          active ? "text-black" : "text-[#5F6980]"
        }`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="flex gap-2 items-center">
          <div className="h-6">{options.icon}</div>
          <h1>{options.title}</h1>
        </div>
        {active ? (
          <KeyboardArrowDownRoundedIcon />
        ) : (
          <KeyboardArrowUpRoundedIcon />
        )}
      </div>
      <div className="px-5">{active && <DropDown list={options.list} />}</div>
    </>
  );
};

export default MenuItem;
