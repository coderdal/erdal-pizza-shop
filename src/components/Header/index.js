import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/images/logo.png" width={144} height={24} alt="logo" />
    </header>
  );
};

export default Header;
