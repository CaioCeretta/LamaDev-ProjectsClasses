'use client'

import Link from "next/link";

import styles from './styles.module.scss'
import link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: NavLinkProps) => {

  const pathName = usePathname()

  return (
    <div >
      <Link
        className={`${styles.link} ${pathName === path && styles.active}`}
        href={path}
        key={title}>
        {title}
      </Link>
    </div>
  )

}

export default NavLink;