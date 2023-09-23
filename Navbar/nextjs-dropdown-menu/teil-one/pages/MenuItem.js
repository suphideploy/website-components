import React from 'react';
import styles from "@/styles/Menu.module.css";
import { LolosArrowDown } from 'react-icons/io';
import { RiArrowDownSFill } from 'react-icons/ri';
function MenuItem({item, depth}) {

  return (
   item.submenu && item.submenu.length > 0 ? (
        <li className={styles.parent}>
            <button className='styles.btnStyle'>


            {item.title}
            {depth > 1 ? (
            <span className={styles.ArrowRight}></span>
            ):(
            <RiArrowDownSFill className='flex align-center' />
            )}
            </button>
                 
        </li>

   ):(
        <li>{item.title}</li>
   )
  );
}

export default MenuItem