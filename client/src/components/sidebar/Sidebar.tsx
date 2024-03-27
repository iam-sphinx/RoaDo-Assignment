import logo from "../../assets/Logo.png";
import Menu from "./Menu";
import { menuItems, pagesItems } from "../../config/sidebar_menu_config";
import Footer from "./Footer";
const Sidebar = () => {
  return (
    <div className="hidden max-w-[232px] flex-1 bg-[#FFFFFF] pt-[18px] border-r border-[#EAECF0] sm:flex flex-col justify-between">
      <div>
        <img
          src={logo}
          alt="not found"
          className="w-[99.2px] h-[22.25px] ml-5"
        />
        <div className="flex flex-col gap-8 mt-12">
          <Menu options={menuItems} header="DASHBOARD" />
          <Menu options={pagesItems} header="PAGES" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
