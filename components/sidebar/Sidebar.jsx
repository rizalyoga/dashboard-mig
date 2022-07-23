import React from "react";
import styles from "./Sidebar.module.scss";
import Image from "next/image";

// Icons
import {
  TbHome2,
  TbTicket,
  TbCheckupList,
  TbBuildingSkyscraper,
  TbUsers,
  TbLogout,
} from "react-icons/tb";
import { BiLayer, BiBox, BiCube } from "react-icons/bi";
import { FaSearchDollar } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar__container}>
      <div className={styles.sidebar__logo_container}>
        <Image
          src="/asset/triangle.png"
          width={50}
          height={50}
          alt="dashboard-logo"
        />
      </div>
      <div className={styles.sidebar__company_menu_container}>
        <TbHome2 className={styles.sidebar__icons} />
        <TbTicket className={styles.sidebar__icons} />
        <TbCheckupList className={styles.sidebar__icons} />
        <BiBox className={styles.sidebar__icons} />
        <TbBuildingSkyscraper className={styles.sidebar__icons} />
      </div>
      <div className={styles.sidebar__user_menu_container}>
        <TbUsers className={styles.sidebar__icons} />
        <BiLayer className={styles.sidebar__icons} />
        <BiCube className={styles.sidebar__icons} />
        <FaSearchDollar className={styles.sidebar__icons} />
      </div>
      <div className={styles.sidebar__logout_container}>
        <TbLogout className={styles.sidebar__icons} />
      </div>
    </div>
  );
};

export default Sidebar;
