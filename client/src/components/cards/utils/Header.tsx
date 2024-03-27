import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
type Props = {
  title: string;
};
const Header = ({ title }: Props) => {
  return (
    <div className="max-h-[62px] flex-1 w-full border-b border-[#EAECFO] px-6 flex justify-between items-center">
      <h1 className="font-semibold text-lg text-[#282828]">{title}</h1>
      <MoreVertOutlinedIcon
        fontSize="medium"
        className="cursor-pointer text-[#9D9FA1]"
      />
    </div>
  );
};

export default Header;
