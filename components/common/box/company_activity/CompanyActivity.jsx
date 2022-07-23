import React from "react";
import styles from "./CompanyActivity.module.scss";

const CompanyActivity = () => {
  return (
    <div className={styles.box__company_activity_container}>
      <div className={styles.company__activity_inner_container}>
        <div className={styles.activty__header}>
          <h4>Activitas</h4>
        </div>
        <div className={styles.activity__card_container}>
          <p className={styles.card__activity}>
            Yusron baru saja menambahkan lokasi baru kantor cabang Jagakarsa
          </p>
          <p className={styles.card__time_activity}>Hari ini, 06.00</p>
          <p></p>
        </div>
        <div className={styles.activity__card_container}>
          <p className={styles.card__activity}>
            Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor
            Cabang Tebet
          </p>
          <p className={styles.card__time_activity}>Kemarin, 17.32</p>
          <p></p>
        </div>
        <div className={styles.activity__card_container}>
          <p className={styles.card__activity}>
            Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi
          </p>
          <p className={styles.card__time_activity}>Kemarin, 17.32</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CompanyActivity;
