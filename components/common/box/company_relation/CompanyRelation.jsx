import React from "react";
import styles from "./CompanyRelation.module.scss";

// Icons
import { BsShare } from "react-icons/bs";

const CompanyRelation = () => {
  return (
    <div className={styles.box__company_relation_container}>
      <div className={styles.company_relation_inner_container}>
        <div className={styles.company__realtion_header}>
          <h4>Relasi</h4>
          <p>Lihat Semua</p>
        </div>
        <div className={styles.relation__card_container}>
          <div className={styles.relation__card_content}>
            <BsShare className={styles.share_icon} />
            <div className={styles.relation__content_desc}>
              <h2>20</h2>
              <p>Memiliki</p>
            </div>
          </div>
        </div>
        <div className={styles.relation__card_container}>
          <div className={styles.relation__card_content}>
            <BsShare className={styles.share_icon} />
            <div className={styles.relation__content_desc}>
              <h2>108</h2>
              <p>Menggunakan</p>
            </div>
          </div>
        </div>
        <div className={styles.relation__card_container}>
          <div className={styles.relation__card_content}>
            <BsShare className={styles.share_icon} />
            <div className={styles.relation__content_desc}>
              <h2>67</h2>
              <p>Meminjam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRelation;
