"use client";
import LoginPage from "@/app/_components/pages/LoginPage";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    const mswFetch = async () => {
      const res = await fetch("http://localhost:9090/test");
      const data = await res.json();

      console.log("msw fetch data : ", data);
    };

    mswFetch();
  }, []);
  return <LoginPage />;
}
