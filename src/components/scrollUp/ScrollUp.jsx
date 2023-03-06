import React from 'react'
import './Scrollup.css'

const ScrollUp = () => {
   
      function setScrollVisible(){
        if (typeof window !== "undefined") {
          
          if(window.scrollY >= 38){
            console.log('Screen: ', window.scrollY);
            document?.querySelector(".scrollup")?.classList.add("show__scroll")
          }
          else {
           document?.querySelector(".scrollup")?.classList.remove("show__scroll")
          }
        }
      }
      if (typeof window !== "undefined") {
        window.addEventListener('scroll', setScrollVisible)
    }
  
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp