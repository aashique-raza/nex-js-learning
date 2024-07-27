"use client";

import React,{useState} from 'react'
import Link from 'next/link'
import styles from './links.module.css'


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

    <nav className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title}/>
        
      ))}
      {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            {/* <form action={handleLogout}> */}
              <button className={styles.logout}>Logout</button>
            {/* </form> */}
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
    </nav>
    <button>menu</button>
    {
      open && (
        <div className={styles.mobileLinks}>
            {
              links.map((link)=(
                <NavLink item={link} key={link.title} />
              ))
            }
        </div>
      )
    }
    </div>
  )
}

export default Links