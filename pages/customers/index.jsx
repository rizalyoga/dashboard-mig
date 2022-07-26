import React from "react";

// Component
import CustomerPage from "@/components/pages/customers/CustomerPage";

const Customers = (props) => {
  return <CustomerPage dataCustomers={props.data} />;
};

export default Customers;

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.userAuth;

  if (token) {
    const config = {
      headers: { Authorization: `${token}` },
    };

    const response = await fetch(
      "https://mitramas-test.herokuapp.com/customers",
      config
    );

    const dataCustomers = await response.json();

    // Pass data to the page via props
    return { props: dataCustomers };
  }

  return { props: {} };
};
