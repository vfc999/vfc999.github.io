import * as react from 'react'
import { prefixPathWithPublicHomeUrl } from '../shared/utils'
import './about.scss';

const About = () => {
  return (
    <div className='about animate__animated animate__fadeIn'>
      <div className='photo'>
        <img src={prefixPathWithPublicHomeUrl('/photos/WebsiteSelfie.jpg')}/>
      </div>
      <div className='description'>
        <h3>Vivian Faye Chen</h3>
        <p>
           Hi there! My name is Vivian and I’m a photographer from Southern California that relocated to New York in 2019. I’ve been shooting for over 15 years and would say I’m an amateur photographer with an advanced eye.
        </p>
        <p>
           I began experimenting with photography as a camera shy high schooler who would rather be behind the camera instead of in front of it. Eventually this hideaway became my why. It’s why I would wake up early for a hike or why I’ll walk the extra mile for the better view. It’s  why I push myself to always do and see more; I’m always in pursuit of the next shot.
        </p> 
        <p>
           My subject matter tends to vary. My life has led me toward more landscape and street photography, both of which I’m still growing with. I particularly love working with the interplay of geometric shapes and contrasting lights to create deeply atmospheric photographs. I have also done my share of portrait shots, mostly cosplay and graduation but have recently started experimenting with more studio work as well.
        </p>
        <p>
            By day (technically night) I’m am a Physical Therapist working on Broadway. I love theater and I would love to marry my passion for theatre and healthcare with my photography. I am very open to collaboration ideas and I am currently brainstorming a project that highlights dancer movement and strength. Otherwise my main focus has been getting my print shop up which I hope you check out!        </p>
      </div>
    </div>
  )
}

export default About;