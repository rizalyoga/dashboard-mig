import React from "react";
import styles from "./Layout.module.scss";
import Head from "next/head";

// Component
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MIG Dashboard</title>
        <link
          rel="shortcut icon"
          href="/asset/triangle.png"
          type="image/x-icon"
        />
      </Head>
      <main className={styles.layout__body}>
        <Sidebar />
        <div className={styles.body_content}>
          <Navbar />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
