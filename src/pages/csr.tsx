import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";
import styles from "../styles/Home.module.css";

export default function CSR() {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    console.log("client");
    setTime(new Date().toISOString());
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{time}</h1>
    </div>
  );
}

CSR.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
