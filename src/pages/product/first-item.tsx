import { ReactElement, useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";

export default function FirstItem() {
  return (
    <div>
      <h1 className={styles.title}>First Item</h1>
    </div>
  );
}

FirstItem.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
