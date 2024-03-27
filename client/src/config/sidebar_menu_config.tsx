import SupportOutlinedIcon from "@mui/icons-material/SupportOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import dashboardIcon from "../assets/dashboard.png";

interface MenuItem {
  title: string;
  list: string[];
  icon: JSX.Element;
}

export const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    list: ["Analytics", "Finance", "Job Board"],
    icon: <img src={dashboardIcon} alt="" className="h-full object-cover" />,
  },
  {
    title: "Messages",
    list: [],
    icon: <MarkunreadOutlinedIcon width={20} height={20} />,
  },
  {
    title: "Friends",
    list: [],
    icon: <PermIdentityOutlinedIcon width={20} height={20} />,
  },
  {
    title: "Apps",
    list: [],
    icon: <GridViewOutlinedIcon width={20} height={20} />,
  },
];

interface PageItem {
  title: string;
  list: string[];
  icon: JSX.Element;
}

export const pagesItems: PageItem[] = [
  {
    title: "Help Center",
    list: [],
    icon: <SupportOutlinedIcon width={20} height={20} />,
  },
  {
    title: "File Manager",
    list: [],
    icon: <FolderOutlinedIcon width={20} height={20} />,
  },
];
