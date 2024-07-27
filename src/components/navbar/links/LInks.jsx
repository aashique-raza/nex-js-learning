import React from 'react'
import Link from 'next/link'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
function Links() {


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

    // temporary
    const session=true;
    const isAdmin=true

  return (
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
  )
}

export default Links