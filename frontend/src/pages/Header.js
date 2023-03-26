import React from 'react';
import HeaderNav from "../components/HeaderNav";

function Header({ isSignedIn }) {
  return (
    <div>
      <HeaderNav isSignedIn={isSignedIn} />
    </div>
  );
}

export default Header;
