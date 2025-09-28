import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 const openingHours = [
   { day: "Mon–Thu", time: "11:00am – 12am" },
   { day: "Fri", time: "11:00am – 2am" },
   { day: "Sat", time: "9:00am – 2am" },
   { day: "Sun", time: "9:00am – 1am" }
 ];

 const socials = [
   { name: "Facebook", icon: "/images/fb.png", link: "#" },
   { name: "Instagram", icon: "/images/insta.png", link: "#" },
   { name: "Twitter", icon: "/images/x.png", link: "#" }
 ];

 useGSAP(() => {
	const titleSplit = SplitText.create('#contact h2', { type: 'words' });
	
	const timeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#contact',
		start: 'top center',
	 },
	 ease: "power1.inOut"
	})
 
 timeline
	.from(titleSplit.words, {
	 opacity: 0, yPercent: 100, stagger: 0.02
 })
	.from('#contact h3, #contact p', {
		opacity: 0, yPercent: 100, stagger: 0.02
 })
	.to('#f-right-leaf', {
	 y: '-50', duration: 1, ease: 'power1.inOut'
 }).to('#f-left-leaf', {
	 y: '-50', duration: 1, ease: 'power1.inOut'
 }, '<')
})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find the Vedu Obsession</h2>
		
		<div>
		 <h3>VISIT OUR BAR</h3>
		 <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
		</div>
		
		<div>
		 <h3>CONTACT US</h3>
		 <p>(555) 987-6543</p>
		 <p>hello@vedumojos.com</p>
		</div>
		
		<div>
		 <h3>OPEN EVERY DAY</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 <b>{time.day}</b> : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3>SOCIALS</h3>
		 <div className="social-links">
			{socials.map((social) => (
			 <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
				<img src={social.icon} alt={social.name} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	</footer>
 )
}

export default Contact
