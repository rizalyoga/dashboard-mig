import React from "react";
import styles from "./CompanyProfile.module.scss";
import Image from "next/image";

// Icons
import { MdOutlineModeEditOutline, MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { TbPhone } from "react-icons/tb";

const CompanyProfile = () => {
  return (
    <div className={styles.box__company_profile_container}>
      <div className={styles.company__profile_image}>
        <div className={styles.company__cover}>
          <Image
            src="/asset/cover-company.webp"
            alt="cover-company"
            height={200}
            width={600}
            className={styles.company__covers}
          />
        </div>
        <div className={styles.company__photo_profile_container}>
          <div className={styles.company__photo_profile}>
            <Image
              src="/asset/MIG-logo.webp"
              alt="cover-company"
              height={100}
              width={100}
              className={styles.company__photo}
            />
          </div>
        </div>
      </div>
      <div className={styles.company__names_container}>
        <div className={styles.company__name}>
          <h4>Mitramas Infosys Global</h4>
        </div>
        <div className={styles.company__major_name}>
          <p>Layanan IT</p>
          <p className={styles.edit_major}>
            <MdOutlineModeEditOutline /> Sunting Profile
          </p>
        </div>
      </div>
      <div className={styles.company__desc_container}>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Status Perusahaan</p>
          <p className={styles.desc_value}>Aktif</p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Singkatan</p>
          <p className={styles.desc_value}>MIG</p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Alamat Perusahaan</p>
          <p className={styles.desc_value}>
            Jl.Tebet Raya No.42, Jakarta Selatan
          </p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Penanggun Jawab (PIC)</p>
          <p className={styles.desc_value}>John Doe</p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Tanggal PKP</p>
          <p className={styles.desc_value}>03 Maret 2021</p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>E-mail</p>
          <p className={styles.desc_value}>
            <MdOutlineEmail /> mig@mitrasolusi.group
          </p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>No.Telp</p>
          <p className={styles.desc_value}>
            <TbPhone /> 021-111-345
          </p>
        </div>
        <div className={styles.desc_box}>
          <p className={styles.desc_title}>Situs Web</p>
          <p className={styles.desc_value}>
            <IoIosGlobe /> mitramas.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
