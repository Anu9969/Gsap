import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

import { navLinks } from '../../constants/index.js'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(500px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav>
	 <div>
		<a href="#home" className="flex items-center gap-2">
		 <img className="h-15 w-15" src="/images/logovedu.png" alt="logo" />
		 <p>VEDU MOJO</p>
		</a>
		
		<ul>
		 <li><a href="#mojos">Vedu Mojos</a></li>
		 <li><a href="#about">About Vedu</a></li>
		 <li><a href="#art">The Vedu Art</a></li>
		 <li><a href="#contact">Contact</a></li>
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar