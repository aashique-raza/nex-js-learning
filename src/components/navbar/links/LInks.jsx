"use client";

import React,{useState} from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import Image from 'next/image';
import imagesrc from '../../../../public/menu.png'


    const links=[
        {
            title:'home',
            path:'/'
        },
        {
            title:'about',
            path:'/about'
        },
        {
            title:'contact',
            path:'/contact'
        },
        {
            title:'blog',
            path:'/blog'
        },
    ]
import NavLink from './navLink/navLink'
function Links() {
  const [open, setOpen] = useState(false);
    // temporary
    const session=true;
    const isAdmin=true

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {session && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {/* <button style={{fontSize:'50px'}}>menu</button> */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links