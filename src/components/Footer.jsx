import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Book Space. All rights reserved.
        </p>
        <p>Contact: fake.store@exapmle.com</p>
      </div>
    </footer>
  );
};

export default Footer;
