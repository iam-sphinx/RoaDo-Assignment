import bolt from "../../assets/bolt.png";

const Banner = () => {
  return (
    <div className="sm:h-32 w-full bg-[#282828] rounded-2xl sm:px-9 p-8 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex flex-col items-center sm:items-start gap-2">
        <h1 className="font-semibold text-[26px] sm:text-[28px] leading-[38px] sm:leading-[34px] tracking-tighter text-white">
          Unlock premium stats
        </h1>
        <h2 className="font-normal text-sm text-white  text-center">
          Get up to 10TB of storage for a limited time
        </h2>
      </div>

      <button className="sm:py-[9px] py-2 sm:px-6 px-5 bg-white rounded-[39px] flex items-center justify-center gap-1">
        <img src={bolt} alt="not found" className="h-5" />
        <h1 className="font-semibold tracking-tighter sm:text-base text-sm sm:leading-[28px] leading-6 text-[#282828]">
          Upgrade
        </h1>
      </button>
    </div>
  );
};

export default Banner;
