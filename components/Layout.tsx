import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";
import ReactLoading from "react-loading";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath &&  setLoading(false)

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      <div>
        <Navbar />
        {loading && (
          <div className="spinner-wrapper">
            <ReactLoading type="cylon" color="#fff" height={60} width={60} />
          </div>
        )}
        <AnimatePresence>{children}</AnimatePresence>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
