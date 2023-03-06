import React, {useRef} from 'react'
import './Scrollup.css'

const ScrollUp = () => {
   
    
     
        console.log( );
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