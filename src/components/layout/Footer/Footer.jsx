import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <footer className="footer footer-center text-base-content bottom-0">
        <div>
          <p>
            <span className="text-primary">Copyright © 2022</span> - Ricardo
            Vaca y Michael Adame
          </p>
        </div>
      </footer>
    )
  );
};

export default Footer;
