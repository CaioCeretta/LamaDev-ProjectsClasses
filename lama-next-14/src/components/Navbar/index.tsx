import Link from "next/link";
import NavLinks from "./NavLinks";

import styles from './styles.module.scss'
import Footer from "../Footer";


const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className="font-bold text-xl">Lama</div>
      <div>
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;