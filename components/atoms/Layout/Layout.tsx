import Head from "next/head";
import Link from "next/link";
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

      <div className="container mx-auto px-4">
        <Link href="/">
          <h1 className="text-4xl font-bold text-blue-600 mt-16 mb-12">
            Ruby Cheat Sheet
          </h1>
        </Link>
        {children}
      </div>
    </>
  );
};

export default Layout;
