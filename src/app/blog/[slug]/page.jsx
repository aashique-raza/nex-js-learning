import React from 'react'
import styles from './singlepostpage.module.css'
import Image from 'next/image'

function SinglePostPage() {
  return (
    <div className={styles.container}>
   
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/18005725/pexels-photo-18005725/free-photo-of-young-woman-in-a-yellow-raincoat-crouching-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" fill className={styles.img} />
      </div>
 
    <div className={styles.textContainer}>
      <h1 className={styles.title}>title  </h1>
      <div className={styles.detail}>
        <Image className={styles.avatar} src={'https://images.pexels.com/photos/18005725/pexels-photo-18005725/free-photo-of-young-woman-in-a-yellow-raincoat-crouching-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} fill/>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>
            01.02.2024
          </span>
        </div>
      </div>
      <div className={styles.content}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde saepe ad rerum molestiae eum nobis? Dicta rerum, suscipit quibusdam sapiente modi autem delectus eligendi. Molestiae et error nostrum tempore!</div>
    </div>
  </div>
  )
}

export default SinglePostPage
// {post.createdAt.toString().slice(4, 16)}
// {post && (
//   <Suspense fallback={<div>Loading...</div>}>
//     <PostUser userId={post.userId} />
//   </Suspense>
// )}