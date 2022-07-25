import React from "react";
import styles from "./AddCustomer.module.scss";

// Component
import Layout from "@/layout/Layout";
import FormCustomer from "@/components/common/form/FormCustomer";

const AddCustomer = () => {
  return (
    <Layout>
      <div className={styles.add_customer__container}>
        <FormCustomer title={"Tambah"} titleBtn={"Add"} />
      </div>
    </Layout>
  );
};

export default AddCustomer;
