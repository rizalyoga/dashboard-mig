import React, { useEffect } from "react";
import styles from "./Layout.module.scss";
import Head from "next/head";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import NProgress from "nprogress";

// Component
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("userAuth");
    if (!token) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    router.events.on("routeChangeError", () => {
      NProgress.done();
    });

    return () => {
      NProgress.done();
    };
  }, []);

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
