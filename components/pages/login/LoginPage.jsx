import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.scss";
import { useRouter } from "next/router";
import { loginAccount } from "@/utils/api/login";
import Cookies from "js-cookie";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  // Chect Authentication
  useEffect(() => {
    const token = Cookies.get("userAuth");
    if (token) {
      router.push("/company");
    }
  }, []);

  // Login Handle
  const onLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    setLoading((loading) => !loading);

    loginAccount(payload).then((res) => {
      if (res === true) {
        router.push("/company");
      } else {
        setError(`Error : ${res}`);
      }

      setLoading((loading) => !loading);
    });
  };

  return (
    <div className={styles.login__container}>
      <div className={styles.login__form_container}>
        <form onSubmit={onLogin}>
          <div className={styles.form_email}>
            <label>Email : akun8@mig.id</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex.johndoe@mig.id"
              required
            />
          </div>
          <div className={styles.form_password}>
            <label>Password : B71D0BDA</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <div className={styles.login_button}>
            <input type="submit" value={loading ? "loading..." : "Login"} />
            <p className={styles.error}>{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
