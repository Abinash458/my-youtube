import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="my-2 flex items-center bg-gray-100 p-2 shadow-sm rounded-sm">
      <img className="w-8 h-8" alt="userImage" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
