import React from 'react'

const Social = () =>  {
  const linkeidin = "https://linkedin.com/in/marcos-chichava-bs321631"
  const github = "https://github.com/M-Chichava"
  const instagram = "https://www.instagram.com/chichava.marcos/?hl=en"
  
    return (
      <div class="home__social">
        <a href={linkeidin} className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-linkedin-alt"></i>
        </a>

        <a href={github} className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-github-alt"></i>
        </a>

        <a href={instagram} className="home__social-icon" target="_blank" rel="noreferrer">
          <i class="uil uil-instagram" ></i>
        </a>
      </div>
    )
}

export default Social

