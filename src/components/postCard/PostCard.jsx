import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function PostCard() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/18005725/pexels-photo-18005725/free-photo-of-young-woman-in-a-yellow-raincoat-crouching-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" fill className={styles.img}/>
            </div>
            <span className={styles.date}>02.01.2024</span>
        </div>
        <div className={styles.bottom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro laudantium exercitationem earum excepturi obcaecati, reprehenderit, quibusdam ut nostrum sed corporis nobis adipisci velit dolores placeat accusantium quidem quo sint. </p>
                <Link href={'/blog/post'}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard