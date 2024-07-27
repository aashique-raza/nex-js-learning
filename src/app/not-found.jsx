import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div>
        <h1>not found</h1>
        <p>sorry the page you looking is not exists</p>
        <Link href={'/'}>return to home</Link>
    </div>
  )
}

export default NotFound