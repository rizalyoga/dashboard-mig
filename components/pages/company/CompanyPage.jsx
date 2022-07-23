import React from "react";
import styles from "./CompanyPage.module.scss";

// Component
import Layout from "@/layout/Layout";
import CompanyProfile from "@/components/common/box/company_profile/CompanyProfile";
import CompanyLocation from "@/components/common/box/company_location/CompanyLocation";
import BankAccount from "@/components/common/box/company_bank_account/BankAccount";
import CompanyRelation from "@/components/common/box/company_relation/CompanyRelation";
import CompanyActivity from "@/components/common/box/company_activity/CompanyActivity";

const CompanyPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className={styles.content_container}>
          <div className={styles.left_content}>
            <CompanyProfile />
          </div>
          <div className={styles.right_content}>
            <CompanyLocation />
            <div className={styles.right_bottom_content}>
              <div className={styles.buttom_left}>
                <div className={styles.bottom_left_content}>
                  <BankAccount />
                </div>
                <div className={styles.bottom_right_content}>
                  <CompanyRelation />
                </div>
              </div>
              <div className={styles.buttom_right}>
                <CompanyActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyPage;
