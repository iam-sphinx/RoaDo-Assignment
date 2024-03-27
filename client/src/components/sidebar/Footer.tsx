import setting from "../../assets/settings.png";
import logout from "../../assets/logout.png";
import explore from "../../assets/explore.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center border-t border-[#EAECF0] px-6 py-3">
      <img src={setting} alt="not found" className="h-5" />
      <img src={logout} alt="not found" className="h-5" />
      <img src={explore} alt="not found" className="h-5" />
    </div>
  );
};

export default Footer;
