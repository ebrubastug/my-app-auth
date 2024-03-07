"use-client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

function Login() {
  return (
    <div className={styles.loginBox}>
      <h2> Login </h2>
      <form>
        <hr />
        <div className={styles.useBox}>
          <div>
            <input
              className={styles.userName}
              type="text"
              align="center"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className={styles.password}
              type="password"
              align="center"
              placeholder="Password"
            />
          </div>
          <Link href="/" className={styles.submit}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
