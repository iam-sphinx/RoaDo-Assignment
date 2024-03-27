type Props = {
  title: string;
  amount: string;
  change: string;
  from?: string;
  isPercent: boolean;
};
const MatricCard = ({ title, amount, change, from, isPercent }: Props) => {
  let currencyAmt = "";
  if (!isPercent) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    currencyAmt = formatter.format(Number(amount));
  }

  return (
    <div className="sm:w-[262px] h-[162px] w-full bg-white rounded-xl p-5 flex flex-col justify-between">
      <div>
        <h1 className="font-normal text-base leading-[26px] text-[#5F6980]">
          {title}
        </h1>
        <h1 className="font-semibold text-[26px] leading-[40px] text-[#282828]">
          {isPercent ? `${amount}%` : currencyAmt}
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`py-[2px] px-[10px] rounded-xl text-xs ${
            Number(change) > 0 && "bg-[#DCFFF5] text-[#20C997]"
          } ${Number(change) < 0 && "bg-[#FFE0E3] text-[#DC3545]"} ${
            Number(change) == 0 && "bg-[#F2F4F7] text-[#5F6980]"
          }`}
        >
          {Number(change) == 0
            ? "0.00"
            : Number(change) > 0
            ? `+${change}%`
            : `${change}%`}
        </div>
        <h1 className="font-semibold text-xs leading-[20px] text-[#9D9FA1]">
          {from && `from ${from}%`}
        </h1>
      </div>
    </div>
  );
};

export default MatricCard;
