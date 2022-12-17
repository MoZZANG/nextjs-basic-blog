import { ReactElement, useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CartDateSlug() {
  const router = useRouter();
  const { date } = router.query;

  return (
    <div>
      <h1 className={styles.title}>Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href={"/cart/2022/02/02"}>2022/02/02</Link>
      <button onClick={() => router.push("/cart/2022/02/02")}>
        2022/02/02
      </button>
    </div>
  );
}

CartDateSlug.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
