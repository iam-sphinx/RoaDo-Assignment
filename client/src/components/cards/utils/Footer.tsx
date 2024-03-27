const Footer = () => {
  return (
    <div className="max-h-[22px] flex-1 flex items-center gap-8 justify-center">
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full bg-[#5A9CFE]"></div>
        <h1 className="font-normal text-sm leading-[22px] text-[#5F6980]">
          Instagram
        </h1>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-3 h-3 rounded-full bg-[#20C997]"></div>
        <h1 className="font-normal text-sm leading-[22px] text-[#5F6980]">
          Facebook
        </h1>
      </div>
    </div>
  );
};

export default Footer;
