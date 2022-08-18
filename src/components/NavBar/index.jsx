import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";




export default function NavBar() {
  const [active, setActive] = useState(0);
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const location = useLocation()
  useEffect(() => {



    let path = location.pathname;
    console.log(location)
    switch (path) {
      case '/mint':
        setActive(1)
        setMobileNavBar(false)
        break;
      case '/terms':
        setActive(4)
        setMobileNavBar(false)
        break;
      case '/':
        if (location.hash === '#blueprint') {
          setActive(2)
          setMobileNavBar(false)
          document.getElementById('blueprint').scrollIntoView({
            behavior: 'smooth'
          })
        } else if (location.hash === '#faq') {
          setActive(3)
          setMobileNavBar(false)
          document.getElementById('faq').scrollIntoView({
            behavior: 'smooth'
          })
        } else if (location.hash === '#welcome') {
          setActive(0)
          setMobileNavBar(false)
          document.getElementById('welcome').scrollIntoView({
            behavior: 'smooth'
          })
        }
        break;

      default:
        break;
    }
  }, [location])

  return (
    <div className="navbar">
      <div className="navbar-inner-wrapper">
        <Link to="/"><img src="assets/svg/NavBar/logo4x.png" className='navbar-logo' alt="" /></Link>

        <div className="navbar-tabs-container">
          <Link to='/#welcome'><span className={active === 0 ? 'navbar-tab active' : 'navbar-tab'} onClick={() => setActive(0)}>Welcome</span></Link>
          <Link to="/mint"><span className={active === 1 ? 'navbar-tab active' : 'navbar-tab'} onClick={() => setActive(1)}>Mint</span></Link>


          <Link to='/#blueprint'><span className={active === 2 ? 'navbar-tab active' : 'navbar-tab'} onClick={() => setActive(2)}>Blueprint</span></Link>
          <Link to='/#faq'>  <span className={active === 3 ? 'navbar-tab active' : 'navbar-tab'} onClick={() => setActive(3)}>FAQ</span></Link>

          <Link to="terms"><span className={active === 4 ? 'navbar-tab active' : 'navbar-tab'} onClick={() => setActive(4)}>Terms</span></Link>

          <div className="social-icons">

            <a href='https://t.me/+NvY5I_lL9wtkZGI5' target='_blank' rel="noreferrer"><div className="social-icon"><img src="/assets/svg/NavBar/telegram.svg" alt="" /></div></a>
            
            <a href='https://www.instagram.com/seven22project/' target='_blank' rel="noreferrer"><div className="social-icon"><img src="/assets/svg/NavBar/instagram.svg" alt="" />  </div></a>
              
             
            <a href='https://discord.gg/VJGKsXBZ58' target='_blank' rel="noreferrer"><div className="social-icon"><img src="/assets/svg/NavBar/discord.svg" alt="" /></div></a>

          </div>
        </div>
        <div className="list-joining-link">
          <a href="https://onemint.io/join/Seven22" target='_blank' rel="noreferrer">Click to Join the list</a>
          <img src="/assets/svg/NavBar/arrow.svg" alt="" />

        </div>
        <img src="/assets/svg/NavBar/hamburgurmenu.svg" onClick={() => mobileNavBar ? setMobileNavBar(false) : setMobileNavBar(true)} className='navbar-mobile-menu-icon' alt="" />

        {
          mobileNavBar &&
          <div className="navbar-mobile" >
            <Link className='link-class' to="/mint"><div className="navbar-mobile-item">MINT</div></Link>
            <Link className='link-class' to='/#blueprint'><div className="navbar-mobile-item">BLUEPRINT</div></Link>
            <Link className='link-class' to='/#faq'><div className="navbar-mobile-item">FAQ</div></Link>
            <Link className='link-class' to="terms"><div className="navbar-mobile-item">TERMS</div></Link>
            <div className="navbar-mobile-item">
              <div className="social-icons">

                
                <a href='https://t.me/+NvY5I_lL9wtkZGI5' target='_blank' rel="noreferrer"><div className="social-icon"><img src="/assets/svg/NavBar/telegram.svg" alt="" />  </div></a>
                  
                    
              
           
                  <a href='https://www.instagram.com/seven22project/' target='_blank' rel="noreferrer">     <div className="social-icon"><img src="/assets/svg/NavBar/instagram.svg" alt="" />  </div></a>
              
                
                  <a href='https://discord.gg/VJGKsXBZ58' target='_blank' rel="noreferrer"><div className="social-icon"><img src="/assets/svg/NavBar/discord.svg" alt="" />   </div></a>
              

              </div></div>

          </div>
        }
      </div>
    </div>
  )
}
