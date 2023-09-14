import React from "react";
import Link from "next/link";
import { AiOutlineUp,AiOutlineDown } from "react-icons/ai";
const Dropdown = ({ name, dropdownItems }) => {
  return (
    
    <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
      <li>
        <details>
          <summary>
            {name}
          </summary>
          <ul className="p-2 bg-base-100 w-52 shadow">
          {dropdownItems.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
          </ul>
        </details>
      </li>
    </ul>
  </div>

  );
};
export default Dropdown;