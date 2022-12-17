import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getStaticProps: GetStaticProps = async () => {
  console.log("isr");
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 1,
  };
};

export default function ISR({ time }: { time: any }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{time}</h1>
      </main>
    </div>
  );
}
