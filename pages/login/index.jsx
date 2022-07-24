import React from "react";
import Head from "next/head";

import LoginPage from "@/components/pages/login/LoginPage";

const Login = () => {
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
      <LoginPage />
    </>
  );
};

export default Login;
