import { useState } from "react";

type Props = {
  list: string[];
};

const DropDown = ({ list }: Props) => {
  const [active, setActive] = useState(list[0] ?? "");

  return (
    <div className="space-y-3">
      {list?.map((item, idx) => {
        return (
          <li
            key={idx}
            className={`list-none ml-8 cursor-pointer ${
              active === item ? "text-black" : "text-[#5F6980]"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default DropDown;
