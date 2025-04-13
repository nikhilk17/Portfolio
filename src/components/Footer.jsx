import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {

    useGSAP(()=>{

        gsap.fromTo('.text-ani', 
            {
                y:40,
                opacity:0,
            },{
          y: 0,
          duration: 1,
          opacity: 1,
          scrub : 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.footer-con',
            start: 'top 70%',
            end: 'top top',
            // markers: true,
            scrub: 1.5,           // animates only once (optional, looks clean)
          }
        });

    }, [])
return (

    <div className='p-1 overflow-hidden footer-con'>

<div className="relative rounded-3xl h-screen w-full bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: `url('https://i.ibb.co/0jHj4Xsk/Screenshot-2025-03-31-at-4-29-51-PM.png')` }}
>
    <div className='flex flex-col text-ani gap-5 font-serif font-light justify-center text-slate-200 items-center h-full'>
        <p className='max-w-3xl  text-center text-2xl md:text-4xl font-light px-4'>
    Have a project idea in mind? Let’s chat about how we can bring it to life!
        </p>

        <a href="mailto:knikhilgoud2004@gmail.com">
        <button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-slate-300 transition-colors">
            Email me
          </button>
        </a>
    </div>
    {/* <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-5 justify-center items-center py-10'>
       <div>
       <p className='text-center text-slate-200 font-light text-sm md:text-base'>
       © 2025 All rights reserved
       </p>
       </div>
       </div> */}
</div>
       </div>
)
}

export default Footer
