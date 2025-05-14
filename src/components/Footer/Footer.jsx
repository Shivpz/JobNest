// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${styles.footer} bg-white text-center py-4 text-gray-600`}
    >
      <p>&copy; {new Date().getFullYear()} JobNest. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
