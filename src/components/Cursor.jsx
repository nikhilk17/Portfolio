import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Cursor = () => {
  useGSAP(() => {
    const cursor = document.querySelector('.cursor')
    // mouse move handler with a check for the feature section hover state
    const handleMouseMove = (e) => {
      // Check if the feature section is hovered
      const isFeatureHover = document.querySelector('.feature-section:hover')
      if (isFeatureHover) {
        // Do not run the global cursor animation when the feature section is active
        gsap.to(cursor, {
            scale: 0,
            duration: 1,
            ease: 'back.out'
          })
        return
      }
      const x = e.clientX - 12
      const y = e.clientY - 12
      gsap.to(cursor, {
        scale: 1,
        x: x,
        y: y,
        duration: 1,
        ease: 'back.out'
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    
    // Clean up the event listener on unmount
    return () => document.removeEventListener('mousemove', handleMouseMove)
  })

  return (
    <div className="cursor bg-white h-6 w-6 rounded-full z-50 fixed filter pointer-events-none mix-blend-difference"></div>
  )
}

export default Cursor