"use client";

import { useState } from "react";
import styles from "../styles/drawer.module.css";
import { Typography, Button, List, Drawer, Box } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
export default function MenuDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className={styles.icons}>
        <IoSearchOutline />
        <MdPermIdentity />
        <HiOutlineBookmark />
        <HiOutlineShoppingBag />
      </Box>
      <Box className={styles.list}>
        <Typography>Bags</Typography>
        <Typography>Travel</Typography>
        <Typography>Accessories</Typography>
        <Typography>Gifting</Typography>
        <Typography>Jewelry</Typography>
      </Box>
    </Box>
  );

  return (
    <div className={styles.drawer_container}>
      <div className={styles.drawer}>
        <Button onClick={toggleDrawer("right", true)}>
          <RxHamburgerMenu />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
    </div>
  );
}
