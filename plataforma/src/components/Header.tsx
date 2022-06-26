import { useState } from "react";
import Logo from "./Logo";
// import { LogoMobile } from "./LogoMobile";
import { List } from "phosphor-react";
import { X } from "phosphor-react";

function Header() {
  return (
    <header className="w-full py-5 p-6 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="md:hidden flex justify-center items-center space-x-4 ">
        <span>Aulas</span>
        {/* Button menu Aulas */}
        <List className={`navBtn `} />
        {/* Button Close menu */}
        <X className={`navBtn hidden`} />
      </div>
    </header>
  );
}

export default Header;
