type Props = {
  data: {
    source: {
      title: string;
      element: JSX.Element;
    };
    amount: number;
    status: string;
    userID: number;
    joined: string;
    group: string;
  };
};
const TableRow = ({ data }: Props) => {
  return (
    <div className="h-[76px] grid grid-cols-6 px-6 border-b border-[#EAECF0] text-[#5F6980] text-sm font-normal place-items-start items-center">
      <div className="flex gap-3 items-center text-[#282828] font-semibold">
        {data.source.element}
        {data.source.title}
      </div>
      <h1 className="">{data.amount}</h1>
      <div
        className={`py-[2px] px-[10px] text-xs leading-5 font-semibold rounded-full ${
          data.status === "Active"
            ? "bg-[#DCFFF5] text-[#20C997]"
            : data.status === "Pending"
            ? "bg-[#FFEAD8] text-[#FD7E14]"
            : "bg-[#F2F4F7] text-[#5F6980]"
        }`}
      >
        {data.status}
      </div>
      <h1>{data.userID}</h1>
      <h1>{data.joined}</h1>
      <h1>{data.group}</h1>
    </div>
  );
};

export default TableRow;
