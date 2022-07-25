import React, { useState, useEffect } from "react";
import styles from "./EditCustomer.module.scss";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

// Api
import { getCustomers } from "@/utils/api/customers";

// Component
import Layout from "@/layout/Layout";
import FormCustomer from "@/components/common/form/FormCustomer";

const EditCustomer = () => {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const token = Cookies.get("userAuth");

    if (token) {
      setLoading((load) => !load);

      getCustomers(token).then((res) => {
        setDataCustomer(res.data.filter((customer) => customer.id == id));
        setLoading((load) => !load);
      });
    }
  }, [id]);

  return (
    <Layout>
      <div className={styles.edit_customer__container}>
        <FormCustomer
          dataCustomer={dataCustomer[0]}
          title={"Edit"}
          titleBtn={"Edit"}
          loadingData={loading}
        />
      </div>
    </Layout>
  );
};

export default EditCustomer;
