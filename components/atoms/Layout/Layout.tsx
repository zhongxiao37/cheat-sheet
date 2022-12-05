import Head from "next/head";
import React from "react";

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto px-4">{children}</div>
    </>
  );
};

export default Layout;
