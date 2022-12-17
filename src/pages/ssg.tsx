import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  console.log("SSG");
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};

export default function SSG({ time }: { time: any }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{time}</h1>
    </div>
  );
}

SSG.getLayout = function getLayout(page: HTMLElement) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
