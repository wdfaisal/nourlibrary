"use client"
import { motion } from 'framer-motion';



export default function SideBar() {
    const MenuList = [
        {
          title:"الرئيسيه",
          icon: <i className="fa fa-home" style={iconStyle}></i>
        },
        
      ]
  return (
    <>
    {
          MenuList.map((list,i)=> <motion.a href='https://nourlibrary.vercel.app/' key={i}
            transition={{ type: 'spring', damping: 22, mass: 0.99 }}
            initial={{ opacity: 0, x: -2000 * (i+1)}} animate={{ opacity: 1, x: 0 }}>
            
              <ul style={listStyle}>
                {
                  <motion.li style={listItemStyle} whileHover={{ scale: 1.1 }}>
                  <motion.span  transition={{ type: 'spring', damping: 30, mass: 0.99 }}
            initial={{ opacity: 0, x: -10000 * (i+1) }} animate={{ opacity: 1, x: 0 }}  style={{color:'#000',textDecoration:'none',fontSize:"14px",fontWeight:'600',marginLeft:'10px',lineHeight:2}} >
                     {list.icon}{list.title}
                  </motion.span>
                </motion.li>
                }
              
              </ul>
            </motion.a>)
        
    }
    </>
  )
}


const sidebarStyle = {
    width: '250px',
    height: '100vh',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '1rem',
  };
  
  
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    minWidth:'200px'
  };
  
  const listItemStyle = {
    marginBottom: '1rem',
    fontSize: '1.2rem',
    padding:'10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    cursor:'pointer',
    borderRadius:'10px'
  
  };
  
  const iconStyle = {
    marginRight: '0.5rem',
  };