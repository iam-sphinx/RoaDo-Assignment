import MenuItem from "./MenuItem";

type Props = {
  options: { title: string; list: string[]; icon: JSX.Element }[];
  header: string;
};

const Menu = ({ options, header }: Props) => {
  return (
    <div>
      <h1 className="font-semibold text-xs leading-5 text-[#9D9FA1] tracking-[3.5px] ml-5 mb-4">
        {header}
      </h1>
      {options?.map((item, idx) => {
        return <MenuItem key={idx} options={item} />;
      })}
    </div>
  );
};

export default Menu;
