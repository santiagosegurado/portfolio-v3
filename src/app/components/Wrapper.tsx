"use client";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import ResponsiveNavbar from "./navbar/ResponsiveNavbar";
import ResponsiveNavList from "./navbar/ResponsiveNavList";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [menuModalToggle, setMenuModalToggle] = useState(false);

  const handleMenuModalToggle = () => {
    setMenuModalToggle(!menuModalToggle);
  };

  return (
    <section className="max-w-full bg-primaryBlue h-[calc(100vh-50px)] lg:h-[calc(100vh-110px)] m-6 lg:m-14 rounded-xl border border-accentBorder font-[family-name:var(--font-fira-code)] relative overflow-hidden">
      <Navbar />
      <ResponsiveNavbar
        menuModalToggle={menuModalToggle}
        handleMenuModalToggle={handleMenuModalToggle}
      />
      <ResponsiveNavList
        menuModalToggle={menuModalToggle}
        handleMenuModalToggle={handleMenuModalToggle}
      />
      {children}
    </section>
  );
};

export default Wrapper;
