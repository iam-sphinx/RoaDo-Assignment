import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import profileImg from "../../assets/profile.png";
import ProfilePic from "./ProfilePic";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="h-[66px] flex justify-between items-center bg-white sm:border-b border-[#EAECF0] px-8">
        <div className="flex items-center justify-center sm:hidden">
          <img src={logo} alt="" className="h-[28px]" />
        </div>
        <div className="hidden w-[905px] h-[46px] px-4 sm:flex items-center justify-between gap-2 border border-[#EAECF0] rounded-[6px] ">
          <SearchRoundedIcon className="cursor-pointer" />
          <input
            type="text"
            className="flex-1 text-[#9D9FA1] font-normal text-sm outline-none overflow-ellipsis"
            placeholder="Search..."
          />
        </div>

        <div className="flex gap-8 items-center justify-end flex-1 text-[#5F6980]">
          <div className="hidden sm:flex items-center justify-center gap-8">
            <div className="relative cursor-pointer">
              <NotificationsOutlinedIcon />
              <div className="w-[8px] h-[8px] rounded-[4px] bg-[#E25563] absolute top-[-1.71px] left-[19.71px]"></div>
            </div>
            <DateRangeOutlinedIcon className="cursor-pointer" />
            <GridViewOutlinedIcon className="cursor-pointer" />
          </div>

          <ProfilePic imgUrl={profileImg} />
        </div>
      </div>

      <div className="w-full bg-white flex items-center gap-2 px-6 sm:hidden">
        <div className="flex items-center rounded-[6px] border border-[#EAECF0] h-[46px]">
          <SearchRoundedIcon className="cursor-pointer" />
          <input
            type="text"
            className="flex-1 text-[#9D9FA1] font-normal text-sm outline-none overflow-ellipsis"
            placeholder="Search..."
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
