'use client'

import Link from "next/link";


import styles from './styles.module.scss'
import Footer from "@/components/Footer";
import NavLink from "./NavLink";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
]

const NavLinks = () => {

  const [open, setOpen] = useState(false)

  //TEMPORARY
  const session = true;
  const isAdmin = true;




  return (
    <>
      <div className={`hidden md:flex items-center gap-3`}>
        {links.map(link => (
          <NavLink title={link.title} path={link.path} key={link.title}/>
        ))}
        {
          session ? (
            <>
              {isAdmin && (
                <NavLink title="Admin" path="/admin" />
              )}
              <button className="p-2.5 cursor-pointer bg-text-color text-bg-color padding-2.5 font-bold ">Log Out</button>
            </>
          ) : (
            <NavLink title="Login" path="/login" />
          )
        }
      </div>

      <Image
        className="cursor-pointer inline md:hidden"
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen(prev => !prev)}
      />        


      {
        open && <div className={`absolute top-[7rem] right-0 width-[50%]
        h-mobile-menu bg-var(--bg) flex flex-col items-center
        justify-center gap-2.5
        `}>
          {links.map(link => (
            <NavLink title={link.title} path={link.path} key={link.title} />
          ))}
        </div>
      }
    </>
  );
}

export default NavLinks;