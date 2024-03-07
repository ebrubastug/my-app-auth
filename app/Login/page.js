"use client";

import React from "react";
import styles from "./styles.module.scss";
import { useRouter, useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();

    if (success) {
      const nextUrl = searchParams.get("next");
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push(nextUrl ?? "/");
      router.refresh();
    } else {
      // Make your shiny error handling with a great user experience
      alert("Login failed");
    }
  };
  return (
    <div className={styles.loginBox}>
      <h2> Login </h2>
      <form onSubmit={handleSubmit}>
        <hr />
        <div className={styles.useBox}>
          <div>
            <input
              className={styles.userName}
              type="text"
              align="center"
              placeholder="Username"
              name="username"
            />
          </div>
          <div>
            <input
              className={styles.password}
              type="password"
              align="center"
              placeholder="Password"
              name="password"
            />
          </div>
          <button className={styles.submit} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
