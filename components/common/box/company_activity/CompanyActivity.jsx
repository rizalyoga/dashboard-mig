import React from "react";
import styles from "./CompanyActivity.module.scss";

// Data
import { aktivitasData } from "@/utils/data/aktivitasData";

const CompanyActivity = () => {
  return (
    <div className={styles.box__company_activity_container}>
      <div className={styles.company__activity_inner_container}>
        <div className={styles.activty__header}>
          <h4>Aktivitas</h4>
        </div>
        {aktivitasData.map((aktivitas) => (
          <div className={styles.activity__card_container} key={aktivitas.id}>
            <p className={styles.card__activity}>{aktivitas.kegiatan}</p>
            <p className={styles.card__time_activity}>{aktivitas.waktu}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyActivity;
