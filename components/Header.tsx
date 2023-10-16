import Image from "next/image";
import React from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <main>
        <div>
          <div>
            <Image src={logo} alt="logo" width="200" height="200" />
          </div>
          <div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
