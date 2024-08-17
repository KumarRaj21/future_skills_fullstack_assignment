import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-1'>
        <div className='footer-1-head'>
            Abstract
        </div>
        <div className='footer-1-links'>
          Branches
        </div>
      </div>
      <div className='footer-2'>
        <div className='footer-2-head'>
         Resourses
        </div>
        <div className='footer-2-links'>
             <p>Blog</p>
             <p>Help Center</p>
             <p>Release Notes</p>
             <p>Status</p>
        </div>
      </div>
      <div className='footer-3'>
        <div className='footer-3-head'>
          Community
        </div>
        <div className='footer-3-links'>
        <p>Twitter</p>
             <p>Linkedin</p>
             <p>Facebook</p>
             <p>Dribble</p>
             <p>Podcast</p>
        </div>
      </div>
      <div className='footer-4'>
        <div className='footer-4-head'>
         Contact Us
        </div>
        <div className='footer-4-links'>
        <p>About us</p>
             <p>Careers</p>
             <p>Legal</p>
        </div>
      </div>
      <div className='footer-5'>
       @copyright 2022 <br/>
       Abstract Sudio Design, Inc <br/>
       All rights reserved
      </div>
    </div>
  )
}

export default Footer