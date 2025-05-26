"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
   <header dir='rtl' style={headerStyle}>
    <motion.div style={leftContainerStyle}
    transition={{type:'spring',damping:18,mass:0.75}}
    initial={{opacity:0,x:-1000}} animate={{opacity:1,x:0}}
>
    <h1 className='' style={bookTitleStyle}>كتب للقرائه اون لاين
    </h1>
        
    </motion.div>

    <motion.div style={rightContainerStyle} 
    transition={{type:'spring',damping:18,mass:0.75}}
    initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}
    >
<Link href="/profile" style={avatarLinkStyle}>

   
</Link>

    </motion.div>
   </header>
  )
}


const headerStyle = {

    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'1rem 1re 1rem 0',
    color:'#fff'
}

const leftContainerStyle = {
    display:'flex',
    alignItems:'center'
}

const bookTitleStyle = {
    marginRight:'2rem',
    color:'#ffb011'
}

const searchInputStyle = {
    padding:"0.7rem 1rem",
    marginLeft:'3.6rem',
    borderRadius:'70px',
    backgroundColor:'rgb(248,234,221)',
    border:'2px solid #000',
    minWidth:'320px',
}

const rightContainerStyle ={
    display:'flex',
    alignItems:'center'
} 

const avatarLinkStyle = {
    marginRight:'1rem'
}

const avatarStyle ={
    width:"40px",
    height:'40px',
    borderRadius:'50%'
}
