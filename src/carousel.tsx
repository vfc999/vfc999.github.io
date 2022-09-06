import * as react from 'react'
import './carousel.scss';
import { prefixPathWithPublicHomeUrl } from './utils';
import { Plock, Breakpoint } from 'react-plock';

export interface CarouselProps {
  urls: string[];
}

export default (props: CarouselProps) => {
  const breakpoints = [
    { size: 640, columns: 1 },
    { size: 768, columns: 2 }
    ]
  return <div className='carousel'>
    <Plock breakpoints={breakpoints} gap="1vw">
      {
        props.urls.map((url) => {
          return (
            <div key={url}>
              <img className='photo' src={prefixPathWithPublicHomeUrl(url)}/>
            </div>
          )
        })
      }
    </Plock>
  </div>
}