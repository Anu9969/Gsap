import { useRef } from 'react';
import { navLinks } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    // Create a timeline and attach the ScrollTrigger to it
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: navRef.current, // Use the ref for the trigger
        start: 'bottom top',
        end: '+=500',
        scrub: true,
      },
    });

    // Add a .fromTo() animation TO the timeline
    navTween.fromTo(
      navRef.current, // Target the element using the ref
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#000',
        filter: 'blur(10px)', // Use the correct CSS property
        duration: 1,
        ease: 'power1.out',
      }
    );
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          <img src="/images/logo.png" alt="Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">Logo</span>
        </a>
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar__item">
              <a href={`#${link.id}`} className="navbar__link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;





















// import React from 'react'
// import { navLinks } from '../../constants'

// const NavBar = () => {
//   return (
//     <>
//     <div className='flex item-center gap-2'>
//         <a href="#home" className='flex item-center gap-2'>
//             <img src="/images/logo.png" alt="" />
//             <p className='text-white text-5xl'>Logo</p>
//         </a>
//         <ul className='text-white flex space-x-5'>
//             {navLinks.map((links)=> (
//                 <li key={links.id}>
//                  <a href={`#${links.id}`}> {links.title}</a>
//                 </li>
// ))}
//         </ul>
//     </div>

// </>

//   )
// }
