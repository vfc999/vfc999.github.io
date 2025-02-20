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
          Hi there! My name is Vivian and I’m a photographer from Southern California that relocated to New York about a year ago. I am currently working on my doctorate in Physical Therapy and am aiming towards a career in dance medicine working with the Broadway community. I would ultimately like to integrate my love for photography, healthcare, and theatre since each have shaped my life so drastically.
        </p>
        <p>
          I began playing around with photography in late high school as a way to break out of my awkward pre-teen shell. It was a way to encourage myself to walk the extra mile or explore the unknown spot because I never knew where my next shot would come from. It was a central component in fostering my adventurous spirit and it continues to push me to see and do more.
        </p> 
        <p>
          I can’t say there is one particular subject matter I prefer shooting. I have had the wonderful opportunity to shoot all around the world with a wide array of people. While I do not actively seek out projects/work due to my studies, I do my best to accommodate anyone who finds my work  and wants to shoot with me. I have done everything from headshots to cosplay shoots to product shoots and would love to continue diversifying. 
        </p>
      </div>
    </div>
  )
}

export default About;