"use client"
import BookCard from '@/components/shared/onlinebooks/components/BookCard'
import Header from '@/components/shared/onlinebooks/components/Header'
import SideBar from '@/components/shared/onlinebooks/components/SideBar'
import { books } from '@/constants/mockData'
import { motion } from 'framer-motion'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className='pt-24'>
    <div dir='rtl' className={styles.main}>
  <div>

    <Header/>

      <div className={styles.containerStyle}>
    <section className={styles.content}>
<SideBar/>
    </section>

<div className={styles.grouper}>
  <h1 className=" text-2xl py-3 pb-5 px-5  font-medium">كتب روايات انجليزيه </h1>
  <ul className={styles.ulGroupStyle}>
    {
      books.map((book,i)=>
        <motion.li 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{type:'spring',damping:50,mass:0.75}}
        initial={{opacity:0,x:200*(i+1)}}
        animate={{opacity:1,x:0}}
        key={i}>
          <a href={`/book/${book.id}`} style={{textDecoration:'none'}} >
           <BookCard title={book.title} coverImage={book.image} description={book.description} />
          </a>
        </motion.li>
      )
    }
  </ul>
</div>

      </div>

  </div>
    </div>

    </main>
  )
}


