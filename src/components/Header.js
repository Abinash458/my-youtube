import { useDispatch, useSelector } from "react-redux";
import {
  APP_LOGO,
  MENU_ICON,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { chacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [sugestions, setSugestions] = useState([]);
  const [showSugestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*
  key = i
  - render the component
  - useEffect();
  - start timer => make api call after 200 ms

  key - ip
  - destroy the component (useEffect return method)
  re-render the component
  - useEffect()
  - start timer => make pai call after 200ms
  */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSugestions(json[1]);
    dispatch(
      chacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="col-span-10 pl-40">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="py-2 px-5 bg-gray-100 border border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSugestions && sugestions.length > 0 && (
          <div className="fixed bg-white py-2 rounded-lg shadow-lg px-2 w-[39rem] border border-gray-100">
            <ul>
              {sugestions?.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
