import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

// Icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const router = useRouter();

  const getPath = () => {
    if (router.route == "/customers") {
      return "Customers";
    } else if (router.route == "/customers/add") {
      return "Tambah Customer";
    } else if (router.route == "/customers/edit/[id]") {
      return "Edit Customer";
    } else {
      return "Mitramas Infosys Global";
    }
  };

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__left_content}>
        <div className={styles.root_page}>
          <p>Perusahaan</p>
        </div>
        <p className={styles.arrow}>&gt;</p>
        <div className={styles.sub_page}>
          <p>{getPath()}</p>
        </div>
      </div>
      <div className={styles.navbar__right_content}>
        <div className={styles.activity_container}>
          <AiOutlineSearch className={styles.icon} />
          <IoIosNotificationsOutline className={styles.icon} />
        </div>
        <div className={styles.user_profile}>
          <Image
            src="/asset/user.jpg"
            height={30}
            width={30}
            alt="user-profile-image"
            className={styles.user_profile_image}
          />
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
