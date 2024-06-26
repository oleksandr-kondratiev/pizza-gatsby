import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; Slick's Slices {year}</p>
    </footer>
  );
};

export default Footer;
