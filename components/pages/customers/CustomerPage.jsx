import React, { useState, useEffect } from "react";
import styles from "./CustomerPage.module.scss";
import { useRouter } from "next/router";

// Component
import Layout from "@/layout/Layout";
import TableCustomer from "@/components/common/tables/table_customers/TableCustomer";

// Icon
import { HiUserAdd } from "react-icons/hi";

const CustomerPage = ({ dataCustomers }) => {
  const [search, setSearch] = useState("");
  const [datasCustomer, setDatasCustomer] = useState(dataCustomers);
  const [filter, setFilter] = useState("all");

  const router = useRouter();

  // Filter function
  useEffect(() => {
    if (search.length > 0) {
      setDatasCustomer(
        dataCustomers.filter((customer) =>
          customer.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    if (filter !== "all") {
      setDatasCustomer(
        dataCustomers.filter((customer) => customer.status.toString() == filter)
      );
    }

    if (filter !== "all" && search.length > 0) {
      setDatasCustomer(
        dataCustomers
          .filter((customer) => customer.status.toString() == filter)
          .filter((customer) =>
            customer.name.toLowerCase().includes(search.toLowerCase())
          )
      );
    }

    if (search.length < 1 && filter === "all") {
      setDatasCustomer(dataCustomers);
    }
  }, [search, filter, dataCustomers]);

  const toAddPage = () => {
    router.push("/customers/add");
  };

  return (
    <Layout>
      <div className={styles.customers__container}>
        <div className={styles.customers__inner_container}>
          <h1>Data Customers</h1>

          <div className={styles.tables__container}>
            <div className={styles.tables__action}>
              <div className={styles.tables__search_feature}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name"
                />
                <HiUserAdd
                  className={styles.add_user_icon}
                  onClick={toAddPage}
                />
              </div>
              <div className={styles.tables__filter_feature}>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value={"all"}>All</option>
                  <option value={true}>Active</option>
                  <option value={false}>Non Active</option>
                </select>
              </div>
            </div>
            <div className={styles.tables__table_container}>
              <TableCustomer search={search} dataCustomers={datasCustomer} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerPage;
