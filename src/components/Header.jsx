import React from "react";
import '../Header.css';
import { Avatar } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { HelpOutline } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{user}] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
        <Avatar
          className="header__avatar"
          alt= {user?.displayName}
          src= {user?.photoURL}
        />
        {/* Time icon  */}
        <AccessTime/>
      </div>
      <div className="header__search">
        {/* Search icon  */}
        <Search/>
        {/* input  */}
        <input type="text" name="search" id="" placeholder="Search here..."/>
      </div>
      <div className="header__right">
        {/* help icon  */}
        <HelpOutline/>
      </div>
    </div>
  );
}

export default Header;
