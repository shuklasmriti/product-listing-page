import styles from "../styles/header.module.css";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { MdPermIdentity } from "react-icons/md";
import { HiOutlineBookmark } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MenuDrawer from "./Drawer";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.name}>
          <span>tann</span>
          <span>trim</span>
        </div>
        <div className={styles.icons}>
          <IoSearchOutline />
          <MdPermIdentity />
          <HiOutlineBookmark />
          <HiOutlineShoppingBag />
        </div>
        <MenuDrawer />
      </div>
      <div className={styles.link}>
        <Link href="/">Bags</Link>
        <Link href="/">Travel</Link>
        <Link href="/">Accessories</Link>
        <Link href="/">Gifting</Link>
        <Link href="/">Jewelry</Link>
      </div>
    </>
  );
};

export default Header;
