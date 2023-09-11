import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
        {/* <Navbar/> */}
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
