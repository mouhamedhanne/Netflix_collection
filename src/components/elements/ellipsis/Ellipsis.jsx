import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function Ellipsis() {
  return (
    <div
      className="w-full h-full bg-white/50 rounded-full
   flex justify-center items-center hover:cursor-pointer
    hover:bg-mauve_primary "
    >
      <div className="text-gray-700 hover:text-white">
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
}
