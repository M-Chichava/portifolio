import React, {useRef} from 'react'
import './Scrollup.css'

const ScrollUp = () => {
   
  const scrollUp = document.querySelector(".scrollup")
    function setScrollVisible(){
      if (typeof window !== "undefined") {
        if(window.scrollY >= 38 && scrollUp?.classList !== "undefined" && scrollUp?.classList !== null){
          console.log('Screen: ', window.scrollY);
          scrollUp?.classList.add("show__scroll")
        }
        else {
          scrollUp?.classList.remove("show__scroll")
        }
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', setScrollVisible)
    }
     
      //  window.addEventListener("scroll", () => {
           // const scrollUp = document.queryselector(".scrollup");
            
           // if(this.scrollY >= 560) scrollUp.classListener.add("show__scroll")
           // else scrollUp.classListener.remove("show__scroll")
       // })
  
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default ScrollUp