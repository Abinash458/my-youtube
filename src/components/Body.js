import SideBar from "./SIdeBar";
import MaintainContainer from "./MaintainContainer";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {isMenuOpen && <SideBar />}
      <MaintainContainer />
    </div>
  );
};

export default Body;
