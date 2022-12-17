import Link from "next/link";
import React from "react";

const SubLayout = ({ children }: { children: any }) => {
  return (
    <>
      <h1>
        <Link href="/">Home으로</Link>
      </h1>
      {children}
    </>
  );
};

export default SubLayout;
