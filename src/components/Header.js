import { useDispatch } from "react-redux";
import { APP_LOGO, MENU_ICON, USER_ICON } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src={MENU_ICON}
          onClick={handleMenuToggle}
        />
        <img className="h-8 mx-2" alt="app-logo" src={APP_LOGO} />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-1 flex justify-end">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
