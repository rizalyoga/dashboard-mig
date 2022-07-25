import React from "react";
import styles from "./Sidebar.module.scss";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Image from "next/image";
import Swal from "sweetalert2";

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
  const router = useRouter();

  // Set active path
  const checkActivePage = (path) => {
    if (router.route == path) {
      return styles.active;
    }
  };

  // Move Page Function
  const setDirection = (path) => {
    router.push(`/${path}`);
  };

  // Logout Function
  const doLogout = () => {
    Swal.fire({
      title: "Are you sure to Logout?",
      color: "rgb(83,83,83)",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30d338",
      cancelButtonColor: "#e61b47",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("userAuth");
        router.push("/login");
      }
    });
  };

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
        <TbBuildingSkyscraper
          className={`${styles.sidebar__icons} ${checkActivePage("/company")}`}
          onClick={() => setDirection("/company")}
        />
      </div>
      <div className={styles.sidebar__user_menu_container}>
        <TbUsers
          className={`${styles.sidebar__icons} ${checkActivePage(
            "/customers"
          )}`}
          onClick={() => setDirection("customers")}
        />
        <BiLayer className={styles.sidebar__icons} />
        <BiCube className={styles.sidebar__icons} />
        <FaSearchDollar className={styles.sidebar__icons} />
      </div>
      <div className={styles.sidebar__logout_container}>
        <TbLogout className={styles.sidebar__icons} onClick={doLogout} />
      </div>
    </div>
  );
};

export default Sidebar;
