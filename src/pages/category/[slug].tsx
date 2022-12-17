import { ReactElement, useEffect, useState } from "react";
import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import styles from "styles/Home.module.css";
import { useRouter } from "next/router";

export default function CategorySlug() {
  const router = useRouter();
  const { slug, flavor } = router.query;
  return (
    <div>
      <h1 className={styles.title}>
        Category {slug} flavor {flavor}
      </h1>
    </div>
  );
}

CategorySlug.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
