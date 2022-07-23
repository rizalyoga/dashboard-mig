import React from "react";
import styles from "./BankAccount.module.scss";

// Icons
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";

const BankAccount = () => {
  return (
    <div className={styles.box__company_bank_container}>
      <div className={styles.company_bank_inner_container}>
        <div className={styles.company__bank_header}>
          <h4>Akun Bank</h4>
          <p>+ Tambah Akun Bank</p>
        </div>
        <div className={styles.company__bank_content}>
          <div className={styles.bank__card_container}>
            <div className={styles.bank__visa_image}>
              <h3>VISA</h3>
            </div>
            <div className={styles.bank__description}>
              <div className={styles.bank__header}>
                <p>Bank PH Bukopin</p>
                <div className={styles.action_container}>
                  <MdOutlineModeEditOutline className={styles.edit_action} />
                  <BsTrash className={styles.delete_action} />
                </div>
              </div>
              <div className={styles.bank__data_content}>
                <div className={styles.info_customers}>
                  <p>***1234 - Yusron Taufiq</p>
                  <p>IDR</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bank__card_container}>
            <div className={styles.bank__visa_image}>
              <h3>VISA</h3>
            </div>
            <div className={styles.bank__description}>
              <div className={styles.bank__header}>
                <p>City Bank, NA</p>
                <div className={styles.action_container}>
                  <MdOutlineModeEditOutline className={styles.edit_action} />
                  <BsTrash className={styles.delete_action} />
                </div>
              </div>
              <div className={styles.bank__data_content}>
                <div className={styles.info_customers}>
                  <p>***1235 - Si Tampan</p>
                  <p>USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
