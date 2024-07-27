import React from 'react'
import Link from 'next/link'

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

  return (
    <nav>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>{link.title}</Link>
      ))}
    </nav>
  )
}

export default Links