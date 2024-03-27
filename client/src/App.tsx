import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#F2F4F7]">
      <div className="flex-1 overflow-hidden flex max-w-[1440px] bg-[#F2F4F7]">
        <Sidebar />
        <div className="flex-1overflow-hidden">
          {/* Apply overflow-hidden class here */}
          <Navbar />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
