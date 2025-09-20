import gsap from "gsap"
import {useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import { featureList, goodList} from '../../constants/index.js'

const Art = () => {

  useGSAP(() => {
    const start = 'top top';

    const masktl = gsap.timeline({
      scrollTrigger:{
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,

      }
    })

    masktl
    .to('.will-fade', {opacity:0, stagger: 0.2, ease: 'power1.inOut',})
    .to('masked-img', {scale:1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut'}, '<0.5')
    .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
  })
  // const isMobile = useMediaQuery({ maxWitdth: 768 });


  return (
    <div id="art">
      <div className="container mx- auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="gpace-y-4 will-fade">
            {goodList.map((feature,index) => (
              <li key={index} className="flex items-center gap-1.5">
                <img src="/images/check.png" alt="" />
                <p>{feature}</p>
              </li>
            ))}

          </ul>

          <div className="cocktail-img">
            <img src="/images/under-img.jpg" alt="" 
            className="abs-center masked-img size-full object-contain"
            />
          </div>
            
            <ul className="will-fade space-y-4">
              {featureList.map((features, index) => (
                <li key={index} className="flex items-center justify-start gap-2">
                  <img src="/images/check.png" alt="" />
                  <p className="md:w-fit w-60">{features}</p>
                </li>
              ))}
            </ul>

        </div>

        <div className="masked-container">
          <h2 className="will-fade"> Sip=Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
			      <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Art