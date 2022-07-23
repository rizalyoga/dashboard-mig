import React from "react";
import styles from "./CompanyLocation.module.scss";

// Icons
import { BiBuildingHouse } from "react-icons/bi";
import { BsWrench } from "react-icons/bs";
import { TbBuildingWarehouse } from "react-icons/tb";

const CompanyLocation = () => {
  return (
    <div className={styles.box__company__location_container}>
      <div className={styles.company__location_inner_container}>
        <div className={styles.company__location_header}>
          <h4>Lokasi</h4>
          <p>Lihat Semua</p>
        </div>
        <div className={styles.company__location_content}>
          <div className={styles.company__location_card}>
            <div className={styles.location_icon}>
              <BiBuildingHouse className={styles.icon} />
            </div>
            <div className={styles.location_desc}>
              <div className={styles.location_desc_inner}>
                <h4>20</h4>
                <p>Induk</p>
              </div>
            </div>
          </div>
          <div className={styles.company__location_card}>
            <div className={styles.location_icon}>
              <BsWrench className={styles.icon} />
            </div>
            <div className={styles.location_desc}>
              <div className={styles.location_desc_inner}>
                <h4>3</h4>
                <p>Sub Lokasi Level 1</p>
              </div>
            </div>
          </div>
          <div className={styles.company__location_card}>
            <div className={styles.location_icon}>
              <TbBuildingWarehouse className={styles.icon} />
            </div>
            <div className={styles.location_desc}>
              <div className={styles.location_desc_inner}>
                <h4>1</h4>
                <p>Sub Lokasi Level 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLocation;
