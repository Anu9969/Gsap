'use client';

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 const veduMojos = [
   {
     id: 1,
     name: "The Classic Vedu Mojito",
     title: "Simple Ingredients, Bold Vedu Flavor",
     description: "Made with Vedu rum, fresh lime juice, and a hint of muddled mint, the Vedu Mojito is easy to make and full of character. Add a spritz of soda for the perfect drink on any Vedu night.",
     image: "/images/drink1.png"
   },
   {
     id: 2,
     name: "The Raspberry Vedu Mojito",
     title: "Sweet Berry Vedu Magic",
     description: "A fruity twist on our classic Vedu Mojito, featuring fresh raspberries muddled with Vedu rum and mint.",
     image: "/images/drink2.png"
   },
   {
     id: 3,
     name: "The Vedu Violet Breeze",
     title: "Elegantly Crafted Vedu Creation",
     description: "Our signature purple-hued Vedu Mojito, made with butterfly pea flower-infused Vedu rum and fresh citrus.",
     image: "/images/drink3.png"
   },
   {
     id: 4,
     name: "The Curacao Vedu Mojito",
     title: "Tropical Vedu Paradise",
     description: "Blue Curacao meets Vedu rum in this Caribbean-inspired creation, perfect for those summer Vedu nights.",
     image: "/images/drink4.png"
   }
 ];
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalMojos = veduMojos.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalMojos) % totalMojos;
	setCurrentIndex(newIndex);
 }
 
 const getMojoAt = (indexOffset) => {
	return veduMojos[(currentIndex + indexOffset + totalMojos) % totalMojos]
 }
 
 const currentMojo = getMojoAt(0);
 const prevMojo = getMojoAt(-1);
 const nextMojo = getMojoAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Vedu Mojito Menu
	 </h2>
	 
	 <nav className="cocktail-tabs" aria-label="Vedu Mojito Navigation">
		{veduMojos.map((mojo, index) => {
		 const isActive = index === currentIndex;
		 return (
			<button key={mojo.id} className={`
				${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {mojo.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevMojo.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextMojo.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentMojo.image} className="object-contain" alt={currentMojo.name}/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Recipe for:</p>
			<p id="title">{currentMojo.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentMojo.title}</h2>
			<p>{currentMojo.description}</p>
		 </div>
		</div>
	 </div>
	</section>
 )
}

export default Menu