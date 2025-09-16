import { useRef } from 'react';
import { navLinks } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
    const navRef = useRef(null);

    useGSAP(() => {
        // Use a .fromTo() tween for more control over the start/end states
        gsap.fromTo(navRef.current, 
            {
                // Starting state: completely transparent
                backgroundColor: 'transparent',
            },
            {
                // Ending state
                // 1. Animate to a SEMI-TRANSPARENT background color
                backgroundColor: 'rgba(0, 0, 0, 0.25)', 
                
                // 2. Apply the backdrop-filter to blur content behind the navbar
                backdropFilter: 'blur(10px)',
                
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: navRef.current,
                    start: 'top top',
                    end: '+=200',
                    scrub: true,
                    // 3. REMOVE pin: true, as CSS will handle positioning
                },
            }
        );
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar__container">
                <a href="#home" className="navbar__logo">
                    <img src="/images/logo.png" alt="Logo" className="navbar__logo-img" />
                    <h2 className="">Logo</h2>
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
