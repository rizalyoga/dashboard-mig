import React from "react";
import styles from "./CustomerPage.module.scss";

// Component
import Layout from "@/layout/Layout";
import TableCustomer from "@/components/common/tables/table_customers/TableCustomer";

const CustomerPage = () => {
  return (
    <Layout>
      <div className={styles.customers__container}>
        <div className={styles.customers__inner_container}>
          <h1>Data Customers</h1>

          <div className={styles.tables__container}>
            <div className={styles.tables__action}>
              <div className={styles.tables__search_feature}>
                <input type="text" placeholder="search customer" />
              </div>
              <div className={styles.tables__filter_feature}>
                <select>
                  <option value={true}>Active</option>
                  <option value={false}>Non Active</option>
                </select>
              </div>
            </div>
            <div className={styles.tables__table_container}>
              <TableCustomer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerPage;
