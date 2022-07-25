import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", background: "#F1F7F2", marginTop: "-10px" }}
    >
      <h1
        style={{ color: "GrayText", textAlign: "center", paddingTop: "50vh" }}
      >
        Oops Page Not Found
      </h1>
    </div>
  );
};

export default NotFoundPage;
